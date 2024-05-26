import React, { useState } from 'react';
import axios from 'axios';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/wheel-of-fortune');
    }, 2000);

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
    <div className="flex justify-center items-center h-screen min-h-screen bg-black bg-opacity-0 animate-fade animate-duration-[3000ms] animate-ease-out">
      <Loader show={loading} />

      <div className="w-full max-w-md p-6 bg-opacity-100 shadow-md rounded-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="mce-EMAIL" className="block text-gray-300 font-medium text-left">Email Address</label>
            <input type="email" name="EMAIL" className="mt-1 opacity-50 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-300 focus:border-yellow-500 sm:text-sm" id="mce-EMAIL" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="mce-FNAME" className="block text-gray-300 font-medium text-left">First Name</label>
            <input type="text" name="FNAME" className="mt-1 opacity-50 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-300 focus:border-indigo-500 sm:text-sm" id="mce-FNAME" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="mce-LNAME" className="block text-gray-300 font-medium text-left">Last Name</label>
            <input type="text" name="LNAME" className="mt-1 opacity-50 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-300 focus:border-indigo-500 sm:text-sm" id="mce-LNAME" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="mce-PHONE" className="block text-gray-300 font-medium text-left">Phone Number</label>
            <input type="text" name="PHONE" className="mt-1 opacity-50 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-300 focus:border-indigo-500 sm:text-sm" id="mce-PHONE" required value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="text" name="b_7d11ffadf8fc4eb14b70df267_6a5994f824" tabIndex={-1} value="" />
          </div>
          <div className="btn-margin">
            <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button flex justify-center items-center w-64 h-16 bg-black bg-opacity-0 text-yellow-500 border-2 border-yellow-500 rounded-lg cursor-pointer">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionForm;
