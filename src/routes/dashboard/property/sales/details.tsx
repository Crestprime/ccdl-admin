import { SaleDetails } from '@/components/dashboardPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/property/sales/details')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SaleDetails />
}
