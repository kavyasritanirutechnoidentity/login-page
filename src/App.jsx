import { useState } from 'react';
import userImage from './assets/userImage.png';
import { FaUser } from "react-icons/fa6";
import { HiEye, HiEyeOff } from 'react-icons/hi';
import zxcvbn from 'zxcvbn';
import { useForm } from '@tanstack/react-form';
import { useNavigate } from '@tanstack/react-router';
import { createFileRoute } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query'; 

export const Route = createFileRoute('/')({
  component: App,
});

function App(){
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordFeedback, setPasswordFeedback] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [isPasswordTyped, setIsPasswordTyped] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const navigate = useNavigate();

  //  useMutation handles async login
  const loginMutation = useMutation({
    mutationFn: async (values) => {
      const { userName, password } = values; 
      // Simulate network call
      await new Promise((res) => setTimeout(res, 2000));
      console.log('User:', userName, 'Password:', password); 
      return { success: true };
    },
    onSuccess: () => {
      navigate({ to: '/home' });
    },
  });

  const form = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
    onSubmit: async (values) => {
      loginMutation.mutate(values); // Call mutation
    },
  });

  const checkPasswordStrength = (password) => {
    const result = zxcvbn(password);
    setPasswordStrength(result.score);
    setPasswordFeedback(result.feedback.suggestions.join(" | "));
    setPasswordValid(result.score >= 3);
  };

  const validateEmail = (email) => {
    setEmailValid(emailRegex.test(email));
  };

  const getPasswordStrengthEmoji = () => {
    switch (passwordStrength) {
      case 0: return '😞 Weak';
      case 1: return '😐 Fair';
      case 2: return '🙂 Good';
      case 3: return '💪 Strong';
      default: return '💪 Strong';
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-black via-gray-900 to-gray-800">
      <div className="border-2 border-transparent bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 p-[1px] shadow-2xl justify-center items-center max-w-[400px] w-full rounded-2xl text-center">
        <div className='bg-[#00010d] p-6 rounded-2xl'>
          <div className="flex justify-center mb-6">
            <img src={userImage} alt="user" className='w-24' />
          </div>
          <h1 className="text-3xl text-white mb-6 font-bold">
            {showForgotPassword ? 'Reset Password' : 'Login'}
          </h1>

          
          {!showForgotPassword ? (
            <form onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}>

              {/* Email */}
              <div className="mb-6 text-left relative min-w-full">
                <form.Field
                  name="userName"
                  validators={{
                    onChange: ({ value }) => {
                      validateEmail(value);
                      if (!emailRegex.test(value)) {
                        return 'Please enter a valid email';
                      }
                    },
                  }}
                  children={(field) => (
                    <>
                      <label htmlFor="email" className="text-white text-lg">Email:</label>
                      <div className="relative mt-4">
                        <input
                          type="email"
                          id="email"
                          placeholder="Email"
                          name={field.name}
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          className={`w-full p-3 bg-gray-800 text-white rounded-lg border-2 
                            border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 ${emailValid ? 'border-green-500' : 'border-red-500'}`}
                        />
                        <button type="button" className="absolute text-sky-600 top-1/2 right-3 transform -translate-y-1/2">
                          <FaUser size={20} />
                        </button>
                      </div>
                      <div className="text-red-400 mt-2">
                        {field.state.meta.errors ? <em>{field.state.meta.errors.join(', ')}</em> : null}
                      </div>
                      {field.state.value && !emailValid && (
                        <div className="text-red-500 mt-2 text-sm">Please enter a valid email address.</div>
                      )}
                    </>
                  )}
                />
              </div>

              {/* Password */}
              <div className="mb-6 text-left relative min-w-full">
                <form.Field
                  name="password"
                  validators={{
                    onSubmit: ({ value }) => {
                      return value.length < 8 ? `Password must be at least 8 characters long.` : null;
                    },
                  }}
                  children={(field) => (
                    <>
                      <label htmlFor="password" className="text-white text-lg">Password:</label>
                      <div className="relative mt-4">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          id="password"
                          placeholder="Password"
                          value={field.state.value}
                          name={field.name}
                          onChange={(e) => {
                            field.handleChange(e.target.value);
                            checkPasswordStrength(e.target.value);
                            setIsPasswordTyped(true);
                          }}
                          className={`w-full p-3 bg-gray-800 text-white rounded-lg border-2 
                            border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 ${passwordValid ? 'border-green-500' : 'border-red-500'}`}
                        />
                        <button
                          type="button"
                          className="absolute text-sky-600 top-1/2 right-3 transform -translate-y-1/2"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                        </button>
                      </div>
                      <div className="text-red-400 mt-2">
                        {field.state.meta.errors ? <em>{field.state.meta.errors.join(', ')}</em> : null}
                      </div>
                      {isPasswordTyped && (
                        <div className="mt-2 text-white text-lg font-semibold">
                          {getPasswordStrengthEmoji()}
                        </div>
                      )}
                      <div className="text-yellow-400 mt-2">{passwordFeedback}</div>
                    </>
                  )}
                />
              </div>

              {/* Remember Me + Forgot */}
              <div className="flex justify-between items-center mb-6">
                <label className="text-white text-sm">
                  <input type="checkbox" className="mr-2" />
                  Remember Me
                </label>
                <button
                  type="button"
                  className="text-sky-500 text-sm"
                  onClick={() => setShowForgotPassword(true)}
                >
                  Forgot Password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`font-semibold text-lg w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full 
                  transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-cyan-600 hover:to-purple-700 ${loginMutation.isPending ? 'cursor-wait opacity-50' : ''}`}
                disabled={loginMutation.isPending || !emailValid || !passwordValid}
              >
                {loginMutation.isPending ? (
                  <div className="flex justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                  </div>
                ) : (
                  'Log in'
                )}
              </button>
            </form>
          ) : (
            // Forgot Password Form
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Password reset instructions sent to your email!');
                setShowForgotPassword(false);
              }}
            >
              <div className="mb-6 text-left">
                <label htmlFor="resetEmail" className="text-white text-lg">Enter your email:</label>
                <input
                  type="email"
                  id="resetEmail"
                  placeholder="Email"
                  className="w-full mt-2 p-3 bg-gray-800 text-white rounded-lg border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <button
                type="submit"
                className="font-semibold text-lg w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full"
              >
                Send Reset Link
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
