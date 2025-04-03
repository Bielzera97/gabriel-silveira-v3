const Topbar = () => {
  return (
    <div className="flex justify-between items-center bg-slate-700 py-3 px-10">
      <h1>Topbar</h1>
      <h2 className="hidden md:block">menu</h2>
      <h2 className="md:hidden">menu-hamburguer</h2>
    </div>
  );
};

export default Topbar;