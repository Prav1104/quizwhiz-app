import React, { useState } from 'react';
import { loginUser, loginWithGoogle, registerUser, logoutUser } from '../firebase/authservices'; // Adjust path if necessary
import './LoginPage.css';



const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true); // True for login, false for register
  const [user, setUser] = useState(null); // To store logged-in user

  // Handle form submission for login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await loginUser(email, password);
      setUser(userCredential.user);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle form submission for registration
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await registerUser(email, password, username);
      setUser(userCredential.user);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };


  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();
      setUser(user);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await logoutUser();
      setUser(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.displayName || user.email}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>{isLogin ? 'Login' : 'Register'}</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}

          {isLogin ? (
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Login</button>
            </form>
          ) : (
            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Register</button>
            </form>
          )}

          <button onClick={handleGoogleLogin}>Login with Google</button>

          <div>
            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Don\'t have an account? Register' : 'Already have an account? Login'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
