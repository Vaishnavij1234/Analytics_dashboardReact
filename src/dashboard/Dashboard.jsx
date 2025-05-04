
import React from 'react';
import './Dashboard.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaCog } from 'react-icons/fa';



const marginData = [
  { date: '12th Oct', value: 30 },
  { date: '13th Oct', value: 50 },
  { date: '14th Oct', value: 80 },
  { date: '15th Oct', value: 55 },
  { date: '16th Oct', value: 100 },
  { date: '17th Oct', value: 70 },
];


const Dashboard = () => {
    const navigate = useNavigate(); 


const handleLogout = () => {
  navigate('/'); 
};
const navigateToHome = () => {
    navigate('/dashboard'); 
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
      <div className="sidebar-item" onClick={navigateToHome}>
        
          <FaHome className="icon" /> Home
     
      </div>
      <div className="sidebar-item">
        <FaCog className="icon" /> Settings
      </div>
    </div>

      
      <div className="main-content">
        
        <div className="navbar">
          <h1>Analytics Dashboard</h1>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>

       
        <div className="card-container">
        <div className="card inventory">
  <h2>Inventory</h2>
  <div className="progress-container">
    <div className="progress-bar1" style={{ width: '93%' }}></div>
  </div>
  <div className="chart-text">93%</div>
</div>
          
          <div className="card orders">
  <h2>Orders</h2>
  <div className="progress-container">
    <div className="progress-bar" style={{ width: '65%' }}></div>
  </div>
  <div className="chart-text">65%</div>
</div>



          <div className="card battery">
  <h2>Battery</h2>
  <div className="circle">
    <span className="percent-text">65%</span>
  </div>
  <div className="battery-status">
    <p>Remaining: <span className="remaining">65%</span></p>
    <p>Consumed: <span className="consumed">35%</span></p>
  </div>
</div>

          <div className="card margin">
            <h2>Margin %</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={marginData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#4ade80" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;















// import React from 'react';
// import './Dashboard.css';
// import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

// const marginData = [
//   { date: '12th Oct', value: 30 },
//   { date: '13th Oct', value: 50 },
//   { date: '14th Oct', value: 80 },
//   { date: '15th Oct', value: 55 },
//   { date: '16th Oct', value: 100 },
//   { date: '17th Oct', value: 70 },
// ];

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <div className="dashboard-header">
//         <h1>Analytics Dashboard</h1>
//         <button className="logout-btn">Logout</button>
//       </div>
//       <div className="card-container">
//         <div className="card inventory">
//           <h2>Inventory</h2>
//           <div className="chart-text">93%</div>
//         </div>
//         <div className="card orders">
//           <h2>Orders</h2>
//           <div className="chart-text">65%</div>
//         </div>
//         <div className="card battery">
//           <h2>Battery</h2>
//           <div className="circle">
//             <span className="percent-text">65%</span>
//           </div>
//         </div>
//         <div className="card margin">
//           <h2>Margin %</h2>
//           <ResponsiveContainer width="100%" height={200}>
//             <LineChart data={marginData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="value" stroke="#facc15" strokeWidth={3} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;