import Image from "next/image";
import home from "./../../../../public/home.png";

const LandingPage = (): JSX.Element => {
  return (
    <div className="m-6 space-y-3">
      <h1 className="font-mono text-center text-3xl md:text-7xl font-bold text-nav-font pt-3 mb-3">
       AI Story
      </h1>
      <p className="md:text-2xl text-center text-nav-hover">Unleash your creativity with AI Story</p>
      <div className="space-y-4 md:grid md:grid-cols-8 md:grid-rows-1">
        <Image
          src={home}
          alt="Family reading a book"
          className="rounded-2xl rid-flow-dense shadow-2xl object-cover md:mt-4 md:col-start-2 md:col-span-5 md:row-start-1 md:row-span-full lg:place-self-start"
          width={400}
        />
        <div className="Card-container grid space-y-4 md:self-center md:col-start-5 md:col-span-6 md:row-start-1 bg-white p-6 rounded-lg shadow-2xl">
          <p className="md:text-2xl text-nav-hover text-left ">
           The ultimate platform for bringing your stories to life. Whether you are a budding writer or an experienced storyteller, AIStory provides an intuitive and simple interface to craft and explore storytelling. Let your imagination soar. Start your storytelling journey with us today!
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
