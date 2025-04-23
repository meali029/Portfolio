import React from 'react';
import { FaBriefcase, FaBuilding } from 'react-icons/fa';

function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-100 text-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">💼 My Experience</h2>

        {/* Year Section: 2024 */}
        <div className="bg-white p-6 rounded-xl shadow-xl mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">2024</h3>
          <div className="space-y-4">
            {/* Job Entry 1 */}
            <div className="flex items-center space-x-4">
              <FaBriefcase className="text-xl text-gray-600" />
              <div>
                <p className="font-semibold text-gray-800">Web Development Intern</p>
                <p className="text-gray-600">ABC Company</p>
                <p className="text-xs text-gray-500">Jan 2024 - Apr 2024</p>
              </div>
            </div>

            {/* Job Entry 2 */}
            <div className="flex items-center space-x-4">
              <FaBriefcase className="text-xl text-gray-600" />
              <div>
                <p className="font-semibold text-gray-800">Software Engineer Intern</p>
                <p className="text-gray-600">XYZ Ltd.</p>
                <p className="text-xs text-gray-500">Feb 2024 - Jun 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Year Section: 2023 */}
        <div className="bg-white p-6 rounded-xl shadow-xl mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">2023</h3>
          <div className="space-y-4">
            {/* Job Entry 1 */}
            <div className="flex items-center space-x-4">
              <FaBriefcase className="text-xl text-gray-600" />
              <div>
                <p className="font-semibold text-gray-800">Junior Developer</p>
                <p className="text-gray-600">TechSolutions</p>
                <p className="text-xs text-gray-500">Jan 2023 - Dec 2023</p>
              </div>
            </div>

            {/* Job Entry 2 */}
            <div className="flex items-center space-x-4">
              <FaBriefcase className="text-xl text-gray-600" />
              <div>
                <p className="font-semibold text-gray-800">Intern</p>
                <p className="text-gray-600">XYZ Ltd.</p>
                <p className="text-xs text-gray-500">Feb 2023 - Aug 2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Year Section: 2022 */}
        <div className="bg-white p-6 rounded-xl shadow-xl mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">2022</h3>
          <div className="space-y-4">
            {/* Job Entry 1 */}
            <div className="flex items-center space-x-4">
              <FaBriefcase className="text-xl text-gray-600" />
              <div>
                <p className="font-semibold text-gray-800">Internship</p>
                <p className="text-gray-600">ABC Corp.</p>
                <p className="text-xs text-gray-500">Jan 2022 - Jun 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
