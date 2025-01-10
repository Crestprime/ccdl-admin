import { ListingPage } from '@/components/dashboardPage'
import { createFileRoute, getRouteApi } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/property/listings/')({
  component: RouteComponent,
  validateSearch: (search: Record<string, string | undefined>) => ({
    type: search.type ?? "",
  })
})

const routeApi = getRouteApi('/dashboard/property/listings/')

function RouteComponent() {

  const routeSearch = routeApi.useSearch() 
  return <ListingPage type={routeSearch?.type} /> 
}
