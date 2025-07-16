'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'

export default function Universities() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 lg:flex">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 lg:ml-80">
        {/* Top Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-semibold text-gray-900 ml-12 lg:ml-0">
                  Universities
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Manage Universities
              </h2>
              <p className="text-gray-600 mb-6">
                Add and manage your university information, grading systems, and academic settings.
              </p>
              
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🏫</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  University Management
                </h3>
                <p className="text-gray-600 mb-4">
                  This feature will allow you to manage your university information and grading systems.
                </p>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
