import { ListingPage } from '@/components/dashboardPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/property/listings/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ListingPage /> 
}
