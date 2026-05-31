type props = {
  className: string;
};

const Profile = ({ className }: props) => {
  return (
    <div
      className={`relative mt-10 lg:-left-14 lg:mt-0 flex justify-center items-end ${className}`}
    >
      {/* foto orang */}
      <img
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        className="relative w-[400px] lg:w-[240px] xl:w-[200px] select-none pointer-events-none z-20"
        src="/assets/img/profile/person.webp"
      />

      {/* gradient mobile (sm ke bawah) */}
      <img
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        className="absolute z-10 top-20 select-none pointer-events-none sm:hidden"
        src="assets/img/gradient/gradient-profile2.webp"
      />

      {/* gradient tablet (sm ke atas, tapi bukan desktop) */}
      <img
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        className="absolute z-10 top-20 md:-top-5 opacity-70 select-none pointer-events-none object-cover hidden sm:block lg:hidden"
        src="assets/img/gradient/gradient-profile-large.webp"
      />

      {/* gradient grid desktop */}
      <img
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        className="absolute scale-150 z-10 top-20 md:-top-5 select-none pointer-events-none object-cover lg:block hidden"
        src="assets/img/gradient/grid-gradient.png"
      />

      {/* fade bawah: mobile/tablet pakai fade putih full width, desktop tidak */}
      <div className="bg-gradient-to-t from-white to-transparent sm:h-60 h-50 lg:h-20 lg:w-80 absolute w-screen z-30 -bottom-1" />
    </div>
  );
};

export default Profile;