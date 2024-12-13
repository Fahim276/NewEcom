import React, { useEffect } from "react";
import { useUser } from "../Context/UserContext"; // Import the useUser hook

const ProfilePage = () => {
  const { user } = useUser(); // Get the user data from context

  // Redirect to login page if no user is logged in
  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  }, [user]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Profile Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-16">
        <div className="container mx-auto max-w-screen-lg">
          <h1 className="text-4xl font-bold mb-4">Your Profile</h1>
          <p className="text-lg mb-8">Manage your account and view your orders</p>
        </div>
      </section>

      {/* Profile Information */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="bg-white shadow-xl rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Profile Information</h2>
            {user ? (
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-gray-600">Name: </span>
                  <span className="text-gray-800">{user.name}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Email: </span>
                  <span className="text-gray-800">{user.email}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Address: </span>
                  <span className="text-gray-800">{user.address || "Not provided"}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Phone: </span>
                  <span className="text-gray-800">{user.phone || "Not provided"}</span>
                </div>
              </div>
            ) : (
              <p className="text-gray-600">No user data found. Please log in.</p>
            )}

            {/* Edit Profile Button */}
            <div className="mt-6">
              <button
                onClick={() => window.location.href = "/profile/edit"} // Redirect to edit page
                className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300 transform hover:scale-105"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
