import { ClientDetailsPage } from '@/components/dashboardPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/users/clients/details')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ClientDetailsPage />
}
