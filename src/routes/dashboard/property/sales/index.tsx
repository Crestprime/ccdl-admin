import { SaleAndReservation } from '@/components/dashboardPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/property/sales/')({
  component: () => <SaleAndReservation />,
})
