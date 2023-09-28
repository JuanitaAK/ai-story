import exp from "constants";

type UserProps = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
};

export const UserIdPage = (user: UserProps): JSX.Element => {
  return (
    <div>
      <h1>
        {user.firstName}+{user.id}
      </h1>
      <h5>{user.username}</h5>
      <h5>{user.email}</h5>
    </div>
  );
};

export default UserIdPage;

export const getServerSideProps = async (context: {
  params: any;
  req: any;
  res: any;
}) => {
  const { params, req, res } = context;
  const userId = params.uid;
  // METHOD FOR THE REAL DATA
  //   const res = await fetch("http://localhost:3000/api/user");
  //   const data = await res.json();
  // return {
  //     props: {
  //       firstName: data.firstName,
  //       lastName: data.lastName,
  //       username: data.username,
  //       email: data.email,
  //     },
  //   };

  return {
    props: {
      id: "userid-" + userId,
    },
  };
};
