import { ModeToggle } from './theme/theme-toggle';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center text-white font-semibold">
          T
        </div>
        <span className="font-semibold text-lg">TravelAI</span>
      </div>

      <nav className="flex items-center gap-6 text-sm text-gray-700">
        <button className="hover:text-black">Saved Trips</button>
        <button className="hover:text-black">Sign In</button>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Header;
