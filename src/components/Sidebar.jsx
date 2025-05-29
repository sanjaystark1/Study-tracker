import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="w-60 h-screen bg-gray-800 text-white flex flex-col p-4">
    <div className="mb-8">
      <img src="/avatar.png" alt="User" className="w-12 h-12 rounded-full" />
      <p className="mt-2">Studyroom</p>
      <p className="text-sm text-gray-400">Student</p>
    </div>
    <Link className="mb-2 hover:text-blue-300" to="/">Dashboard</Link>
    <Link className="mb-2 hover:text-blue-300" to="/calendar">Calendar</Link>
    <Link className="mb-2 hover:text-blue-300" to="/courses">Courses</Link>
    <Link className="hover:text-blue-300" to="/settings">Settings</Link>
  </div>
);

export default Sidebar;
