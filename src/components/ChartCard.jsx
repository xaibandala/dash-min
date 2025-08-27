import React from 'react'

export default function ChartCard({ title, children }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="font-semibold">{title}</h4>
      </div>
      <div className="h-64">{children}</div>
    </div>
  )
}
