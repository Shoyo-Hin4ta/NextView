import { auth } from "./auth"

export default auth((req) => {
  // req.auth
  const isLoggedIn = !!req.auth;
  console.log(isLoggedIn);
  // console.log(req);

  if(!isLoggedIn && req.nextUrl.pathname != "/login"){
    return Response.redirect(new URL("/login", req.nextUrl));
  }
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}