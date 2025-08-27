import React, { useEffect, useState } from 'react'
import ChartCard from '../components/ChartCard'
import { lineData, barData } from '../data/mock'
import { Chart as ChartJS, LineElement, BarElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js'
import { Line, Bar } from 'react-chartjs-2'

ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend)

const ranges = [
  { label: 'Last 7 days', value: 7 },
  { label: 'Last 30 days', value: 30 },
  { label: 'Last 90 days', value: 90 },
]

export default function Analytics() {
  const [range, setRange] = useState(ranges[1].value)
  useEffect(() => { document.title = 'Analytics' }, [])

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h2 className="text-xl font-semibold">Analytics</h2>
        <select value={range} onChange={(e) => setRange(Number(e.target.value))} className="w-48 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm dark:bg-gray-900 dark:border-gray-700">
          {ranges.map((r) => (
            <option key={r.value} value={r.value}>{r.label}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartCard title={`Traffic (${range}d)`}>
          <Line data={lineData} options={{ plugins: { legend: { display: false } }, maintainAspectRatio: false }} />
        </ChartCard>
        <ChartCard title="Conversion Rate">
          <Bar data={barData} options={{ plugins: { legend: { display: false } }, maintainAspectRatio: false }} />
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Traffic', value: '24,503' },
          { label: 'Conversion', value: '3.2%' },
          { label: 'Retention', value: '41%' },
        ].map((k) => (
          <div key={k.label} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">{k.label}</p>
            <p className="mt-2 text-2xl font-semibold">{k.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
