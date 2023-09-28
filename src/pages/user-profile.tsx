import { type } from "os";

type UserProfileProps = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
};

export const UserProfilePage = (props: UserProfileProps): JSX.Element => {
  return (
    <div>
      <h1>{props.firstName}</h1>
      <h5>{props.username}</h5>
      <h5>{props.email}</h5>
    </div>
  );
};

export default UserProfilePage;

export const getServerSideProps = async (context: {
  params: any;
  req: any;
  res: any;
}) => {
  const { params, req, res } = context;
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
      firstName: "Mateo",
      lastName: "Afa",
      username: "Mateito",
      email: "mateo@gmail.com",
    },
  };
};
