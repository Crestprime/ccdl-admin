import { ListingTransaction } from '@/components/dashboardPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/dashboard/property/listings/transaction',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <ListingTransaction />
}