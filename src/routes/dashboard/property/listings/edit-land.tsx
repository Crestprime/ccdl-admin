import { EditListingLand } from '@/components/dashboardPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/property/listings/edit-land')({
    component: RouteComponent,
    validateSearch: (search: Record<string, string | undefined>) => ({
        id: search.id ?? "",
        type: search.type ?? "",
    })
})

// const routeApi = getRouteApi('/dashboard/property/listings/edit-land')

function RouteComponent() {
    // const routeSearch = routeApi.useSearch()

    return (
        <EditListingLand  />
    )
}
