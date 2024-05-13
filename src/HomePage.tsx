import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white h-screen flex justify-start items-center">
      <div className="max-w-4xl px-8 md:px-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          Welcome to Bright-Minds University
        </h1>
        <div className="flex items-center">
          <p className="text-base md:text-xl mr-4 mb-8">
            The University of Bright Minds is a leading institution dedicated to
            fostering academic excellence, innovation, and personal growth. With
            state-of-the-art facilities and a diverse community of students and
            faculty, we offer a wide range of programs across various
            disciplines. Our commitment to research, community engagement, and
            global perspectives empowers students to thrive in a rapidly
            changing world. Join us and embark on a transformative educational
            journey where curiosity meets opportunity.
          </p>
        </div>
        <Link
          to="/register"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md transition duration-300"
        >
          Register Now
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
