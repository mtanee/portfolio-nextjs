import Link from 'next/link';
import Image from 'next/image'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaEnvelope, FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import { faFacebook, faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />


export default function Home() {
  return (
    <>

      <div className=" bg-[url('/back.jpg')] overflow-auto bg-cover bg-fixed text-center px-44 py-40 rounded-b-[30%]">
        <h1 className=' text-orange-800  hover:text-black text-8xl font-sans font-bold'>App & Software <br /> Developer</h1>
        <p className=' text-black  hover:text-orange-800 text-5xl font-sans font-bold mt-4 px-[80px]'>Muhammad Taneer</p>
        <button className=' bg-orange-800  hover:bg-white  hover:text-red-900 px-5 py-3 rounded-lg text-white font-semibold mt-4'>Contact Us</button>
      
      <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/clint-briley-50056920a/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/fireclint'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-red-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
            </div>
            </div>

      <div className=' rounded-full flex shadow-2xl w-[25%] justify-center m-auto -mt-[80px]  bg-white '>
        <Image src={'/pro3.jpeg'} className="rounded-full overflow-hidden " alt='' width={350} height={150} />
        
      </div>


      <div className="text-center mt-10 mx-10 my-10 py-5 border-2 border-gray-500 rounded-lg  ">
  <h1 className="text-6xl  pb-6  font-bold font-serif underline mb-4 text-black">My Best Services</h1>
  <div className="flex flex-wrap justify-center">
    <div className="w-64 m-4">
      
      <div className="h-150 bg-black text-xl text-justify px-4 pb-8 text-gray-300 font-serif " >
      
         <h1 className=' pb-4 bg-black font-serif text-2xl pt-4 text-orange-600 underline ' >WEBSITE DESIGN</h1>I can develop modern and scalable websites using React.js Next.js Node.js typescript javascript with clean code.
      <Image src={'/webb.webp'} className=" pt-4  bg-black mx-12  " alt='' width={90} height={70} /></div>
    </div>
    <div className="w-64 m-4">
      
      <div className="h-150 bg-black text-xl text-justify px-4 pb-8 text-gray-300 font-serif " >
      
         <h1 className=' pb-4 bg-black font-serif text-2xl pt-4 text-orange-600 underline ' >WEBSITE DESIGN</h1>I can develop modern and scalable websites using React.js Next.js Node.js typescript javascript with clean code.
      <Image src={'/webb.webp'} className=" pt-4  bg-black mx-12  " alt='' width={90} height={70} /></div>
    </div>
    <div className="w-64 m-4">
      
      <div className="h-150 bg-black text-xl text-justify px-4 pb-8 text-gray-300 font-serif " >
      
         <h1 className=' pb-4 bg-black font-serif text-2xl pt-4 text-orange-600 underline ' >WEBSITE DESIGN</h1>I can develop modern and scalable websites using React.js Next.js Node.js typescript javascript with clean code.
      <Image src={'/webb.webp'} className=" pt-4  bg-black mx-12  " alt='' width={90} height={70} /></div>
    </div>
    <div className="w-64 m-4">
      
      <div className="h-150 bg-black text-xl text-justify px-4 pb-8 text-gray-300 font-serif " >
      
         <h1 className=' pb-4 bg-black font-serif text-2xl pt-4 text-orange-600 underline ' >WEBSITE DESIGN</h1>I can develop modern and scalable websites using React.js Next.js Node.js typescript javascript with clean code.
      <Image src={'/webb.webp'} className=" pt-4  bg-black mx-12  " alt='' width={90} height={70} /></div>
    </div>
  </div>
</div>
<div className="flex flex-wrap justify-center items-center mt-10 mx-10 my-10 py-5 border-2 border-gray-500 rounded-lg px-16 ">
  <div className="w-1/2 p-4">
    <Image src={'/pro4.jpeg'} className='rounded-full overflow-hidden shadow-2xl' alt='cdc' width={500} height={100} />
  </div>
  <div className="w-1/2 font-serif text-justify pr-12">
    <h1 className='text-6xl   font-bold font-serif underline mb-4'>ABOUT ME</h1>
    <p className="mb-4">An undergraduate software engineer seeking to work in a fun and challenging environment to improve and learn new skills while contributing to the company's advancement in the software engineering industry.</p>
    <h1 className='text-2xl font-bold underline mb-4'>SKILLS</h1>
    <ul className="list-disc pl-6 mb-4">
      <li>CSS (Bootstrap, Tailwind CSS)</li>
      <li>JavaScript (TypeScript, Next JS, React)</li>
      <li>WordPress</li>
      <li>SQL</li>
      <li>Basics of C++ and Python</li>
    </ul>
    <h1 className='text-2xl font-bold underline mb-4'>EDUCATION</h1>
    <ul className="list-disc pl-6 mb-4">
      <li>Doing Bachelors from Software Engineering at Karachi University (2019-2023)</li>
      <li>Intermediate from Govt Delhi College</li>
      <li>Matriculation from Little Folks School</li>
    </ul>
    <h1 className='text-2xl font-bold underline mb-4'>COURSES</h1>
    <ul className="list-disc pl-6">
      <li>Web development course from Coursera and Youtube</li>
      <li>SEO and Digital marketing Course from Digiskills</li>
      <li>C++ programming language from Fast University</li>
      <li>Currently enrolled in Web development course of PIAIC</li>
    </ul>
  </div>
</div>





<div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-5xl font-bold mb-6">Contact Me</h1>
      <form className="w-full max-w-lg p-8 rounded-lg shadow-lg bg-white">
        <div className="mb-6">
          <label htmlFor="name" className="block font-semibold mb-2">Name:</label>
          <input type="text" id="name" name="name" className="w-full border border-gray-300 p-2 rounded-lg" required />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block font-semibold mb-2">Email:</label>
          <input type="email" id="email" name="email" className="w-full border border-gray-300 p-2 rounded-lg" required />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block font-semibold mb-2">Message:</label>
          <textarea id="message" name="message" rows={5} className="w-full border border-gray-300 p-2 rounded-lg" required></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">Send</button>
      </form>

      <div className="flex justify-center md:justify-end items-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaGithub size={60} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaLinkedin size={60} />
          </a>
          <a href="mailto:youremail@gmail.com">
            <FaEnvelope size={60} />
          </a>
        </div>
    </div>
   
    </>
  )
}
