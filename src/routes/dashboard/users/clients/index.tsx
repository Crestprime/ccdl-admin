import { ClientPage } from '@/components/dashboardPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/users/clients/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ClientPage />
}
