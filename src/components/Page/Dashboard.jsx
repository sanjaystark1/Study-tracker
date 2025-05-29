import ProgressBar from "./ProgressBar";
import Calendar from "./Calendar";
import Schedule from "./Schedule";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <ProgressBar completed={75} />
      <div className="flex gap-6">
        <Calendar />
        <Schedule />
      </div>
    </div>
  );
}
