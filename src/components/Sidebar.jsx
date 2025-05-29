import { FaBook, FaCalendarAlt, FaCog, FaTachometerAlt } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white p-6 shadow-md h-full">
      <div className="mb-8 flex items-center gap-2">
        <img src="https://i.pravatar.cc/40" alt="User" className="rounded-full" />
        <div>
          <p className="font-bold">Sarah Johnson</p>
          <p className="text-sm text-gray-500">Student</p>
        </div>
      </div>
      <nav className="space-y-4">
        <NavItem icon={<FaTachometerAlt />} label="Dashboard" />
        <NavItem icon={<FaCalendarAlt />} label="Calendar" />
        <NavItem icon={<FaBook />} label="Courses" />
        <NavItem icon={<FaCog />} label="Settings" />
      </nav>
    </div>
  );
}

function NavItem({ icon, label }) {
  return (
    <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 cursor-pointer">
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}