import React from 'react';

function Resume() {
  return (
    <section id="resume" className="py-16 bg-white text-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">📄 My Resume</h2>

        {/* Button to View or Download Resume */}
        <div className="text-center">
          <a
            href="/path/to/your/resume.pdf"  // Update the path with the actual path to your PDF
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mr-4"
          >
            View Resume
          </a>
          
          <a
            href="/path/to/your/resume.pdf"  // Same here, update the path with the actual path to your PDF
            download
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
