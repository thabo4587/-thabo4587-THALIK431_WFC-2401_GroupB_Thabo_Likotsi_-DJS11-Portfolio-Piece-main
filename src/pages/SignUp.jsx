import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/homepage');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., send data to server)
    console.log('Submitted:', { email, password });

    // Navigate to homepage after successful login
    goToHome();
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded shadow-md w-96">
        <h2 className="text-4xl text-white font-bold mb-8 text-center">SIGN UP</h2>
        <h2 className="text-2xl text-white font-semibold mb-4 text-center">AudioPod</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
            Email
          </label>
          <input 
            type="email" 
            id="email" 
            className="bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4 block w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-300 text-sm font-medium mb-2">
            Password
          </label>
          <input 
            type="password" 
            id="password" 
            className="bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4 block w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>

        <button 
          onClick = { goToHome }
          type="submit" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          SUBMIT
        </button>

        <p 
        onClick={goToLogin}
        className="text-center text-gray-400 mt-4">
          Already have an account? <button className="text-blue-500 hover:underline">LOG IN</button>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
