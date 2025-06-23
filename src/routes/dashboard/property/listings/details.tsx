import { ListingDetailsPage } from '@/components/dashboardPage'
import { createFileRoute, getRouteApi } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/property/listings/details')({
  component: RouteComponent,
  validateSearch: (search: Record<string, string | undefined>) => ({
    id: search.id ?? "",
    type: search.type ?? "",
  })
})

const routeApi = getRouteApi('/dashboard/property/listings/details')

function RouteComponent() { 

  const routeSearch = routeApi.useSearch() 
  return <ListingDetailsPage id={routeSearch?.id} type={routeSearch?.type} />
}