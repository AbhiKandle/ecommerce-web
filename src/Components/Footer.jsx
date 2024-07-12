import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="font-bold text-lg mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">Home</li>
              <li className="mb-2">Dashboard</li>
              <li className="mb-2">Users</li>
              <li className="mb-2">Contact Us</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-4">Contact Information</h2>
            <ul>
              <li className="mb-2">
                <span className="font-bold">Email:</span> support@example.com
              </li>
              <li className="mb-2">
                <span className="font-bold">Phone:</span> +123 456 7890
              </li>
              <li className="mb-2">
                <span className="font-bold">Address:</span> 123 Main St, City,
                Country
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <h1>media</h1>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p>
            &copy; {new Date().getFullYear()} Grand Global Brands. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
