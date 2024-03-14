import Profile, { ProfilePageProps } from "./../components/Profile";

const ProfilePage = ({
  userData,
}: {
  userData: ProfilePageProps;
}): JSX.Element => {
  return <Profile {...userData} />;
};

export default ProfilePage;
