import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style.css"

const Contact = ({ isDarkTheme }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();
  // const mailvariable = { user_name: "Yadhnesh", user_email: "gangurdeyadhnesh28@gmail.com",message_html: "Hello"}

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_owxylh9", "template_gjs4wpr", form.current, "df7EvCj1C5We5WumB")
      .then((result) => {
        console.log(result.text);
        toast.success('Thanks for your kind words ! ', { position: toast.POSITION.TOP_CENTER });
      }, (error) => {
        console.log(error.text);
      });
    // console.log('Form submitted:', name, email, message);
    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div
      id="contact"
      className={`${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-black'
        } min-h-screen flex flex-col items-center justify-center`}
    >
      <ToastContainer />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-eurostile font-semibold mb-6">
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
        ref={form}
        className={`w-96 md:w-128 p-8 rounded-lg shadow-md ${isDarkTheme ? 'bg-opacity-50' : 'bg-opacity-80'
          }`}
        onSubmit={handleSubmit}
      >
        <div className="mb-6 relative">
          <label htmlFor="name" className={`block text-lg font-medium text-${isDarkTheme ? 'green-500' : 'purple-600'}`}>
            Name
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            placeholder="Enter Your Name"
            className={`w-full py-3 px-4 mt-1 rounded-lg focus:outline-none focus:ring focus:ring-${isDarkTheme ? 'green-500' : 'purple-600'} focus:shadow-${isDarkTheme ? 'green-500' : 'purple-600'} border-2 border-${isDarkTheme ? 'green-500' : 'purple-600'} bg-transparent text-lg`}
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
            id="from_name"
            placeholder="Add your email"
            className={`w-full py-3 px-4 mt-1 rounded-lg focus:outline-none focus:ring focus:ring-${isDarkTheme ? 'green-500' : 'purple-600'} focus:shadow-${isDarkTheme ? 'green-500' : 'purple-600'} border-2 border-${isDarkTheme ? 'green-500' : 'purple-600'} bg-transparent text-lg`}
            value={email}
            name="from_name"
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
  name="message"
  placeholder="Enter Message"
  className={`w-full py-3 px-4 mt-1 rounded-lg focus:outline-none focus:ring focus:ring-${isDarkTheme ? 'green-500' : 'purple-600'} focus:shadow-${isDarkTheme ? 'green-500' : 'purple-600'} border-2 border-${isDarkTheme ? 'green-500' : 'purple-600'} bg-transparent text-lg`}
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  required
/>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className={`${isDarkTheme ? 'bg-green-500' : 'bg-purple-600'
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
