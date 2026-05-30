type props = {
  className: string;
};

const Profile = ({ className }: props) => {
  return (
    <div className={`relative flex justify-center items-end lg:hidden ${className} `}>
        <img className="relative w-[400px] z-20"  src="/assets/img/profile/profile.png" />
      <img
        className="absolute z-10 top-20 md:top-4 sm:hidden"
        src="assets/img/gradient/gradient-profile2.png"
      />
      <img
        className="absolute z-10 top-20 md:-top-5 object-cover hidden sm:block"
        src="assets/img/gradient/gradient-profile-large.png"
      />
      <div className="bg-gradient-to-t from-white to-transparent sm:h-60 h-50 absolute w-screen z-30 -bottom-1" />
      
    </div>
  );
};

export default Profile;
