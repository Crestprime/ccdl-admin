import { CreateListing } from '@/components/dashboardPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/property/listings/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CreateListing />
}