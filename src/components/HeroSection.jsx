import React from 'react';
import heroPizza from '../assets/images/hero-pizza.jpg';
import vector from '../assets/images/Vector.jpg';
import logo from '../assets/images/logo.jpg';

const HeroSection = () => {
  return (
    <div className="px-4 py-8 md:px-40 mb-10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 order-2 md:order-1 text-center md:text-left">
          <img src={logo} alt="Logo" className="h-30 mb-20 md:mb-32 mx-auto md:mx-0 hidden md:block" />

          <h1 className="text-3xl md:text-5xl font-bold mt-10 mb-4 leading-tight font-heading" style={{color:'rgba(14,35,104,1)'}}>
            Discover the <span className="text-red-500"> <br/> Best</span> Food <br/> and Drinks
          </h1>

          <p className="text-sm md:text-base mb-6" style={{color:'rgba(68,73,87,1)'}}>Naturally made Healthcare Products for the <br/> better care & support of your body.</p>

          <button className="bg-red-600 text-white font-bold rounded-full px-6 md:px-10 py-3 md:py-5 mt-3">
            Explore Now!
          </button>

        </div>

        <div className="flex-1 relative order-1 md:order-2">
          <img src={heroPizza} alt="Delicious Pizza" className="rounded-xl object-cover w-full h-auto md:mx-0"/>
          <img src={vector} className="absolute top-0 left-0 object-contain w-full h-full"/>
          <button className="absolute top-4 right-4 md:right-16 md:top-10 border border-white text-white font-bold px-4 py-2 rounded-full bg-transparent">
            Get In Touch
          </button>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;

// import React from 'react';
// import heroPizza from '../assets/images/hero-pizza.jpg';
// import vector from '../assets/images/Vector.jpg';
// import logo from '../assets/images/logo.jpg';

// const HeroSection = () => {
//   return (
//     <div className="px-4 py-8 pl-40 mb-24">
//       <div className="flex flex-col md:flex-row items-center justify-between">
//         <div className="flex-1">
//           <img 
//             src={logo} 
//             alt="Logo" 
//             className="h-20 mb-32" 
//           />
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight font-heading">
//             Discover the{' '} <br/>
//             <span className="text-red-500">Best</span>
//             {' '}Food 
//             <br/>
//             and Drinks
//           </h1>
//           <p>Naturally made Healthcare Products for the <br/> better care & support of your body.</p>
//           <button class="bg-red-600 text-white font-bold rounded-full px-10 py-5 mt-5 mb-40">
//             Explore Now!
//           </button>
//         </div>

//         <div className="flex-1 relative">
//           <img
//             src={heroPizza}
//             alt="Delicious Pizza"
//             className="rounded-xl object-cover"
//             style={{ height: "95vh", width: "90%", marginLeft: "35px" }}
//           />
//           <img
//             src={vector}
//             className="absolute top-0 left-0 object-contain"
//             style={{ height: "100vh", width: "100%" }}
//           />
  
//           <button className="absolute top-10 right-20 border border-white text-white font-bold px-4 py-2 rounded-full bg-transparent">
//             Get In Touch
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;