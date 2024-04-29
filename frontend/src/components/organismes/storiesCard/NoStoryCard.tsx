export const NoStoryCard = (): JSX.Element => {
  return (
    <div className="block rounded-lg md:max-w-3xl max-w-2xl bg-story shadow-xl m-12 mb-8 p-7">
      <p className="my-6 pb-3 text-3xl md:text-4xl text-center font-extrabold leading-tight text-title">
        You have no stories at the moment 🙈
      </p>
      <p className="my-6 pb-3 text-3xl md:text-4xl text-center font-extrabold leading-tight text-title">
        Go and create one! 😎
      </p>
      <p className="text-center  md:text-3xl text-title">
        Click on the button below to create your first story! 🚀
      </p>
    </div>
  );
};
