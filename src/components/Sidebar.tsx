'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { 
  HomeIcon, 
  AcademicCapIcon, 
  QuestionMarkCircleIcon, 
  ChatBubbleLeftRightIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const router = useRouter()
  const pathname = usePathname()

  const menuItems = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: HomeIcon,
      description: 'Overview and statistics'
    },
    {
      name: 'Universities',
      href: '/universities',
      icon: AcademicCapIcon,
      description: 'Manage university information'
    },
    {
      name: 'Help',
      href: '/help',
      icon: QuestionMarkCircleIcon,
      description: 'Support and guidance'
    },
    {
      name: 'Feedback',
      href: '/feedback',
      icon: ChatBubbleLeftRightIcon,
      description: 'Share your experience'
    }
  ]

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full bg-slate-900 text-white z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:inset-0
        w-64 lg:w-80
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-slate-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <AcademicCapIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">CGPA Calculator</h1>
                <p className="text-sm text-slate-400">Academic Tracker</p>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 px-4 py-6">
            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)} // Close mobile menu on navigation
                    className={`
                      flex items-center px-4 py-3 rounded-lg transition-colors duration-200
                      ${isActive(item.href) 
                        ? 'bg-indigo-600 text-white' 
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    <div className="flex-1">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* User Profile & Logout */}
          <div className="p-4 border-t border-slate-700">
            <div className="mb-4 px-4 py-3 bg-slate-800 rounded-lg">
              <div className="text-sm font-medium text-white">Welcome back!</div>
              <div className="text-xs text-slate-400">Ready to track your grades?</div>
            </div>
            
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-3 text-slate-300 hover:bg-red-600 hover:text-white rounded-lg transition-colors duration-200"
            >
              <ArrowRightOnRectangleIcon className="w-5 h-5 mr-3" />
              <div className="flex-1 text-left">
                <div className="font-medium">Logout</div>
                <div className="text-xs text-slate-400">Sign out of your account</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
