import React, { useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) setCourses([...courses, { name: file.name, file }]);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Courses</h2>
      <input type="file" onChange={handleFileUpload} />
      <ul className="mt-4">
        {courses.map((c, i) => (
          <li key={i} className="mb-2 p-2 bg-gray-100 rounded">
            <p>{c.name}</p>
            <a
              href={URL.createObjectURL(c.file)}
              download={c.name}
              className="text-blue-500 text-sm"
            >
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
