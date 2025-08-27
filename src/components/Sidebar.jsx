import React from 'react'
import { NavLink } from 'react-router-dom'
import { HomeIcon, UsersIcon, ChartBarIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'

const nav = [
  { to: '/dashboard', name: 'Dashboard', icon: HomeIcon },
  { to: '/users', name: 'Users', icon: UsersIcon },
  { to: '/analytics', name: 'Analytics', icon: ChartBarIcon },
  { to: '/settings', name: 'Settings', icon: Cog6ToothIcon },
]

export default function Sidebar() {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:flex-col w-64 h-screen sticky top-0 border-r border-gray-200 bg-white/70 backdrop-blur dark:bg-gray-800/60 dark:border-gray-700">
        <div className="h-16 flex items-center px-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 font-semibold">
            <span className="inline-block h-8 w-8 rounded bg-gradient-to-tr from-brand.indigo to-brand.emerald" />
            <span>Admin Panel</span>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-600 dark:bg-gray-700 dark:text-indigo-300'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>
        <div className="p-3 border-t border-gray-200 dark:border-gray-700">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-gray-200 bg-white/90 backdrop-blur dark:bg-gray-800/80 dark:border-gray-700">
        <ul className="grid grid-cols-4">
          {nav.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center py-2 text-xs ${
                    isActive ? 'text-indigo-600' : 'text-gray-600 dark:text-gray-300'
                  }`
                }
              >
                <item.icon className="h-6 w-6" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
