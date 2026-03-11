// import React from 'react';
// import './App.css'; 
// import Header from './components/Header'; 
// import Footer from './components/Footer';
// import AboutPage from './components/About/AboutPage';

// function App() {
//   return (
//     <div className="page-wrapper">
//       <Header />
      
//       <main className="main-container">
//         <div className="hero-text">
//           <h1></h1>
//           <p></p>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { Routes, Route } from 'react-router-dom'; // Added this
// import './App.css'; 
// import Header from './components/Header'; 
// import Footer from './components/Footer';
// import AboutPage from './components/About/AboutPage.jsx';

// function App() {
//   return (
//     <div className="page-wrapper">
//       <Header />
      
//       <main className="main-container">
//         <Routes>
//           {/* This is your Home Page content */}
//           <Route path="/" element={
//             <div className="hero-text">
//               <h1>Welcome to VerifiedLocal</h1>
//               <p>Your trusted marketplace for local services.</p>
//             </div>
//           } />

//           {/* This is your About Page content */}
//           <Route path="/about" element={<AboutPage />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header'; 
// import Footer from './components/Footer';
// import AboutPage from './components/About/AboutPage';

// function App() {
//   return (
//     <div className="page-wrapper">
//       <Header /> {/* Now this is safe because main.jsx provides the Router context */}
      
//       <main className="main-container">
//         <Routes>
//           <Route path="/" element={
//             <div className="hero-text">
//               <h1>Welcome to VerifiedLocal</h1>
//             </div>
//           } />
//           <Route path="/about" element={<AboutPage />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }


// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header'; 
// import Footer from './components/Footer';
// import AboutPage from './components/About/AboutPage';
// import './App.css';

// function App() {
//   return (
//     <div className="page-wrapper">
//       <Header /> 
      
//       <main className="main-container">
//         <Routes>
//           {/* Home Route */}
//           <Route path="/" element={
//             <div className="hero-text">
//               <h1>VerifiedLocal</h1>
//               <p>Expert local services at your doorstep.</p>
//             </div>
//           } />

//           {/* About Route */}
//           <Route path="/about" element={<AboutPage />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';
import AboutPage from './components/About/AboutPage';
import AuthForm from './components/AuthForm'; // 1. Import the new form
import './App.css';

function App() {
  return (
    <div className="page-wrapper">
      <Header /> 
      
      <main className="main-container">
        <Routes>
          <Route path="/" element={
            <div className="hero-text">
              <h1>VerifiedLocal</h1>
              <p>Expert local services at your doorstep.</p>
            </div>
          } />

          <Route path="/about" element={<AboutPage />} />

          {/* 2. Add the Auth routes here */}
          <Route path="/signup" element={<AuthForm />} />
          <Route path="/login" element={<AuthForm />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;