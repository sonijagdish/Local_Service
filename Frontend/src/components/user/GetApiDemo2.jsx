import axios from "axios";
import React, { useEffect, useState } from "react";

const GetApiDemo2 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // GET USERS
  const getUsers = async () => {
    try {   
      setLoading(true);
      const res = await axios.get(
        "https://node5.onrender.com/user/user/"
      );
      setUsers(res.data?.data || []);
      setError("");
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  // DELETE USER
  const deleteUser = async (id) => {
    try {
      await axios.delete(
        `https://node5.onrender.com/user/user/${id}`
      );
      setUsers(users.filter((user) => user._id !== id));
    } catch (err) {
      alert("Delete failed");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        GET API Demo (View + Delete)
      </h1>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Age</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b hover:bg-gray-100 transition"
              >
                <td className="py-2 px-4 text-sm">
                  {user._id.slice(-6)}
                </td>
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.age}</td>
                <td className="py-2 px-4">
                  {user.isActive ? (
                    <span className="text-green-600 font-semibold">
                      Active
                    </span>
                  ) : (
                    <span className="text-red-600 font-semibold">
                      Inactive
                    </span>
                  )}
                </td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
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

export default GetApiDemo2;