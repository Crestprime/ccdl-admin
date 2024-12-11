import { SchedulePage } from '@/components/dashboardPage'
import { createFileRoute } from '@tanstack/react-router'
import "../../../../App.css"

export const Route = createFileRoute('/dashboard/property/schedule/')({
  component: () => <SchedulePage />,
})
