import { useState } from "react";
import useForm from "./hooks/useForm";
import Pagination from "./components/Pagination";

const Students = () => {
  const { formData: searchFormData, handleChange: handleSearchChange } =
    useForm({
      search: "",
      level: "",
    });
  const students = [
    {
      id: 1,
      name: "John Doe",
      level: "100L",
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      level: "200L",
      imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "David Brown",
      level: "300L",
      imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Emily Johnson",
      level: "400L",
      imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "Michael Williams",
      level: "500L",
      imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 6,
      name: "Olivia Davis",
      level: "100L",
      imageUrl: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      id: 7,
      name: "James Wilson",
      level: "200L",
      imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      id: 8,
      name: "Emma Martinez",
      level: "300L",
      imageUrl: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      id: 9,
      name: "Daniel Taylor",
      level: "400L",
      imageUrl: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      id: 10,
      name: "Sophia Lopez",
      level: "500L",
      imageUrl: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      id: 11,
      name: "Matthew Hernandez",
      level: "100L",
      imageUrl: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      id: 12,
      name: "Ava Gonzalez",
      level: "200L",
      imageUrl: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: 13,
      name: "Ethan Garcia",
      level: "300L",
      imageUrl: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      id: 14,
      name: "Isabella Rodriguez",
      level: "400L",
      imageUrl: "https://randomuser.me/api/portraits/women/14.jpg",
    },
    {
      id: 15,
      name: "William Martinez",
      level: "500L",
      imageUrl: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      id: 16,
      name: "John Doe",
      level: "100L",
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 26,
      name: "Jane Smith",
      level: "200L",
      imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 31,
      name: "David Brown",
      level: "300L",
      imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 40,
      name: "Emily Johnson",
      level: "400L",
      imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 51,
      name: "Michael Williams",
      level: "500L",
      imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 60,
      name: "Olivia Davis",
      level: "100L",
      imageUrl: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      id: 37,
      name: "James Wilson",
      level: "200L",
      imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      id: 28,
      name: "Emma Martinez",
      level: "300L",
      imageUrl: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      id: 29,
      name: "Daniel Taylor",
      level: "400L",
      imageUrl: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      id: 50,
      name: "Sophia Lopez",
      level: "500L",
      imageUrl: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      id: 54,
      name: "Matthew Hernandez",
      level: "100L",
      imageUrl: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      id: 72,
      name: "Ava Gonzalez",
      level: "200L",
      imageUrl: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: 83,
      name: "Ethan Garcia",
      level: "300L",
      imageUrl: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      id: 94,
      name: "Isabella Rodriguez",
      level: "400L",
      imageUrl: "https://randomuser.me/api/portraits/women/14.jpg",
    },
    {
      id: 59,
      name: "William Martinez",
      level: "500L",
      imageUrl: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    // Add more students here
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 6;

  const filteredStudents = students.filter((student) => {
    const searchMatch = student.name
      .toLowerCase()
      .includes(searchFormData.search.toLowerCase());
    const levelMatch =
      searchFormData.level === ""
        ? true
        : student.level === searchFormData.level;
    return searchMatch && levelMatch;
  });

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;

  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search students..."
              name="search"
              value={searchFormData.search}
              onChange={handleSearchChange}
              className="ml-2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
            />
          </div>
          {/* Filter by level */}
          <div>
            <select
              name="level"
              value={searchFormData.level}
              onChange={handleSearchChange}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
            >
              <option value="">All Levels</option>
              <option value="100L">100L</option>
              <option value="200L">200L</option>
              <option value="300L">300L</option>
              <option value="400L">400L</option>
              <option value="500L">500L</option>
            </select>
          </div>
        </div>
      </header>
      {/* Main content */}
      <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Student cards */}
        {currentStudents.map((student) => (
          <div
            key={student.id}
            className="bg-white rounded-lg shadow-md p-4 min-w-250"
          >
            <img
              src={student.imageUrl}
              alt={student.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-600">
                Name:
              </label>
              <p className="text-lg font-semibold">{student.name}</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600">
                Level:
              </label>
              <p className="text-gray-600">{student.level}</p>
            </div>
            {/* Add more student information here */}
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={students.length / studentsPerPage}
        paginate={paginate}
      />
    </div>
  );
};

export default Students;
