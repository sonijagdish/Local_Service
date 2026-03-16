import React from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../utils/auth";

export default function UserHome() {
  const user = getUser();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        Welcome back{user?.name ? `, ${user.name}` : ""}!
      </h1>
      <p className="text-gray-600 mb-6">
        You are now logged in. Use the navigation links above to explore your dashboard.
      </p>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
        <ul className="list-disc list-inside space-y-2 text-blue-600">
          <li>
            <Link className="hover:underline" to="/user/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="hover:underline" to="/user/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link className="hover:underline" to="/user/settings">
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
