import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 


const InputField = ({ type, placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={{ marginBottom: '15px', padding: '8px', width: '100%', borderRadius: '5px' }}
  />
);

const Button = ({ text, onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: '8px',
      borderRadius: '10px',
      backgroundColor: '#887800',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      width: '100%',
    }}
  >
    {text}
  </button>
);

const LoginForm = ({ onSwitchToRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleLogin = () => {
    // Simulate login success
  
    navigate('/Pett'); // Redirect to /pett
  };

  return (
    <div className="d-flex" style={{ height: '95vh' }}>
      <div className="col-6">
        <img
          src="./Images/image1.jpeg"
          alt="pic1"
          height={'600px'}
          width={'600px'}
          style={{ padding: '100px' }}
        />
      </div>
      <div className="col-6" style={{ backgroundColor: '#fbe67b' }}>
        <div
          style={{
            maxWidth: '350px',
            margin: 'auto',
            backgroundColor: 'white',
            marginTop: '90px',
            borderRadius: '10px',
            padding: '30px',
          }}
        >
          <img
            src="./Images/logo1.png"
            alt="logos"
            height={'100px'}
            width={'100px'}
            style={{ marginLeft: '100px' }}
          />
          <h2 className="text-center">Login</h2>
          <label htmlFor="username">Username</label>
          <InputField type="text" placeholder="" value={username} onChange={setUsername} />
          <label htmlFor="password">Password</label>
          <InputField type="password" placeholder="" value={password} onChange={setPassword} />
          <Button text="Login" onClick={handleLogin} />
          <p style={{ marginLeft: '30px' }}>
            Don't have an account?{' '}
            <span
              style={{ color: '#887800', cursor: 'pointer' }}
              onClick={onSwitchToRegister}
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const RegistrationForm = ({ onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(`Registered with Username: ${username}, Email: ${email}`);
  };

  return (
    <div className="d-flex" style={{ height: '95vh' }}>
      <div className="col-6" style={{ backgroundColor: '#fbe67b' }}>
        <div
          style={{
            maxWidth: '500px',
            margin: 'auto',
            marginTop: '30px',
            borderRadius: '10px',
            backgroundColor: 'white',
            padding: '20px 80px',
            height: '560px',
          }}
        >
          <img
            src="./Images/logo1.png"
            alt="logos"
            height={'100px'}
            width={'100px'}
            style={{ marginLeft: '140px' }}
          />
          <p className="text-center">Please Fill out form to Register!</p>
          <label htmlFor="username">Username</label>
          <InputField type="text" value={username} onChange={setUsername} />
          <label htmlFor="email">Email</label>
          <InputField type="email" value={email} onChange={setEmail} />
          <label htmlFor="password">Password</label>
          <InputField type="password" value={password} onChange={setPassword} />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <InputField
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
          />
          <Button text="Register" onClick={handleRegister} />
          <p>
            Yes, I have an account?{' '}
            <span
              style={{ color: '#887800', cursor: 'pointer' }}
              onClick={onSwitchToLogin}
            >
              Login
            </span>
          </p>
        </div>
      </div>
      <div className="col-6">
        <img
          src="./Images/image2.jpeg"
          alt="pic1"
          height={'600px'}
          width={'600px'}
          style={{ padding: '100px', marginLeft: '50px' }}
        />
      </div>
    </div>
  );
};


const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{ padding: '20px' }}>
      {isLogin ? (
        <LoginForm onSwitchToRegister={() => setIsLogin(false)} />
      ) : (
        <RegistrationForm onSwitchToLogin={() => setIsLogin(true)} />
      )}
      
    </div>
  );
};

export default App;
