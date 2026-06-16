function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-700">
        CivicLens AI
      </h1>

      <div className="space-x-6">
        <a href="/" className="hover:text-blue-600">
          Home
        </a>

        <a href="/dashboard" className="hover:text-blue-600">
          Dashboard
        </a>
      </div>
    </nav>
  );
}

export default Navbar;