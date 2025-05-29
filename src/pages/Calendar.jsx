export default function Calendar() {
  return (
    <div className="bg-white p-4 rounded shadow w-1/2">
      <h2 className="font-medium mb-2">Calendar</h2>
      <div className="grid grid-cols-7 text-center text-gray-600">
        {"Sun Mon Tue Wed Thu Fri Sat".split(" ").map((day) => (
          <div key={day} className="py-2 border text-sm">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
