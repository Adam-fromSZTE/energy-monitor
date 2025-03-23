import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between">
      <div className="text-white text-lg font-bold">Fogyasztás Monitor</div>
      <div className="flex gap-4">
        <Link to="/water" className="text-white">Víz</Link>
        <Link to="/gas" className="text-white">Gáz</Link>
        <Link to="/electricity" className="text-white">Villany</Link>
      </div>
      <button className="text-white bg-gray-700 px-3 py-1 rounded">Fiók</button>
    </nav>
  );
};

export default Navbar;