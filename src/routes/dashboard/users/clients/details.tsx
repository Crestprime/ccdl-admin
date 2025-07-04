import { ClientDetailsPage } from '@/components/dashboardPage'
import { createFileRoute, getRouteApi } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/users/clients/details')({
  component: RouteComponent,
  validateSearch: (search: Record<string, string | undefined>) => ({
    id: search.id ?? "",
  })
})

const routeApi = getRouteApi('/dashboard/users/clients/details')

function RouteComponent() {
  const routeSearch = routeApi.useSearch() 
  return <ClientDetailsPage id={routeSearch?.id} />
}
