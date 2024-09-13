// Navigation Header component

export default function Header() {
  return (
    <header className="bg-gray p-4">
      <div className="flex items-start gap-8 pl-20">
        <img src={'/image-5.png'} className="top-0 left-0 h-20 w-20 flex items-center justify-center" />
        <nav>
          <ul className="flex justify-left gap-8 text-white pt-3">
            <li><a href="/" className="hover:underline">discover</a></li>
            <li><a href="/about" className="hover:underline">about</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};