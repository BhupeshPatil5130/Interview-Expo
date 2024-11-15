import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Individual Card Component for verification
const CardVerify = ({ profileData }) => {
  const [isVerified, setIsVerified] = useState(null); // State to track verification status

  // Handler for accept action
  const handleAccept = () => {
    // Logic to save accepted data to the database
    setIsVerified(true);
    alert(`Accepted ${profileData.name}'s request.`);
  };

  // Handler for reject action
  const handleReject = () => {
    // Logic to save rejected data to the database
    setIsVerified(false);
    alert(`Rejected ${profileData.name}'s request.`);
  };

  return (
    <div className="flex justify-center">
      <div className="flex items-center p-6 bg-white rounded-lg shadow-lg space-x-5 mt-8">
        <img
          src={profileData.imgSrc}
          alt="Avatar"
          className="w-24 h-24 rounded-full border-2 border-blue-400 shadow-lg object-cover"
        />
        <div className="flex-grow p-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-1">{profileData.name}</h2>
          <p className="text-lg text-gray-700">Company: {profileData.company}</p>
          <p className="text-lg text-gray-700">Interviewer: {profileData.interviewer}</p>
          <p className="text-lg text-gray-700">Date: {profileData.date}</p>
          <div className="flex space-x-3 mt-3 text-blue-600 text-xl">
            {profileData.icons.map((iconClass, i) => (
              <i key={i} className={iconClass}></i>
            ))}
          </div>
          <div className="flex space-x-3 mt-5">
            <button 
              onClick={handleAccept}
              className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600'
            >
              Accept
            </button>
            <button 
              onClick={handleReject}
              className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'
            >
              Reject
            </button>
          </div>
          <Link to={"/Info"}>
            <button className='mt-5 bg-slate-100 text-black px-4 py-2 rounded-md hover:bg-red-500'>Read more</button>
          </Link>
          {/* Displaying the verification status */}
          {isVerified !== null && (
            <div className={`mt-4 text-lg font-semibold ${isVerified ? 'text-green-500' : 'text-red-500'}`}>
              {isVerified ? 'Status: Accepted' : 'Status: Rejected'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Sample CardList component to render multiple CardVerify components
const CardList = () => {
  const profiles = [
    {
      imgSrc: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "John Doe",
      company: "XYZ Corporation",
      interviewer: "Mr. Smith",
      date: "2024-10-25",
      icons: ["fab fa-js-square", "fab fa-react", "fab fa-node", "fas fa-database"]
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/women/32.jpg",
      name: "Jane Smith",
      company: "ABC Inc.",
      interviewer: "Ms. Johnson",
      date: "2024-10-26",
      icons: ["fab fa-python", "fab fa-java", "fab fa-html5", "fas fa-code"]
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/men/34.jpg",
      name: "Mike Brown",
      company: "Tech Solutions",
      interviewer: "Dr. White",
      date: "2024-10-27",
      icons: ["fab fa-php", "fab fa-css3", "fab fa-angular", "fas fa-server"]
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/women/34.jpg",
      name: "Lisa Green",
      company: "Innovative Corp.",
      interviewer: "Mr. Black",
      date: "2024-10-28",
      icons: ["fab fa-ruby", "fab fa-github", "fab fa-angular", "fas fa-cloud"]
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/men/36.jpg",
      name: "David Wilson",
      company: "Next Gen Tech",
      interviewer: "Ms. Brown",
      date: "2024-10-29",
      icons: ["fab fa-dart", "fab fa-figma", "fab fa-sass", "fas fa-network-wired"]
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/women/36.jpg",
      name: "Sarah Johnson",
      company: "Creative Minds",
      interviewer: "Mr. Blue",
      date: "2024-10-30",
      icons: ["fab fa-figma", "fab fa-sketch", "fab fa-trello", "fas fa-paint-brush"]
    },
    // Add more profiles as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {profiles.map((profile, index) => (
        <CardVerify key={index} profileData={profile} />
      ))}
    </div>
  );
};

export default CardList;
