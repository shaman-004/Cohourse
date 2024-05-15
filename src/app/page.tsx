"use client"
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
        <p className="text-lg text-center mt-4 w-full  ">
          A platform for students to access course materials and
           with inbuilt Roadmap
        </p>
        <button  className="bg-red-600 text-white font-bold px-6 py-2 rounded-full mt-8">
          <a href="#course">
          Browse Courses &rarr;
          </a>
         
        </button>
        {/* <Image
          src="next.svg"
          alt="Illustration of a person taking an online test"
          width={500}
          height={500}
          className="mt-8"
        /> */}
      </section>
      <section id="course" className="mt-[150px]">
        <h2 className="text-4xl font-bold text-center mt-24">Popular Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <image >
              <img src="web.png" alt="Web Development" className="w-full h-40 rounded-lg" />
            </image>
            <h3 className="text-2xl font-bold m-2">Web Development</h3>
            <p className="text-lg text-gray-500 mt-4">
              Learn how to build websites and web applications
            </p>
            <button className="bg-red-600 text-white font-bold px-4 py-2 rounded-full mt-6">
              Start Learning
            </button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
          <image >
              <img src="app.png" alt="Web Development" className="w-full h-40 rounded-lg" />
            </image>
            <h3 className="text-2xl font-bold">Mobile Development</h3>
            <p className="text-lg text-gray-500 mt-4">
              Learn how to build mobile apps for iOS and Android
            </p>
            <button className="bg-red-600 text-white font-bold px-4 py-2 rounded-full mt-6">
              Start Learning
            </button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
          <image >
              <img src="data.png" alt="Web Development" className="w-full h-40 rounded-lg" />
            </image>
            <h3 className="text-2xl font-bold">Data Science</h3>
            <p className="text-lg text-gray-500 mt-4">
              Learn how to analyze and visualize data
            </p>
            <button className="bg-red-600 text-white font-bold px-4 py-2 rounded-full mt-6">
              Start Learning
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <image >
              <img src="web.png" alt="Web Development" className="w-full h-40 rounded-lg" />
            </image>
            <h3 className="text-2xl font-bold m-2">Web3.0 Development</h3>
            <p className="text-lg text-gray-500 mt-4">
              Learn how to build web3.0
              
            </p>
            <button className="bg-red-600 text-white font-bold px-4 py-2 rounded-full mt-6">
              Start Learning
            </button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
          <image >
              <img src="app.png" alt="Web Development" className="w-full h-40 rounded-lg" />
            </image>
            <h3 className="text-2xl font-bold">Communication Skill</h3>
            <p className="text-lg text-gray-500 mt-4">
              Learn how to build Communication
            </p>
            <button className="bg-red-600 text-white font-bold px-4 py-2 rounded-full mt-6">
              Start Learning
            </button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
          <image >
              <img src="data.png" alt="Web Development" className="w-full h-40 rounded-lg" />
            </image>
            <h3 className="text-2xl font-bold">Adobe Photoshop</h3>
            <p className="text-lg text-gray-500 mt-4">
              Learn how to Edit the photos
            </p>
            <button className="bg-red-600 text-white font-bold px-4 py-2 rounded-full mt-6">
              Start Learning
            </button>
          </div>
        </div>
      </section>



      
      

      </main>

      

      
      

<footer id="footer" className="flex  w-full  p-6 mt-[10px] justify-center ">
  <p className="text-sm text-center">
    &copy; {new Date().getFullYear()} Course Web. All rights reserved.
  </p>
  
</footer>

      
    
  </>
  );
}
