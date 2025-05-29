import React from "react";

const Dashboard = () => {
  const courseProgress = 75;
  const schedule = [
    { subject: "Mathematics", time: "09:00 AM - 10:30 AM" },
    { subject: "Physics", time: "11:00 AM - 12:30 PM" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Academic Dashboard</h1>
      <div className="mb-6">
        <p className="font-semibold mb-1">Course Progress</p>
        <div className="bg-gray-300 w-full h-3 rounded">
          <div
            className="bg-green-600 h-3 rounded"
            style={{ width: `${courseProgress}%` }}
          ></div>
        </div>
        <p className="text-sm">{courseProgress}% Completed</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-bold">Calendar</p>
          <p className="text-sm text-gray-600">(Integrate react-calendar for dynamic days)</p>
        </div>
        <div>
          <p className="font-bold">Today's Schedule</p>
          <ul>
            {schedule.map((item, index) => (
              <li key={index} className="mb-2 p-2 bg-gray-100 rounded">
                <p>{item.subject}</p>
                <p className="text-xs text-gray-500">{item.time}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;