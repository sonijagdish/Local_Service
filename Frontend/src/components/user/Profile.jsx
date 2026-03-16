import React from "react";
import { getUser } from "../../utils/auth";

export default function Profile() {
  const user = getUser();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p className="text-gray-600 mb-2">Name: {user?.name || "Unknown"}</p>
      <p className="text-gray-600 mb-2">Email: {user?.email || "Unknown"}</p>
      <p className="text-gray-600">You can add a profile edit form here.</p>
    </div>
  );
}
