import Profile, { ProfilePageProps } from "@/components/Profile";

const ProfilePage = ({
  userData,
}: {
  userData: ProfilePageProps;
}): JSX.Element => {
  return (
    <div>
      <Profile {...userData} />
    </div>
  );
};

export default ProfilePage;
