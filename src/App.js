import { useState } from "react";
import { motion } from "framer-motion";

const subjects = [
  {
    title: "📘 Basic Electrical Engineering",
    topics: "Ohm’s Law, Kirchhoff’s Laws, Thevenin/Norton, AC/DC circuits",
    resources: [
      { label: "NPTEL Video + PDF", url: "https://nptel.ac.in/courses/108/105/108105053/" },
      { label: "All About Circuits", url: "https://www.allaboutcircuits.com/textbook/" },
    ],
  },
  {
    title: "⚙️ Electronic Devices & Circuits",
    topics: "Diodes, BJTs, MOSFETs, Biasing, Amplifiers",
    resources: [
      { label: "Neso Academy – YouTube", url: "https://youtube.com/playlist?list=PLBlnK6fEyqRhX6r2uhhlubuF5QextdCSM" },
      { label: "MIT OCW – Electronics", url: "https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/" },
    ],
  },
  {
    title: "🧠 Digital Electronics",
    topics: "Logic Gates, Boolean Algebra, Flip-Flops, Counters, FSMs",
    resources: [
      { label: "Neso Academy – Digital", url: "https://youtube.com/playlist?list=PLBlnK6fEyqRhqMVqU0Xp2lMwDgQJ_FgZ_" },
      { label: "TutorialsPoint Notes", url: "https://www.tutorialspoint.com/digital_electronics/index.htm" },
    ],
  },
  {
    title: "🕹️ Microcontrollers and Embedded Systems",
    topics: "Arduino, ARM, Memory, Timers, Interrupts",
    resources: [
      { label: "Coursera – Embedded Systems", url: "https://www.coursera.org/learn/embedded-systems" },
      { label: "CircuitDigest Arduino", url: "https://circuitdigest.com/tutorial/arduino" },
    ],
  },
  {
    title: "📶 Signals and Systems",
    topics: "Continuous/Discrete Signals, Laplace, Z-transform, Convolution",
    resources: [
      { label: "NPTEL Notes + Lectures", url: "https://nptel.ac.in/courses/108/104/108104100/" },
      { label: "MIT OCW – Signals", url: "https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/" },
    ],
  },
  {
    title: "🧲 Control Systems",
    topics: "Transfer Functions, Stability, Bode Plots, Root Locus",
    resources: [
      { label: "Neso Academy – Control Systems", url: "https://youtube.com/playlist?list=PLBlnK6fEyqRhqZ2tX0G0bNJWOBGxTY8Wg" },
    ],
  },
];

export default function App() {
  const [progress, setProgress] = useState(Array(subjects.length).fill(0));

  const updateProgress = (idx) => {
    setProgress((prev) =>
      prev.map((p, i) => (i === idx ? Math.min(p + 25, 100) : p))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 p-8 font-sans">
      <h1 className="text-4xl font-extrabold text-indigo-700 text-center mb-10 drop-shadow-md">
        📚 Study Tracker
      </h1>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
            className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-indigo-200 hover:shadow-indigo-400 hover:border-indigo-400 transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-indigo-900 mb-2">{subject.title}</h2>
            <p className="text-indigo-700 mb-4">{subject.topics}</p>

            <div className="flex flex-wrap gap-3 mb-6">
              {subject.resources.map((res, i) => (
                <a
                  key={i}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-indigo-200 transition"
                >
                  {res.label}
                </a>
              ))}
            </div>

            <div className="w-full bg-indigo-200 rounded-full h-5 overflow-hidden mb-4 shadow-inner">
              <motion.div
                className="bg-indigo-600 h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress[idx]}%` }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </div>

            <button
              onClick={() => updateProgress(idx)}
              disabled={progress[idx] === 100}
              className={`w-full py-3 rounded-xl text-white font-bold transition
                ${progress[idx] === 100 ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}`}
            >
              {progress[idx] === 100 ? "Completed ✓" : "Mark 25% Done"}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

