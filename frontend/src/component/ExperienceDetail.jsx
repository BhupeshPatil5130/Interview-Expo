
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ExperienceDetail = () => {
  const { id } = useParams();
  const [experience, setExperience] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/experiences/${id}`);
        setExperience(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching experience data');
        setLoading(false);
      }
    };
    fetchExperience();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-indigo-100 text-gray-800">
      {/* Profile Section */}
      <div className="flex items-center mt-6 p-4 bg-white rounded-lg shadow-lg space-x-4 animate-fadeInUp">
        <img
          src={experience?.avatar || 'https://randomuser.me/api/portraits/men/32.jpg'}
          alt="Avatar"
          className="w-24 h-24 rounded-full border-4 border-blue-300 shadow-md object-cover"
        />
        <div className="flex-grow">
          <h1 className="text-2xl font-semibold">{experience?.name}'s Interview Experience</h1>
          <p>Company: {experience?.company}</p>
          <p>Interviewer: {experience?.interviewer}</p>
          <p>Date: {experience?.date ? new Date(experience.date.$date || experience.date).toLocaleDateString() : 'N/A'}</p>

          <div className="flex space-x-2 mt-2">
            <i className="fab fa-js-square text-yellow-500 text-xl" title="JavaScript"></i>
            <i className="fab fa-react text-blue-500 text-xl" title="React"></i>
            <i className="fab fa-node text-green-500 text-xl" title="Node.js"></i>
            <i className="fas fa-database text-purple-500 text-xl" title="MongoDB"></i>
          </div>
        </div>
        {/* Social Icons */}
        {/* <div className="flex space-x-3">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-transform transform hover:-translate-y-1">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub" className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-transform transform hover:-translate-y-1">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" title="LeetCode" className="w-10 h-10 bg-orange-400 text-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-transform transform hover:-translate-y-1">
            <i className="fab fa-leetcode"></i>
          </a>
        </div> */}
      </div>

      {/* Interview Questions */}
      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg animate-fadeInUp">
        <h3 className="text-xl font-semibold mb-4">Questions Asked</h3>
        <ul className="list-disc ml-5 space-y-2">
          {experience?.questions?.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      </div>

      {/* Data Structures Section */}
      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg animate-fadeInUp">
        <h3 className="text-xl font-semibold mb-4">Data Structures & Algorithms Discussed</h3>
        <ul className="list-disc ml-5 space-y-2">
          {(experience?.dsa || []).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Frequently Asked Topics */}
      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg animate-fadeInUp">
        <h3 className="text-xl font-semibold mb-4">Frequently Asked Topics</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2 text-left bg-gray-100">Topic</th>
              <th className="border-b py-2 text-left bg-gray-100">Frequency</th>
            </tr>
          </thead>
          <tbody>
            {experience?.topics?.map((topic, index) => (
              <tr key={index}>
                <td className="border-b py-2">{topic.topic}</td>
                <td className="border-b py-2">{topic.frequency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExperienceDetail;
