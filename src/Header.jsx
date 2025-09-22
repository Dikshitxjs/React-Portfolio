import headerPic from "./assets/profile.jpg"; 

function Header() {
  return (
    <header className="flex justify-center items-center bg-white dark:bg-gray-800 h-82 w-full rounded-3xl overflow-hidden">
      <img
        src={headerPic}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </header>
  );
}

export default Header;
