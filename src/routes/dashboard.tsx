import { createFileRoute, Outlet } from '@tanstack/react-router'

// THIS IS A LAYOUT FILE

export const Route = createFileRoute('/dashboard')({
  component: DashboardLayout,
})

function DashboardLayout() {
  return (
    <div>
      <p>This is the Dashboard Lay out</p>
      <Outlet />
    </div>
  )
}
