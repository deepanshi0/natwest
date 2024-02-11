// src/components/WeatherForm.js
// import React, { useState } from 'react';

// const WeatherForm = ({ onSearch }) => {
//   const [city, setCity] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSearch(city);
//     setCity('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input 
//         type="text" 
//         value={city} 
//         onChange={(e) => setCity(e.target.value)} 
//         placeholder="Enter city name" 
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default WeatherForm;
