import Image from "next/image";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <>
<Navbar/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <section className="flex flex-col items-center justify-center mt-[200px]">
        <h1 className="text-6xl font-bold text-center">
          Welcome to <span className="text-red-600">Course Web</span>
        </h1>
        <p className="text-lg text-center mt-4">
          A platform for students to access course materials
        </p>
        {/* <Image
          src="next.svg"
          alt="Illustration of a person taking an online test"
          width={500}
          height={500}
          className="mt-8"
        /> */}
      </section>
      </main>
      

      
      

{/* <footer id="footer" className="flex  w-full  p-6 mt-[10px] bg-black/20 justify-end ">
  <p className="text-sm text-center">
    &copy; {new Date().getFullYear()} Course Web. All rights reserved.
  </p>
  <ul className="list-none flex flex-col  md:space-y-4 lg:space-y-6 ">
    <li>
      <a href="#" className="text-sm text-gray-500 hover:underline">Privacy Policy</a>
    </li>
    <li>
      <a href="#" className="text-sm text-gray-500 hover:underline">Terms of Service</a>
    </li>
    <li>
      <a href="#" className="text-sm text-gray-500 hover:underline">Contact Us</a>
    </li>
  </ul>
</footer> */}

      
    
  </>
  );
}
