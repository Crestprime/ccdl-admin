import { EditListingBuilding } from '@/components/dashboardPage'
import { createFileRoute, getRouteApi } from '@tanstack/react-router'

export const Route = createFileRoute(
    '/dashboard/property/listings/edit-building',
)({
    component: RouteComponent,
    validateSearch: (search: Record<string, string | undefined>) => ({
      id: search.id ?? "",
      type: search.type ?? "",
    })
})

const routeApi = getRouteApi('/dashboard/property/listings/edit-building')

function RouteComponent() {

  const routeSearch = routeApi.useSearch() 

    return (
        <EditListingBuilding id={routeSearch?.id} type={routeSearch?.type} />
    )
}
