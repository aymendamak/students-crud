import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Fetch data from the API
    axios
      .get(`http://localhost:8081/api/v1/read/${id}`)
      .then((response) => {
        console.log("resonse", response);
        setName(response.data[0].name);
        setEmail(response.data[0].mail);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="overflow-x-auto h-screen bg-slate-50 p-10 ">
      <div className="max-w-md mx-auto mt-10 p-5 bg-gray-100 border border-gray-300 rounded-lg shadow-lg flex flex-col gap-3">
        <h1 className="text-2xl font-bold mb-5 text-center">Student's Data</h1>
        <h2 className="text-2xl text-black">{name}</h2>
        <h2 className="text-2xl text-black">{email}</h2>
        <Link to="/" className="btn btn-primary">
          Back
        </Link>
        <Link to={`/edit/${id}`} className="btn btn-secondary">
          Edit
        </Link>
      </div>
    </div>
  );
};

export default Read;
