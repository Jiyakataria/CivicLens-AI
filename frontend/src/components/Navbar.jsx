function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/70 backdrop-blur-lg border-b border-white/10 px-10 py-5 flex justify-between items-center text-white z-50">

      <h1 className="text-2xl font-bold text-blue-400">
        CivicLens AI
      </h1>

      <div className="flex gap-8">
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
      </div>

    </nav>
  );
}

export default Navbar;