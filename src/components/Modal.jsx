import React from 'react'

export default function Modal({ open, title, children, onClose, actions }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-lg bg-white p-4 shadow-xl animate-slideUp dark:bg-gray-800">
        <div className="flex items-center justify-between border-b border-gray-200 pb-2 dark:border-gray-700">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button onClick={onClose} className="px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700">✕</button>
        </div>
        <div className="py-4">{children}</div>
        {actions && <div className="flex justify-end gap-2 border-t border-gray-200 pt-3 dark:border-gray-700">{actions}</div>}
      </div>
    </div>
  )
}
