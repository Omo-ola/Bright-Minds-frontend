import { FormEvent } from "react";
import useForm from "./hooks/useForm";

const Register: React.FC = () => {
  const { formData, handleChange, setFormData } = useForm({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
    });
  };
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input mt-1 block w-full border focus:outline-none p-1 rounded-sm"
            />
          </div>
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
          <div>
            <label htmlFor="phone" className="block font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input mt-1 block w-full border focus:outline-none p-1 rounded-sm"
            />
          </div>
          <div>
            <label htmlFor="address" className="block font-medium">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="form-textarea mt-1 block w-full border focus:outline-none p-1"
              rows={2}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md transition duration-300 w-full"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
