import SearchBar from "../Search/SearchBar";

const Header = () => {
  return (
    <header className="bg-secondary border-border sticky top-0 z-30 flex h-14 w-full border-b">
      <div className="container flex items-center justify-between gap-12">
        <div className="text-2xl font-bold">LOGO</div>
        <div className="flex-1">
          <SearchBar triggerType="header" />
        </div>
        <div className="bg-card border-border rounded-full"></div>
        <div className="flex gap-3 text-nowrap">
          <button className="from-gradient-1 via-gradient-2 to-gradient-3 cursor-pointer rounded-lg bg-linear-to-r p-2 font-bold text-white duration-200 hover:scale-105">
            Login / Register
          </button>
          <button className="bg-card cursor-pointer rounded-lg p-2 duration-200 hover:scale-105">
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
