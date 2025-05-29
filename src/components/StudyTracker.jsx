import React from "react";

const topics = [
  {
    icon: "📘",
    title: "Basic Electrical Engineering",
    description: "Ohm’s Law, Kirchhoff’s Laws, Thevenin/Norton, AC/DC circuits",
    links: [
      { text: "NPTEL – Basic Electrical Circuits", url: "https://nptel.ac.in/courses/108/108/108108076/" },
      { text: "All About Circuits – Fundamentals", url: "https://www.allaboutcircuits.com/textbook/" },
    ],
  },
  {
    icon: "⚙️",
    title: "Electronic Devices & Circuits",
    description: "Diodes, BJTs, MOSFETs, Biasing, Amplifiers",
    links: [
      { text: "Neso Academy – YouTube Playlist", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjS1zGQkLZ6eVwG3iV6B9bG" },
      { text: "MIT OCW – Electronics", url: "https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/" },
    ],
  },
  {
    icon: "🧠",
    title: "Digital Electronics",
    description: "Logic Gates, Boolean Algebra, Flip-Flops, Counters, FSMs",
    links: [
      { text: "Neso Academy – Digital Electronics", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjD5J3L_adVsy5R2kBfjwDM" },
      { text: "TutorialsPoint Notes", url: "https://www.tutorialspoint.com/digital_circuits/index.htm" },
    ],
  },
  {
    icon: "🕹️",
    title: "Microcontrollers & Embedded Systems",
    description: "Arduino, ARM, Memory, Timers, Interrupts",
    links: [
      { text: "Coursera – Embedded Systems", url: "https://www.coursera.org/learn/introduction-embedded-systems" },
      { text: "Free Arduino Tutorials – CircuitDigest", url: "https://circuitdigest.com/tutorial/arduino" },
    ],
  },
  {
    icon: "📶",
    title: "Signals and Systems",
    description: "Continuous/Discrete Signals, Laplace, Z-transform, Convolution",
    links: [
      { text: "NPTEL – Signals & Systems", url: "https://nptel.ac.in/courses/108/104/108104100/" },
      { text: "MIT OCW – Signals & Systems", url: "https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/" },
    ],
  },
  {
    icon: "🧲",
    title: "Control Systems",
    description: "Transfer Functions, Stability, Bode Plots, Root Locus",
    links: [
      { text: "Neso Academy – Control Systems", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiw-GZRqfnlVIBz9dxrqHJS" },
    ],
  },
];

const StudyTracker = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">📚 Study Tracker</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {topics.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-shadow border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{item.icon}</span>
              <h2 className="text-xl font-semibold">{item.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <ul className="list-disc ml-5 text-blue-600 space-y-1">
              {item.links.map((link, i) => (
                <li key={i}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
            <button className="mt-4 px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
              ✅ Marked 25% Done
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default StudyTracker;
