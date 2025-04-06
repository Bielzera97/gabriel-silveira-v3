const Topbar = () => {
  return (
    <div className="flex justify-between items-center py-3 px-10 topbar">
      <h1>Topbar</h1>
      <h2 className="hidden md:block"><span className="text-(--green)">.</span>Menu</h2>
      <h2 className="md:hidden">menu-hamburguer</h2>
    </div>
  );
};

export default Topbar;