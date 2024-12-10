import { ListingDetailsPage } from '@/components/dashboardPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/property/listings/details')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ListingDetailsPage />
}