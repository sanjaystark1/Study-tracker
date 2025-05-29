export default function Schedule() {
  const schedule = [
    { subject: "Mathematics", time: "09:00 AM - 10:30 AM", color: "blue" },
    { subject: "Physics", time: "11:00 AM - 12:30 PM", color: "green" },
  ];

  return (
    <div className="bg-white p-4 rounded shadow w-1/2">
      <h2 className="font-medium mb-2">Today's Schedule</h2>
      <div className="space-y-2">
        {schedule.map(({ subject, time, color }) => (
          <div
            key={subject}
            className="p-2 rounded border flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full bg-${color}-500`}></span>
              <div>
                <p className="font-medium">{subject}</p>
                <p className="text-gray-500">{time}</p>
              </div>
            </div>
            <span className="text-gray-400">📘</span>
          </div>
        ))}
      </div>
    </div>
  );
}