import Link from "next/link";

export const NoStoryCard = (): JSX.Element => {
  return (
    <div className="block rounded-lg md:max-w-3xl max-w-2xl bg-white shadow-xl m-12 mb-8 p-7">
      <p className="my-6 pb-3 text-3xl md:text-4xl text-center font-extrabold leading-tight text-title">
        You have no stories at the moment 🙈
      </p>
      <p className="my-6 pb-3 text-2xl md:text-4xl text-center font-extrabold leading-tight text-title">
        Go and create one! 😎
      </p>
      <p className="text-center md:text-3xl text-title">
        Click on the button below to create your first story!
      </p>

      <div className="mt-6 flex justify-end items-end">
        <Link
          href="/form"
          className="flex items-center text-lg justify-center py-3 px-5 w-48 mt-4 text-white rounded-md  bg-button hover:bg-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hover transition duration-300"
        >
          New Story 🚀
        </Link>
      </div>
    </div>
  );
};
