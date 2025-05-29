import React, { useState } from "react";

const subjects = [
  {
    title: "Basic Electrical Engineering",
    topics: ["Ohm’s Law", "Kirchhoff’s Laws", "Thevenin/Norton", "AC/DC circuits"],
    resources: [
      { name: "NPTEL Video + Notes", url: "https://nptel.ac.in/courses/108/105/108105053/" },
      { name: "All About Circuits", url: "https://www.allaboutcircuits.com/textbook/" },
    ],
  },
  {
    title: "Electronic Devices & Circuits",
    topics: ["Diodes", "BJTs", "MOSFETs", "Biasing", "Amplifiers"],
    resources: [
      { name: "Neso Academy Playlist", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRhX6r2uhhlubuF5QextdCSM" },
      { name: "MIT OCW – Electronics", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/" },
    ],
  },
  {
    title: "Digital Electronics",
    topics: ["Logic Gates", "Boolean Algebra", "Flip-Flops", "Counters", "FSMs"],
    resources: [
      { name: "Neso Academy – Digital", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRhqWX-aJJ5TKPNMbF1p7X1Z" },
      { name: "TutorialsPoint Notes", url: "https://www.tutorialspoint.com/digital_circuits/index.htm" },
    ],
  },
  {
    title: "Microcontrollers and Embedded Systems",
    topics: ["Arduino", "ARM", "Memory", "Timers", "Interrupts"],
    resources: [
      { name: "Coursera: Embedded Systems", url: "https://www.coursera.org/learn/embedded-systems" },
      { name: "CircuitDigest Arduino", url: "https://circuitdigest.com/tutorial/arduino" },
    ],
  },
  {
    title: "Signals and Systems",
    topics: ["Continuous/Discrete Signals", "Laplace", "Z-transform", "Convolution"],
    resources: [
      { name: "NPTEL Notes + Lectures", url: "https://nptel.ac.in/courses/108/104/108104100/" },
      { name: "MIT OCW – Signals", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-003-signals-and-systems-fall-2011/" },
    ],
  },
  {
    title: "Control Systems",
    topics: ["Transfer Functions", "Stability", "Bode Plots", "Root Locus"],
    resources: [
      { name: "Neso Academy – Control", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjH3fyo9D2zF2qzA6zRdu41" },
    ],
  },
];

function App() {
  const [progress, setProgress] = useState(Array(subjects.length).fill(0));

  const completeTopic = (subjectIndex) => {
    setProgress((prev) => {
      const updated = [...prev];
      updated[subjectIndex] = Math.min(100, updated[subjectIndex] + 100 / subjects[subjectIndex].topics.length);
      return updated;
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>📚 Study Tracker</h1>
      {subjects.map((subject, idx) => (
        <div key={idx} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "10px", marginBottom: "20px" }}>
          <h2>{subject.title}</h2>
          <progress value={progress[idx]} max="100" style={{ width: "100%" }}></progress>
          <ul>
            {subject.topics.map((topic, tIdx) => (
              <li key={tIdx}>{topic}</li>
            ))}
          </ul>
          <div>
            {subject.resources.map((res, rIdx) => (
              <a key={rIdx} href={res.url} target="_blank" rel="noopener noreferrer" style={{ display: "block", color: "blue" }}>
                🔗 {res.name}
              </a>
            ))}
          </div>
          <button onClick={() => completeTopic(idx)} style={{ marginTop: "10px", padding: "5px 10px" }}>
            ✅ Mark 1 Topic Done
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
