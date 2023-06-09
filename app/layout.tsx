import "./globals.css";
import { Poppins } from "next/font/google";
import Topnav from '../components/Topnav'
import Leftnav from '../components/Leftnav'
import MessageProvider from "@/context-api/MessageData";

const inter = Poppins({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Message</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&family=Quicksand:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className} >
        <MessageProvider>
        <Topnav />
        <div className="flex flex-col md:flex-row">
            <Leftnav />
             {children}
        </div>
        </MessageProvider>
        </body>
    </html>
  );
}
