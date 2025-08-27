import React, { useEffect } from 'react'
import ChartCard from '../components/ChartCard'
import { lineData, barData, pieData, overview } from '../data/mock'
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line, Bar, Pie } from 'react-chartjs-2'

ChartJS.register(LineElement, BarElement, ArcElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend)

export default function Dashboard() {
  useEffect(() => {
    document.title = 'Dashboard'
  }, [])

  return (
    <div className="space-y-6">
      {/* Overview cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {overview.map((o) => (
          <div key={o.label} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">{o.label}</p>
              <span className="text-xs rounded-full bg-gray-100 px-2 py-0.5 dark:bg-gray-700">{o.delta}</span>
            </div>
            <div className="mt-3 flex items-end justify-between">
              <p className="text-2xl font-semibold">{o.value}</p>
              <div className={`h-10 w-10 rounded-full bg-gradient-to-tr ${o.color}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartCard title="Visitors">
          <Line data={lineData} options={{
            plugins: { legend: { display: false } },
            scales: { x: { grid: { display: false } }, y: { grid: { color: '#eee' } } },
            maintainAspectRatio: false,
          }} />
        </ChartCard>

        <ChartCard title="Quarterly Sales">
          <Bar data={barData} options={{ plugins: { legend: { display: false } }, maintainAspectRatio: false }} />
        </ChartCard>

        <ChartCard title="Traffic Sources">
          <Pie data={pieData} options={{ maintainAspectRatio: false }} />
        </ChartCard>

        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="font-semibold">Recent Activity</h4>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="text-left text-gray-500 dark:text-gray-400">
                <tr>
                  <th className="px-3 py-2">User</th>
                  <th className="px-3 py-2">Action</th>
                  <th className="px-3 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 6 }).map((_, i) => (
                  <tr key={i} className="border-t border-gray-100 dark:border-gray-700">
                    <td className="px-3 py-2">User {i + 1}</td>
                    <td className="px-3 py-2">Updated settings</td>
                    <td className="px-3 py-2">2025-08-2{i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
