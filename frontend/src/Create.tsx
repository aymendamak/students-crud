import { FormEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface CreateResponse {
  id: string;
  name: string;
  email: string;
}

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post<CreateResponse>("http://localhost:8081/api/v1/create", {
        name,
        email,
      })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });

    // Reset form fields
    setName("");
    setEmail("");
  };

  return (
    <div className="overflow-x-auto h-screen bg-slate-50 p-10 ">
      <div className="max-w-md mx-auto mt-10 p-5 bg-gray-100 border border-gray-300 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-5 text-center">
          Create New Student
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter student's name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter student's email"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
