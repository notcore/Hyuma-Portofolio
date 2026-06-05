type props = {
  className: string;
};

const Profile = ({ className }: props) => {
  return (
    <div
      className={`relative mt-10 md:-left-14 md:mt-0 flex justify-center items-end ${className}`}
    >
      <div
        className="relative w-full flex justify-center items-end overflow-hidden
                      h-[420px] md:h-auto md:overflow-visible"
      >
        <img
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          className="absolute z-10 top-0 w-full select-none pointer-events-none sm:hidden"
          src="assets/img/gradient/gradient-profile2.webp"
          loading="eager"
        />

        <img
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          className="absolute z-10 top-10 sm:top-5 w-full select-none pointer-events-none object-cover hidden sm:block md:hidden"
          src="assets/img/gradient/gradient-profile-large.webp"
          loading="eager"
        />

        <img
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          className="absolute md:scale-145 z-10 -top-3 select-none pointer-events-none object-cover hidden md:block"
          src="assets/img/gradient/grid-gradient.webp"
          loading="eager"
        />

        <img
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          className="relative w-[400px] md:w-[250px] lg:w-[270px] select-none pointer-events-none z-20"
          src="/assets/img/profile/person.webp"
          loading="eager"
        />

        <div
          className="absolute bottom-0 left-0 w-full z-30 h-32 sm:h-48
                        bg-gradient-to-t from-white via-white/80 to-transparent
                        md:hidden"
        />
      </div>

      <div
        className="absolute bottom-0 w-80 h-20 z-30
                      bg-gradient-to-t from-white to-transparent
                      hidden md:block"
      />
    </div>
  );
};

export default Profile;
