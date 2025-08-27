import React, { useEffect } from 'react'
import useDarkMode from '../hooks/useDarkMode'

export default function Settings() {
  const [dark, setDark] = useDarkMode()
  useEffect(() => { document.title = 'Settings' }, [])

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-xl font-semibold">Settings</h2>

      <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h3 className="font-semibold">Profile</h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300">Name</label>
            <input className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm dark:bg-gray-900 dark:border-gray-700" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300">Email</label>
            <input className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm dark:bg-gray-900 dark:border-gray-700" placeholder="jane@example.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-gray-600 dark:text-gray-300">Password</label>
            <input type="password" className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm dark:bg-gray-900 dark:border-gray-700" placeholder="••••••••" />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-500">Save changes</button>
        </div>
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h3 className="font-semibold">Appearance</h3>
        <div className="mt-3 flex items-center justify-between">
          <p>Dark mode</p>
          <button onClick={() => setDark(!dark)} className="rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
            {dark ? 'Disable' : 'Enable'}
          </button>
        </div>
      </section>
    </div>
  )
}
