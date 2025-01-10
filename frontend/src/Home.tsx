import axios from "axios";
import React, { useEffect, useState } from "react";

import { Student } from "./models/student.model";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/v1/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const deleteStudent = (id: number) => {
    axios
      .delete(`http://localhost:8081/api/v1/delete/${id}`)
      .then((response) => {
        console.log(response);
        const newData = data.filter((student: Student) => student.id !== id);
        setData(newData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="overflow-x-auto h-screen bg-slate-50 p-10 ">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-black text-lg ">Student List</h2>
        <div className="">
          <Link to="/create" className="btn btn-success">
            {" "}
            New Student
          </Link>
        </div>
      </div>
      <div className="flex pt-4">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {data.map((student: Student) => (
              <tr
                key={student.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6">{student.id}</td>
                <td className="py-3 px-6">{student.name}</td>
                <td className="py-3 px-6">{student.mail}</td>
                <td className="py-3 px-6 flex gap-3">
                  <Link to={`/read/${student.id}`} className="btn btn-primary">
                    Read
                  </Link>
                  <Link
                    to={`/edit/${student.id}`}
                    className="btn btn-secondary"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-accent"
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
