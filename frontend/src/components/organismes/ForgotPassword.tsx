export const ForgotPassword = (): JSX.Element => {
  return (
    <div className="flex content-center justify-center w-ful">
      <div className="w-full max-w-4xl rounded-lg shadow-xl p-8 my-4 mx-4 md:mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Forgot your password? test component
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Enter your email address below and we will send you a link to reset
          your password.
        </p>
      </div>
    </div>
  );
};
