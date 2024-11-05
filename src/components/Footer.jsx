import React from 'react';
import insta from '../assets/images/insta.jpg';
import fb from '../assets/images/fb.jpg';
import twitter from '../assets/images/twitter.jpg';
import logo from '../assets/images/logo.jpg';

const Footer = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo section, center-aligned on mobile */}
          <div className="text-center md:text-left">
            <img src={logo} alt="Logo" className="mx-auto md:mx-0" />
          </div>
          
          {/* Contact Us Section */}
          <div>
            <h3 className="font-bold text-sm mb-4" style={{color:'rgba(14,35,104,1)'}} >Contact Us</h3>
            <p className="text-gray-600 text-sm mb-2">
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
            </p>
            <p className="text-gray-600 text-sm mb-2">example2020@gmail.com</p>
            <p className="text-gray-600 text-sm">(904) 443-0343</p>
          </div>

          {/* More Links Section */}
          <div>
            <h3 className="font-bold text-sm mb-4" style={{color:'rgba(14,35,104,1)'}} >More</h3>
            <p className="text-gray-600 text-sm mb-2">About us</p>
            <p className="text-gray-600 text-sm mb-2">Products</p>
            <p className="text-gray-600 text-sm mb-2">Career</p>
            <p className="text-gray-600 text-sm">Contact Us</p>
          </div>

          {/* Social Links Section */}
          <div>
            <p className='text-sm text-center mb-4 md:block' style={{ color: 'rgba(130, 139, 156, 1)' }}>
              © 2022 Food Truck Example
            </p>
            <h3 className="font-bold text-sm mb-4 hidden md:block" style={{color:'rgba(14,35,104,1)'}} >Social Links</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <span className="text-gray-600 text-sm">
                <img 
                  src={insta} 
                  alt="Instagram" 
                  className="w-5 h-5" 
                />
              </span>
              <span className="text-gray-600 text-sm">
                <img 
                  src={twitter} 
                  alt="Twitter" 
                  className="w-5 h-5"
                />
              </span>
              <span className="text-gray-600 text-sm">
                <img 
                  src={fb} 
                  alt="Facebook" 
                  className="w-5 h-5" 
                />
              </span>
            </div>

            <p className='text-sm md:mt-16 text-center md:text-left hidden' style={{ color: 'rgba(130, 139, 156, 1)' }}>
              © 2022 Food Truck Example
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;