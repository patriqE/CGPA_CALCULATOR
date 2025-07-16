"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    // In a real app, you would verify the token with the backend
    // For now, we'll just decode it client-side (not secure for production)
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUser({ name: "User", email: payload.email });
    } catch (error) {
      localStorage.removeItem("token");
      router.push("/login");
      return;
    }

    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">CGPA Calculator</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user?.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Welcome to your CGPA Calculator!
              </h2>
              <p className="text-gray-600 mb-8">
                You have successfully logged in. This is where your CGPA
                calculation features will be implemented.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Add Courses</h3>
                  <p className="text-gray-600 mb-4">
                    Add your courses and grades
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                    Coming Soon
                  </button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Calculate CGPA</h3>
                  <p className="text-gray-600 mb-4">
                    Calculate your cumulative GPA
                  </p>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
                    Coming Soon
                  </button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">View History</h3>
                  <p className="text-gray-600 mb-4">View your grade history</p>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
