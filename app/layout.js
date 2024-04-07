import { Inter } from "next/font/google";
import "./globals.css";
import { GET } from "./api/users/user/route";
// import { getServerSession } from "next-auth";
// import  SessionProvider  from "@/lib/SessionProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next View",
  description: "Dashboard built on Next JS",
};

export default async function RootLayout({ children }) {

  // const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <SessionProvider session={session}> */}
          {children}
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
