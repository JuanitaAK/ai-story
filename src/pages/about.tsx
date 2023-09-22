export const About: React.FC = (): any => {
  const loremIpsum: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.";

  return (
    <div className="shadow m-5 p-10 bg-slate-200 text-slate-950 min-h-full min-w-full place-items-center ">
      <h1 className="bg-slate-200 text-slate-950 text-4xl">About us </h1>
      <p className="text-blue text-lg p-10">{loremIpsum}</p>

      <p className="text-blue text-lg p-10">{loremIpsum}</p>

      <p className="text-blue text-lg p-10">{loremIpsum}</p>
    </div>
  );
};

export default About;
