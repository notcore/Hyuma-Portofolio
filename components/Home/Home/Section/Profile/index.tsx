type props = {
  className: string;
};

const Profile = ({ className }: props) => {
  return (
    <div
      className={`relative flex justify-center  items-end lg:hidden ${className} `}
    >
      <img
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        className="relative w-[400px] select-none pointer-events-none z-20"
        src="/assets/img/profile/person.webp"
      />
      <img
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        className="absolute z-10 top-20 md:top-4 select-none pointer-events-none sm:hidden"
        src="assets/img/gradient/gradient-profile2.webp"
      />
      <img
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        className="absolute z-10 top-20 md:-top-5 select-none pointer-events-none object-cover hidden sm:block"
        src="assets/img/gradient/gradient-profile-large.webp"
      />
      <div className="bg-gradient-to-t from-white to-transparent sm:h-60 h-50 absolute w-screen z-30 -bottom-1" />
    </div>
  );
};

export default Profile;
