import React from 'react';
import about from '../assets/images/about-cooking.jpg';

const AboutSection = () => {
  return (
    <div className="px-4 py-5 bg-gray-100">
      <div className="flex flex-col md:flex-row items-center md:pl-20 lg:pl-52">
        <div className="flex-1 mb-8 md:mb-0">
          <img src={about} alt="Cooking Tools" className="w-full md:w-96 object-cover mx-auto md:mx-0 hidden md:block"/>
        </div>
        <div className="flex-1 text-center md:text-left gap-0">
          <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{color:'rgba(14,35,104,1)'}} >About Us</h2>
          <p className="text-gray-600 mb-4 text-2xl md:text-2xl" style={{color:'rgba(68,73,87,1)'}} >
            Lorem Ipsum is simply dummy text of the printing and <br/> 
            typesetting industry. Lorem Ipsum has been the industry's <br/>
            standard dummy text ever since the 1500s, when an unknown <br/>
            printer took a galley of type and scrambled it to make a type <br/> 
            specimen book. t has survived not only five centuries.
          </p>
          <button className="bg-red-600 text-white font-bold rounded-full px-6 md:px-10 py-3 mt-5">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

// import React from 'react';
// import about from '../assets/images/about-cooking.jpg';

// const AboutSection = () => {
//   return (
//     <div className="px-4 bg-gray-100">
//       <div className="flex flex-col md:flex-row items-center pl-52">
//         <div className="flex-1">
//           <img
//             src={about}
//             alt="Cooking Tools"
//             className="object-cover w-96" style={{height:"inherit"}}
//           />
//         </div>
//         <div className="flex-1">
//           <h2 className="text-3xl font-bold mb-4">About Us</h2>
//           <p className="text-gray-600 mb-4">
//           Lorem Ipsum is simply dummy text of the printing and <br/> 
//           typesetting industry. Lorem Ipsum has been the industry's <br/>
//           standard dummy text ever since the 1500s, when an unknown <br/>
//           printer took a galley of type and scrambled it to make a type <br/> 
//           specimen book. t has survived not only five centuries.
//           </p>
//           <button className="bg-red-600 text-white font-bold rounded-full px-10 py-3 mt-5">
//             Read More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;