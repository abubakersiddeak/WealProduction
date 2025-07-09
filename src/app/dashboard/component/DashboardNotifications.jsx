import React, { useState, useEffect } from "react";
import { Bell, XCircle } from "lucide-react";

const DashboardNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/notifications`
        );
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setNotifications(data);
      } catch (err) {
        console.error("Failed to fetch notifications:", err);
        setError("Failed to load notifications.");
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  // Function to mark a notification as read (optional, but good practice)
  const markAsRead = async (id) => {
    // Implement API call to mark as read if needed
    // For now, just remove from UI
    setNotifications((prev) => prev.filter((notif) => notif._id !== id));
  };

  if (loading) {
    return (
      <div className="p-4 bg-gray-800 rounded-lg shadow-md text-gray-300">
        Loading notifications...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-800 rounded-lg shadow-md text-white">
        Error: {error}
      </div>
    );
  }

  if (notifications.length === 0) {
    return (
      <div className="p-4 bg-gray-800 rounded-lg shadow-md text-gray-300">
        No new notifications.
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-100 mb-4 flex items-center">
        <Bell size={20} className="mr-2 text-yellow-400" /> Low Stock Alerts
      </h3>
      <div className="space-y-3">
        {notifications.map((notif) => (
          <div
            key={notif._id}
            className="flex items-center justify-between bg-gray-700 p-3 rounded-md text-gray-200 text-sm"
          >
            <span>{notif.message}</span>
            <button
              onClick={() => markAsRead(notif._id)}
              className="text-gray-400 hover:text-red-400 transition-colors"
              title="Dismiss notification"
            >
              <XCircle size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardNotifications;
