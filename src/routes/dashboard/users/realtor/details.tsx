import { RealtorDetailsPage } from '@/components/dashboardPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/users/realtor/details')({
  component: RouteComponent,
  validateSearch: (search: Record<string, string | undefined>) => ({
    id: search.id ?? "",
  })
})

// const routeApi = getRouteApi('/dashboard/users/realtor/details')

function RouteComponent() {
  // const routeSearch = routeApi.useSearch() 
  return <RealtorDetailsPage />
}
