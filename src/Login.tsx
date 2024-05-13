
import { FormEvent } from "react";
import useForm from "./hooks/useForm";

const Login = () => {
   const { formData, handleChange, setFormData } = useForm({
     email: "",
     password: "",
   });



  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log(formData);
    // Reset form after submission
    setFormData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input mt-1 block w-full border focus:outline-none p-1 rounded-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input mt-1 block w-full border focus:outline-none p-1 rounded-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md transition duration-300 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
