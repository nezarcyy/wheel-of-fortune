import React, { useState } from 'react';
import axios from 'axios';
import AlyfLogo from '../assets/Alyf.svg';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const url = 'https://outlook.us17.list-manage.com/subscribe/post-json?u=7d11ffadf8fc4eb14b70df267&id=6a5994f824&c=?';

    const data = {
      EMAIL: email,
      FNAME: firstName,
      LNAME: lastName,
      PHONE: phone
    };

    try {
      const response = await axios.get(url, { params: data });
      if (response.data.result === 'success') {
        console.log('Success');
      } else {
        console.log('Success');
      }
    } catch (error) {
      console.log('Success');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen min-h-screen bg-black bg-opacity-0">
      <div className="w-full max-w-md p-6 bg-opacity-100 shadow-md rounded-md">

        <div className="flex justify-center items-center min-h-screen mt-72">
          <img src={AlyfLogo} className="h-20" alt="logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="mce-EMAIL" className="block text-gray-300 font-medium text-left">Email Address</label>
            <input type="email" name="EMAIL" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="mce-EMAIL" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="mce-FNAME" className="block text-gray-300 font-medium text-left">First Name</label>
            <input type="text" name="FNAME" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="mce-FNAME" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="mce-LNAME" className="block text-gray-300 font-medium text-left">Last Name</label>
            <input type="text" name="LNAME" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="mce-LNAME" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="mce-PHONE" className="block text-gray-300 font-medium text-left">Phone Number</label>
            <input type="text" name="PHONE" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="mce-PHONE" required value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="text" name="b_7d11ffadf8fc4eb14b70df267_6a5994f824" tabIndex={-1} value="" />
          </div>
          <div className="mt-6">
            <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionForm;
