// App.jsx
import { useState } from 'react';
import './App.css';

const subjects = [
  {
    title: '📘 Basic Electrical Engineering',
    topics: 'Ohm’s Law, Kirchhoff’s Laws, Thevenin/Norton, AC/DC circuits',
    resources: [
      { label: 'NPTEL Video + PDF', url: 'https://nptel.ac.in/courses/108/105/108105053/' },
      { label: 'All About Circuits', url: 'https://www.allaboutcircuits.com/textbook/' }
    ]
  },
  {
    title: '⚙️ Electronic Devices & Circuits',
    topics: 'Diodes, BJTs, MOSFETs, Biasing, Amplifiers',
    resources: [
      { label: 'Neso Academy – YouTube', url: 'https://youtube.com/playlist?list=PLBlnK6fEyqRhX6r2uhhlubuF5QextdCSM' },
      { label: 'MIT OCW – Electronics', url: 'https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/' }
    ]
  },
  {
    title: '🧠 Digital Electronics',
    topics: 'Logic Gates, Boolean Algebra, Flip-Flops, Counters, FSMs',
    resources: [
      { label: 'Neso Academy – Digital', url: 'https://youtube.com/playlist?list=PLBlnK6fEyqRhqMVqU0Xp2lMwDgQJ_FgZ_' },
      { label: 'TutorialsPoint Notes', url: 'https://www.tutorialspoint.com/digital_electronics/index.htm' }
    ]
  },
  {
    title: '🕹️ Microcontrollers and Embedded Systems',
    topics: 'Arduino, ARM, Memory, Timers, Interrupts',
    resources: [
      { label: 'Coursera – Embedded Systems', url: 'https://www.coursera.org/learn/embedded-systems' },
      { label: 'CircuitDigest Arduino', url: 'https://circuitdigest.com/tutorial/arduino' }
    ]
  },
  {
    title: '📶 Signals and Systems',
    topics: 'Continuous/Discrete Signals, Laplace, Z-transform, Convolution',
    resources: [
      { label: 'NPTEL Notes + Lectures', url: 'https://nptel.ac.in/courses/108/104/108104100/' },
      { label: 'MIT OCW – Signals', url: 'https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/' }
    ]
  },
  {
    title: '🧲 Control Systems',
    topics: 'Transfer Functions, Stability, Bode Plots, Root Locus',
    resources: [
      { label: 'Neso Academy – Control Systems', url: 'https://youtube.com/playlist?list=PLBlnK6fEyqRhqZ2tX0G0bNJWOBGxTY8Wg' }
    ]
  }
];

function App() {
  const [progress, setProgress] = useState(Array(subjects.length).fill(0));

  const updateProgress = (index) => {
    const newProgress = [...progress];
    newProgress[index] = Math.min(newProgress[index] + 25, 100);
    setProgress(newProgress);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">📚 Study Tracker</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {subjects.map((subject, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">{subject.title}</h2>
            <p className="text-gray-600 mb-3">{subject.topics}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {subject.resources.map((res, rIdx) => (
                <a
                  key={rIdx}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm hover:bg-indigo-200"
                >
                  {res.label}
                </a>
              ))}
            </div>
            <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden mb-2">
              <div
                className="bg-indigo-500 h-full"
                style={{ width: `${progress[idx]}%` }}
              ></div>
            </div>
            <button
              onClick={() => updateProgress(idx)}
              className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700"
            >
              Mark 25% Done
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
