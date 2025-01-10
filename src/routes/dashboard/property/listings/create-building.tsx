import { CreateListingBuilding } from '@/components/dashboardPage'
import { createFileRoute, getRouteApi } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/dashboard/property/listings/create-building',
)({
  component: RouteComponent,
  validateSearch: (search: Record<string, string | undefined>) => ({
    type: search.type ?? "",
  })
})

const routeApi = getRouteApi('/dashboard/property/listings/create-building')

function RouteComponent() {

  const routeSearch = routeApi.useSearch() 
  return <CreateListingBuilding type={routeSearch?.type} />
}
