import { CreateListingBuilding } from '@/components/dashboardPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/dashboard/property/listings/create-building',
)({
  component: RouteComponent,
  validateSearch: (search: Record<string, string | undefined>) => ({
    type: search.type ?? "",
  })
})
 

function RouteComponent() {
 
  return <CreateListingBuilding />
}
