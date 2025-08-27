import React, { useEffect, useMemo, useState } from 'react'
import Modal from '../components/Modal'
import { users as initialUsers } from '../data/mock'

export default function Users() {
  const [users, setUsers] = useState(initialUsers)
  const [query, setQuery] = useState('')
  const [role, setRole] = useState('')
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ id: null, name: '', email: '', role: 'Viewer', status: 'Active' })

  useEffect(() => { document.title = 'Users' }, [])

  const filtered = useMemo(() => {
    return users.filter((u) =>
      (u.name.toLowerCase().includes(query.toLowerCase()) || u.email.toLowerCase().includes(query.toLowerCase())) &&
      (!role || u.role === role)
    )
  }, [users, query, role])

  function onSave() {
    if (!form.name || !form.email) return
    if (form.id) {
      setUsers((prev) => prev.map((u) => (u.id === form.id ? form : u)))
    } else {
      setUsers((prev) => [...prev, { ...form, id: Math.max(0, ...prev.map(p => p.id)) + 1 }])
    }
    setOpen(false)
    setForm({ id: null, name: '', email: '', role: 'Viewer', status: 'Active' })
  }

  function onEdit(u) {
    setForm(u)
    setOpen(true)
  }

  function onDelete(id) {
    if (confirm('Delete this user?')) setUsers((prev) => prev.filter((u) => u.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold">Users</h2>
        <div className="flex gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name or email"
            className="w-56 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:border-gray-700"
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm dark:bg-gray-900 dark:border-gray-700"
          >
            <option value="">All roles</option>
            <option>Admin</option>
            <option>Editor</option>
            <option>Viewer</option>
          </select>
          <button onClick={() => setOpen(true)} className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500">Add user</button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <table className="min-w-full text-sm">
          <thead className="text-left text-gray-500 dark:text-gray-400">
            <tr>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Email</th>
              <th className="px-3 py-2">Role</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr key={u.id} className="border-t border-gray-100 dark:border-gray-700">
                <td className="px-3 py-2">{u.name}</td>
                <td className="px-3 py-2">{u.email}</td>
                <td className="px-3 py-2">{u.role}</td>
                <td className="px-3 py-2">{u.status}</td>
                <td className="px-3 py-2">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => onEdit(u)} className="rounded-md border border-gray-300 px-3 py-1 text-sm hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">Edit</button>
                    <button onClick={() => onDelete(u.id)} className="rounded-md bg-rose-600 px-3 py-1 text-sm text-white hover:bg-rose-500">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td className="px-3 py-6 text-center text-gray-500 dark:text-gray-400" colSpan={5}>No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal
        open={open}
        title={form.id ? 'Edit user' : 'Add user'}
        onClose={() => setOpen(false)}
        actions={[
          <button key="cancel" onClick={() => setOpen(false)} className="rounded-md px-4 py-2">Cancel</button>,
          <button key="save" onClick={onSave} className="rounded-md bg-indigo-600 px-4 py-2 text-white">Save</button>,
        ]}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300">Name</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm dark:bg-gray-900 dark:border-gray-700" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300">Email</label>
            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm dark:bg-gray-900 dark:border-gray-700" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300">Role</label>
            <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm dark:bg-gray-900 dark:border-gray-700">
              <option>Admin</option>
              <option>Editor</option>
              <option>Viewer</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300">Status</label>
            <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm dark:bg-gray-900 dark:border-gray-700">
              <option>Active</option>
              <option>Invited</option>
              <option>Suspended</option>
            </select>
          </div>
        </div>
      </Modal>
    </div>
  )
}
