// import React from 'react';

// const Header = () => {
//   return (
//     <header className="navbar">
//       <div className="logo">VerifiedLocal</div>
      
//       <nav>
//         <ul className="nav-links">
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#services">Services</a></li>
//           <li><a href="#login">Login</a></li>
//           <li className="signup-item">
//             <a href="#signup" className="signup-btn">Signup</a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// import React from 'react';
// import { Link } from 'react-router-dom'; // 1. We import the 'Link' tool here

// const Header = () => {
//   return (
//     <header className="navbar">
//       <div className="logo">VerifiedLocal</div>
      
//       <nav>
//         <ul className="nav-links">
//           {/* 2. Replace href="#home" with to="/" */}
//           <li><Link to="/">Home</Link></li>

//           {/* 3. Replace href="#about" with to="/about" */}
//           <li><Link to="/about">About</Link></li>

//           {/* Keep these as they are for now, or point them to "/" */}
//           <li><Link to="/">Services</Link></li>
//           <li><Link to="/">Login</Link></li>
          
//           <li className="signup-item">
//             <Link to="/" className="signup-btn">Signup</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">VerifiedLocal</div>
      
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          
          {/* Updated Login Link */}
          <li><Link to="/login">Login</Link></li>
          
          {/* Updated Signup Link */}
          <li className="signup-item">
            <Link to="/signup" className="signup-btn">Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;