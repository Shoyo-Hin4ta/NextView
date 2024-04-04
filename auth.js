import NextAuth from "next-auth"
import CredentailsProvider from "next-auth/providers/credentials"

export const {
  handlers: { GET, POST },
  auth,
  signIn
} = NextAuth({
  providers: [
    CredentailsProvider({
        name:"User Credentials",
        //user supplied username and password
        authorize: async(credentials) => {
            const user = { id : 12, name: "ritik", password: "admin"};
            if(credentials?.username === user.name && 
                credentials?.password === user.password){
                    return user;
                }
            else return null;
        }
    })
  ],
  pages:{
    signIn: '@/app/login'
  }
})