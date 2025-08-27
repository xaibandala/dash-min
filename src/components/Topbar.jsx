import React, { useState } from 'react'
import { BellIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import useDarkMode from '../hooks/useDarkMode'

export default function Topbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useDarkMode()

  return (
    <header className="sticky top-0 z-30 h-16 flex items-center justify-between gap-4 px-4 md:px-6 border-b border-gray-200 bg-white/70 backdrop-blur dark:bg-gray-800/60 dark:border-gray-700">
      <div className="flex-1 max-w-xl">
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:border-gray-700"
        />
      </div>

      <div className="flex items-center gap-2">
        <button
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Notifications"
        >
          <BellIcon className="h-6 w-6" />
        </button>

        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          {dark ? 'Light' : 'Dark'}
        </button>

        <div className="relative">
          <button onClick={() => setOpen((o) => !o)} className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
            <img className="h-8 w-8 rounded-full" src="https://i.pravatar.cc/100?img=5" alt="avatar" />
            <ChevronDownIcon className="h-4 w-4" />
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-48 rounded-md border border-gray-200 bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">Profile</button>
              <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">Settings</button>
              <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
