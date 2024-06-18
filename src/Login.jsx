import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//implementing useNavigate hook
const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
//This will navigate the user straight to the homepage since supabase won't be used
    console.log('Submitted:', { email, password });
 navigate('/') //Navigating to home page after form submission
 
  };



const goToSignUp = () => {
  navigate('/');
}


// render login form with JSX
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded shadow-md w-96">
        <h2 className="text-4xl text-white font-bold mb-8 text-center">LOG IN</h2>
        <h2 className="text-2xl text-white font-semibold mb-4 text-center">Welcome to AudioPod!</h2>

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
          type="submit" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          SUBMIT
        </button>

        <p className="text-center text-gray-400 mt-4">
          Don't have an account? <button onClick={goToSignUp} className="text-blue-500 hover:underline">SIGN UP</button>
        </p>
      </form>
    </div>
  );
}

export default Login;

