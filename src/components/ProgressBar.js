export default function ProgressBar({ completed }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-medium mb-2">Course Progress</h2>
      <div className="h-4 w-full bg-gray-200 rounded-full">
        <div
          className="h-4 bg-green-600 rounded-full"
          style={{ width: `${completed}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-sm text-gray-500 mt-1">
        <span>{completed}% Completed</span>
        <span>{100 - completed}% Remaining</span>
      </div>
    </div>
  );
}
