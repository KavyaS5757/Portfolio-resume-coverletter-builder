// // HomePage.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// import './styles.css';

// const homepage = () => {
//   return (
//     <div className="home-page">
//       <h1 className="title">Create your own Website</h1>
//       <Link to="/contentpage" className="link">
//         <div className="box">Portfolio builder</div>
//       </Link>
//       <h1 className="title">Create your own Resume</h1>
//       <Link to="/resume" className="link">
//         <div className="box">Resume building</div>
//       </Link>
//       <h1 className="title">Create your own Cover Letter</h1>
//       <Link to="/coverletter" className="link">
//         <div className="box">Cover Letter building</div>
//       </Link>
//     </div>
    
    
//   );
// };

// export default homepage;


import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="title">Create your own Website</h1>
      <div className="box-container">
        
        <div className="box">
        <h2 className="box-title">Portfolio Builder</h2>
        &nbsp;
        &nbsp;
        <p className="box-description">Build a stunning portfolio to showcase your work.</p>
        &nbsp;
        &nbsp;
        &nbsp;
        <Link to="/contentpage" className="box-link">
        <button className="box-button">Start Building</button>
        </Link>
        </div>
     
        
        <div className="box">
        <h2 className="box-title">Resume Builder</h2>
        <p className="box-description">Create a professional resume that stands out.</p>
        <Link to="/resume" className="box-link">
        <button className="box-button">Start Building</button>
        </Link>
        </div>
       
        
        <div className="box">
        <h2 className="box-title">Cover Letter Builder</h2>
        <p className="box-description">Craft a compelling cover letter for job applications.</p>
        <Link to="/coverletter" className="box-link">
        <button className="box-button">Start Building</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
