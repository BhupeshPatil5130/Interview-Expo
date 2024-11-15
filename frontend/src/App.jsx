
// import Card from "./component/Card"
// import InterviewExperienceBlog from "./component/InterviewExperienceBlog"
// import Navbar from "./component/Navabar"
// import { Route, Routes } from "react-router-dom"
// import Home from "./page/Home"
// import Info from "./page/Info"
// import Verify from "./page/Verify"
// import Profile from "./page/Profile"


// function App() {


//   return (
//     <div className=''>
//      <div>
//      <Navbar/>
//       </div> 
//      <Routes>
//                <Route path="/" element={<Home/>}/>
//                <Route path="/Info" element={<Info/>}/>
//                <Route path="/verfiy" element={<Verify/>}/>
//               <Route path="/profile" element={<Profile/>}/>

//      </Routes>
    
//     </div>
//   )
// }

// export default App
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Info from './pages/Info';
// import Verify from './pages/Verify';
// import Profile from './pages/Profile';
// import InterviewExperienceBlog from './components/InterviewExperienceBlog';
// import ExperienceDetail from './components/ExperienceDetail';
import Navbar from './component/Navabar';
import Home from './page/Home';
import Info from './page/Info';
import Verify from './page/Verify';
import Profile from './page/Profile';
import InterviewExperienceBlog from './component/InterviewExperienceBlog';
import ExperienceDetail from './component/ExperienceDetail';
// import add-question from './page/add-question';
// import ExperienceDetail from './component/ExperienceDetail';
import addquestion from './page/addquestion';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/info" element={<Info/>} />
        <Route path="/verify" element={<Verify/>} />
        <Route path="/info/:id" element={<ExperienceDetail/>} /> {/* Updated route with dynamic segment */}
        <Route path="/profile" element={<Profile/>} />
        <Route path="/interview-experiences" element={<InterviewExperienceBlog/>} />
        <Route path="/experience/:id" element={<ExperienceDetail/>} />
        <Route path="/addquestion" element={<addquestion/>} />

      </Routes>
    </div>
  );
}

export default App;
