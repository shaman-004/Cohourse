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
      

      
      

      <footer className="flex justify-center w-full mt-8">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Course Web. All rights reserved.
        </p>
      </footer>

      
    </main>
  </>
  );
}
