import { RealtorPage } from '@/components/dashboardPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/users/realtor/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <RealtorPage />
}
