import Image from "next/image";
import women from "../../../public/women3.png";


export const About = ():JSX.Element => {

    const intro: string = "This page is a personal project where goal was to demystify the complexities of the LLM API by OpenAI and find creative, enjoyable ways to integrate this technology within the framework of my web development project. This site represents not just a technical challenge, but also an adventure in making AI accessible and fun for everyone who visits."
    const main:string= "Throughout this project, I've embraced the challenge of learning and integrating various technologies including Next.js, React, TypeScript, Node.js, Express,Tailwind CSS, Docker, and other useful libraries. These tools have been instrumental in building this site, allowing me to craft a responsive, intuitive user interface and robust backend functionalities. "
    const end:string="This website is more than just a showcase of AI interaction—it's a testament to the practical application of learning cutting-edge technology in real-world scenarios. Whether you are here to explore the capabilities of LLMs or to see modern web development in action, this platform reflects my commitment to growth and innovation in the tech landscape. Thank you for visiting, and I hope you find this project as insightful and exciting as I have in creating it."
    
    return (
    <div className="about_section p-3 ">
      <h1 className="text-nav-font text-3xl font-semibold leading-tight my-3">
        About AI Story
      </h1>
      <div className="about_text grid grid-rows-1 md:grid-cols-8">
        <div className="md:col-start-1 col-span-5 row-start-1 w-auto rounded-lg bg-white shadow-2xl mb-6 p-5 whitespace-pre-line z-0">   
            {intro}
            <br />
            <br />
            {main}
            <br />
            <br />
            {end}
        </div>
   
      <Image
          src={women}
          alt="women coding"
          width="300"
          className="grid md:col-start-6 md:col-span-3 md:row-start-1 col-start-3 row-start-2 z-30"
        />
     </div>
    </div>
  )};
