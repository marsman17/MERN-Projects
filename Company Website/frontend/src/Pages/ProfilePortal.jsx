import React, { useState, useEffect } from "react";

const ProfilePortal = () => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Full Stack Developer",
  });

  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [notifications, setNotifications] = useState([
    "Your project has been approved.",
    "New message from support.",
  ]);

  useEffect(() => {
    fetch("/api/profile", {
      headers: { "x-auth-token": localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, []);

  const handleProfileEdit = (e) => {
    e.preventDefault();
    fetch("/api/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(userInfo),
    }).then(() => console.log("Profile updated"));
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ name: projectName }),
    }).then(() => {
      setProjects([...projects, projectName]);
      setProjectName("");
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <p className="text-gray-700">Welcome, {userInfo.name}!</p>
        <p className="text-gray-700">
          You have submitted {projects.length} projects.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <form onSubmit={handleProfileEdit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userInfo.name}
              onChange={(e) =>
                setUserInfo({ ...userInfo, name: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="bio">
              Bio
            </label>
            <textarea
              id="bio"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userInfo.bio}
              onChange={(e) =>
                setUserInfo({ ...userInfo, bio: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Changes
          </button>
        </form>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Submit a Project</h2>
        <form onSubmit={handleProjectSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="projectName">
              Project Name
            </label>
            <input
              id="projectName"
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Project
          </button>
        </form>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Submitted Projects</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {projects.length > 0 ? (
              projects.map((project, index) => <li key={index}>{project}</li>)
            ) : (
              <p>No projects submitted yet.</p>
            )}
          </ul>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Notifications</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <li key={index}>{notification}</li>
            ))
          ) : (
            <p>No notifications at this time.</p>
          )}
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Support</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>
            <a href="/support" className="text-blue-500 hover:underline">
              Visit our support page
            </a>
          </li>
          <li>
            <a href="/contact" className="text-blue-500 hover:underline">
              Contact us for help
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePortal;
