import React, { useState } from 'react';
import "./style.css"

const Contact = ({ isDarkTheme }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to a server)
    console.log('Form submitted:', name, email, message);
    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div
      className={`${
        isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-black'
      } min-h-screen flex flex-col items-center justify-center`}
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-eurostile font-semibold mb-6">
        Say Hello{' '}
        <span
          role="img"
          aria-label="Waving Hand"
          className="animate-wave inline-block"
        >
          👋!
        </span>
      </h1>
      <form
        className={`w-96 md:w-128 p-8 rounded-lg shadow-md ${
          isDarkTheme ? 'bg-opacity-50' : 'bg-opacity-80'
        }`}
        onSubmit={handleSubmit}
      >
        <div className="mb-6 relative">
          <label htmlFor="name" className={`block text-lg font-medium text-${isDarkTheme ? 'green-500' : 'purple-600'}`}>
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            className={`w-full py-3 px-4 mt-1 rounded-lg border-2 border-${isDarkTheme ? 'green-500' : 'purple-600'} bg-transparent text-lg focus:outline-none focus:ring focus:ring-${isDarkTheme ? 'green-500' : 'purple-600'} focus:ring-opacity-50 focus:shadow-${isDarkTheme ? 'green-500' : 'purple-600'}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6 relative">
          <label htmlFor="email" className={`block text-lg font-medium text-${isDarkTheme ? 'green-500' : 'purple-600'}`}>
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Add your email"
            className={`w-full py-3 px-4 mt-1 rounded-lg border-2 border-${isDarkTheme ? 'green-500' : 'purple-600'} bg-transparent text-lg focus:outline-none focus:ring focus:ring-${isDarkTheme ? 'green-500' : 'purple-600'} focus:ring-opacity-50 focus:shadow-${isDarkTheme ? 'green-500' : 'purple-600'}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6 relative">
          <label htmlFor="message" className={`block text-lg font-medium text-${isDarkTheme ? 'green-500' : 'purple-600'}`}>
            Message
          </label>
          <textarea
            id="message"
            rows="6"
            placeholder="Enter Message"
            className={`w-full py-3 px-4 mt-1 rounded-lg border-2 border-${isDarkTheme ? 'green-500' : 'purple-600'} bg-transparent text-lg focus:outline-none focus:ring focus:ring-${isDarkTheme ? 'green-500' : 'purple-600'} focus:ring-opacity-50 focus:shadow-${isDarkTheme ? 'green-500' : 'purple-600'}`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className={`${
              isDarkTheme ? 'bg-green-500' : 'bg-purple-600'
            } text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors duration-300 text-lg`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
