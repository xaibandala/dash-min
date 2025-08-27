export const overview = [
  { label: 'Total Users', value: 12840, delta: '+8.4%', color: 'from-indigo-500 to-violet-500' },
  { label: 'Sales', value: 2430, delta: '+3.2%', color: 'from-emerald-500 to-teal-500' },
  { label: 'Revenue', value: '₱82,430', delta: '+5.1%', color: 'from-sky-500 to-indigo-500' },
  { label: 'Active Sessions', value: 534, delta: '-1.2%', color: 'from-amber-500 to-orange-500' },
]

export const lineData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Visitors',
      data: [120, 190, 170, 210, 240, 200, 260],
      borderColor: '#6366F1',
      backgroundColor: 'rgba(99, 102, 241, 0.2)',
      tension: 0.4,
      fill: true,
    },
  ],
}

export const barData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Sales',
      data: [3200, 4500, 3800, 5200],
      borderRadius: 6,
      backgroundColor: '#10B981',
    },
  ],
}

export const pieData = {
  labels: ['Mobile', 'Desktop', 'Tablet'],
  datasets: [
    {
      label: 'Traffic',
      data: [56, 34, 10],
      backgroundColor: ['#6366F1', '#10B981', '#F59E0B'],
      hoverOffset: 8,
    },
  ],
}

export const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active' },
  { id: 3, name: 'Carol Lee', email: 'carol@example.com', role: 'Viewer', status: 'Invited' },
  { id: 4, name: 'David Kim', email: 'david@example.com', role: 'Viewer', status: 'Suspended' },
  { id: 5, name: 'Eva Brown', email: 'eva@example.com', role: 'Editor', status: 'Active' },
]
