import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Footer from "./footer";
interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({children } : LayoutProps) {
   const [show, setShow] = useState(false);

   const handleShow = () => {
     setShow(!show);
   };

   const navItems = [
     {
       title: "Home",
       href: "/",
     },
     {
      title: "Products",
      href: "/  ",
     },
     {
       title: "Contact us",
       href: "#footer",
     },
   ];

   return (
    <>
     <header className="sticky top-0 z-50 p-5 flex justify-between font-Montserrat bg-white">
       <Image src="/logoA.png" alt="2ndlogo" height={50} width={115} />
       <nav className="md:hidden flex">
       <a href="https://wa.me/+919505063030"
        target={"blank"}
        >
        <Image
           src="/products/ordernow1.jpg"
           alt="ordernow"
           height={70}
           width={100}
           className= "pr-2"       
        />
        </a>
         {show ? (
           <Image
             src={"/close_big.svg"}
             alt="menu bar"
             width={30}
             height={70}
             className="md:invisible"
             onClick={handleShow}
           />
         ) : (
           <Image
             src={"/menu.svg"}
             alt="menu bar"
             width={30}
             height={70}
             className="md:invisible"
             onClick={handleShow}
           />
         )}

         {show && (
           <div className="absolute top-28 right-0 z-50 w-full rounded-sm bg-white p-5 shadow-xl">
             <div className="flex w-full flex-col items-center justify-center">
               {navItems.map((item, index) => (
                 <a
                   key={index}
                   href={item.href}
                   onClick={() => handleShow()}
                   className="font-Montserrat w-full cursor-pointer rounded-md p-2 text-lg font-medium hover:bg-[#8FBFEF] hover:font-bold hover:tracking-wide"
                 >
                   {item.title}
                 </a>
               ))}
             </div>
           </div>
         )}
       </nav>
       <nav className="hidden list-none justify-center text-center font-medium uppercase md:flex">
         <a className="m-auto cursor-pointer px-2 hover:font-bold hover:text-[#5193CF] text-Montserrat">
           Home
         </a>
         <a className="m-auto cursor-pointer px-2 hover:font-bold hover:text-[#5193CF] text-Montserrat">
           Products
         </a>
         <a className="m-auto cursor-pointer px-2 hover:font-bold hover:text-[#5193CF] text-Montserrat">
           Contact us
         </a>
       </nav>
     </header>
     <main>{children}</main>
     <Footer></Footer>
     </>
   );
}
