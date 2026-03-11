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


// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header'; 
// import Footer from './components/Footer';
// import AboutPage from './components/About/AboutPage';
// import AuthForm from './components/AuthForm'; // 1. Import the new form
// import './App.css';

// function App() {
//   return (
//     <div className="page-wrapper">
//       <Header /> 
      
//       <main className="main-container">
//         <Routes>
//           <Route path="/" element={
//             <div className="hero-text">
//               <h1>VerifiedLocal</h1>
//               <p>Expert local services at your doorstep.</p>
//             </div>
//           } />

//           <Route path="/about" element={<AboutPage />} />

//           {/* 2. Add the Auth routes here */}
//           <Route path="/signup" element={<AuthForm />} />
//           <Route path="/login" element={<AuthForm />} />
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
// import AuthForm from './components/AuthForm';
// import ServicesPage from './components/Services/ServicesPage'; // New Import
// import './App.css';

// function App() {
//   return (
//     <div className="page-wrapper">
//       <Header /> 
      
//       <main className="main-container">
//         <Routes>
//           <Route path="/" element={
//             <div className="hero-text">
//               <h1>VerifiedLocal</h1>
//               <p>Expert local services at your doorstep.</p>
//               {/* Optional: Add a link button here to /services */}
//             </div>
//           } />

//           <Route path="/about" element={<AboutPage />} />
          
//           {/* Mapping & Component based Services Route */}
//           <Route path="/services" element={<ServicesPage />} />

//           <Route path="/signup" element={<AuthForm />} />
//           <Route path="/login" element={<AuthForm />} />
//           <Route path="/" element={<ServicesPage />} />
//       <Route path="/book/:serviceName" element={<BookingPage />} />
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
// import AuthForm from './components/AuthForm';
// import ServicesPage from './components/Services/ServicesPage';
// import BookingPage from './components/Services/BookingPage'; // Missing Import Added!
// import './App.css';

// function App() {
//   return (
//     <div className="page-wrapper">
//       <Header /> 
      
//       <main className="main-container">
//         <Routes>
//           {/* Home Page: Hero Text + Services Grid */}
//           <Route path="/" element={
//             <>
//               <div className="hero-text" style={{ textAlign: 'center', padding: '40px 0' }}>
//                 <h1>VerifiedLocal</h1>
//                 <p>Expert local services at your doorstep.</p>
//               </div>
//               <ServicesPage /> 
//             </>
//           } />

//           <Route path="/about" element={<AboutPage />} />
          
//           {/* Direct Services Link */}
//           <Route path="/services" element={<ServicesPage />} />

//           <Route path="/signup" element={<AuthForm />} />
//           <Route path="/login" element={<AuthForm />} />
          
//           {/* Dynamic Booking Route */}
//           <Route path="/book/:serviceName" element={<BookingPage />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import Header from './components/Header'; 
// import Footer from './components/Footer';
// import AboutPage from './components/About/AboutPage';
// import AuthForm from './components/AuthForm';
// import ServicesPage from './components/Services/ServicesPage';
// import BookingPage from './components/Services/BookingPage'; 
// import './App.css';

// function App() {
//   const navigate = useNavigate();

//   return (
//     <div className="page-wrapper">
//       <Header /> 
      
//       <main className="main-container">
//         <Routes>
//           {/* Sunder Home Page: Just Hero, No Auto-Scroll */}
//           <Route path="/" element={
//             <div className="hero-section" style={{ 
//               height: '80vh', 
//               display: 'flex', 
//               flexDirection: 'column', 
//               justifyContent: 'center', 
//               alignItems: 'center', 
//               textAlign: 'center',
//               padding: '0 20px'
//             }}>
//               <h1 style={{ 
//                 fontSize: '4.5rem', 
//                 fontWeight: '900', 
//                 color: '#1a1a1a', 
//                 margin: '0',
//                 letterSpacing: '-2px'
//               }}>
//                 Verified<span style={{ color: '#007bff' }}>Local</span>
//               </h1>
              
//               <p style={{ 
//                 fontSize: '1.3rem', 
//                 color: '#555', 
//                 maxWidth: '600px', 
//                 marginTop: '20px',
//                 lineHeight: '1.6'
//               }}>
//                 Expert local services at your doorstep. 
//                 Reliable, professional, and background-checked.
//               </p>

//               <button 
//                 onClick={() => navigate('/services')}
//                 style={{
//                   marginTop: '40px',
//                   padding: '16px 45px',
//                   backgroundColor: '#007bff',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '50px',
//                   fontSize: '1.1rem',
//                   fontWeight: 'bold',
//                   cursor: 'pointer',
//                   boxShadow: '0 10px 25px rgba(0, 123, 255, 0.2)',
//                   transition: 'all 0.3s ease'
//                 }}
//                 onMouseOver={(e) => {
//                   e.target.style.backgroundColor = '#0056b3';
//                   e.target.style.transform = 'scale(1.05)';
//                 }}
//                 onMouseOut={(e) => {
//                   e.target.style.backgroundColor = '#007bff';
//                   e.target.style.transform = 'scale(1)';
//                 }}
//               >
//                 View All Services
//               </button>
//             </div>
//           } />

//           {/* Baki Routes */}
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/services" element={<ServicesPage />} />
//           <Route path="/signup" element={<AuthForm />} />
//           <Route path="/login" element={<AuthForm />} />
//           <Route path="/book/:serviceName" element={<BookingPage />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';
import AboutPage from './components/About/AboutPage';
import AuthForm from './components/AuthForm';
import ServicesPage from './components/Services/ServicesPage';
import BookingPage from './components/Services/BookingPage'; 
import './App.css';

function App() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <Header /> 
      
      <main className="main-container">
        <Routes>
          <Route path="/" element={
            <div className="hero-section" style={{ 
              height: '85vh', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center', 
              textAlign: 'center',
              padding: '0 20px'
            }}>
              
              {/* Sunder Translucent Glass Box */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.45)', // Halka white tint
                backdropFilter: 'blur(12px)',           // Glassy blur effect
                WebkitBackdropFilter: 'blur(12px)',     // Safari support
                padding: '60px 40px',
                borderRadius: '30px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.05)',
                maxWidth: '850px',
                width: '100%'
              }}>
                <h1 style={{ 
                  fontSize: '4.5rem', 
                  fontWeight: '900', 
                  color: '#1a1a1a', 
                  margin: '0',
                  letterSpacing: '-2px',
                  lineHeight: '1.1'
                }}>
                  Verified<span style={{ color: '#007bff' }}>Local</span>
                </h1>
                
                <p style={{ 
                  fontSize: '1.4rem', 
                  color: '#444', 
                  maxWidth: '650px', 
                  margin: '25px auto 0',
                  lineHeight: '1.6',
                  fontWeight: '500'
                }}>
                  Expert local services at your doorstep. <br/>
                  Reliable, professional, and background-checked.
                </p>

                <button 
                  onClick={() => navigate('/services')}
                  style={{
                    marginTop: '40px',
                    padding: '18px 50px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 10px 25px rgba(0, 123, 255, 0.25)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#0056b3';
                    e.target.style.transform = 'scale(1.05) translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#007bff';
                    e.target.style.transform = 'scale(1) translateY(0)';
                  }}
                >
                  View All Services
                </button>
              </div>
            </div>
          } />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/signup" element={<AuthForm />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/book/:serviceName" element={<BookingPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;