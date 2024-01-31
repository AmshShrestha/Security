import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Log = ({ tripName, description, location, date, image, user, isUser, id }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/mylogs/${id}`);
  };

  const deleteRequest = async () => {
    const res = await axios.delete(`http://localhost:5000/logs/${id}`).catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleDelete = () => {
    deleteRequest().then(() => navigate("/")).then(() => navigate("/logs"));
  };

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={tripName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{tripName}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {isUser && (
            <button onClick={handleEdit} className="btn btn-primary mr-2">
              Edit
            </button>
          )}
          {isUser && (
            <button onClick={handleDelete} className="btn btn-error">
              Delete
            </button>
          )}
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="text-xs text-gray-500">
          Location: {location}
        </div>
        <div className="text-xs text-gray-500">Date: {date}</div>
      </div>
    </div>
  );
};

export default Log;
