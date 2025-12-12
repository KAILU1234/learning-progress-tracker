import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-4 hidden md:block">
      <h2 className="text-xl font-bold mb-4">Learning Tracker</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:text-blue-400">Dashboard</Link>
        <Link to="/courses" className="hover:text-blue-400">Courses</Link>
        <Link to="/settings" className="hover:text-blue-400">Settings</Link>
      </nav>
    </aside>
  );
}
