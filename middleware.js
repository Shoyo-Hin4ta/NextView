import { NextResponse } from 'next/server'
// This function can be marked `async` if using `await` inside
// import { getDataFromToken } from '@/lib/helper';

export async function middleware(request) {

    // const userID = await getDataFromToken(request);
    // const user = await Users.findOne({_id : userID}).select("-password");

    // console.log(userID);

    const path = request.nextUrl.pathname;

    const isPublicPath = path === '/login';

    const token = request.cookies.get("token")?.value || ''

    if (token && isPublicPath){
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/login', request.url))
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/login',
    '/dashboard',
    '/dashboard/users',
    '/dashboard/products',
    '/dashboard/transactions',
    '/dashboard/users/:id',
    '/dashboard/products/:id']
}