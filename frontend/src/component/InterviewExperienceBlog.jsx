
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const InterviewExperienceBlog = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/experiences');
        setExperiences(response.data);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      }
    };
    fetchExperiences();
  }, []);

  if (experiences.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <h1>Interview Experiences</h1>
      {experiences.map((experience) => (
        <div key={experience._id}>
          <h2>{experience.studentName}</h2>
          <p>Company: {experience.companyName}</p>
          <Link to={`/experience/${experience._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default InterviewExperienceBlog;
