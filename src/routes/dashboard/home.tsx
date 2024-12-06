import { HomePage } from '@/components/dashboardPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/home')({
  component: () => <HomePage />,
})
