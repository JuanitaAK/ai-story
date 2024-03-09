export const NoStoryCard = (): JSX.Element => {
  return (
    <div className="block rounded-lg bg-story shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] m-5 mb-8 p-5 animate-fadeIn">
      <h5 className="my-6 pb-3 text-3xl md:text-4xl text-center font-extrabold leading-tight text-title">
        You have no stories at the moment!
      </h5>
    </div>
  );
};
