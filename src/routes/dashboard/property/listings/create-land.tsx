// import { CreateListingLand } from '@/components/dashboardPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/dashboard/property/listings/create-land',
)({
  component: RouteComponent,
  validateSearch: (search: Record<string, string | undefined>) => ({
    type: search.type ?? "",
  })
})

// const routeApi = getRouteApi('/dashboard/property/listings/create-land')


function RouteComponent() {
<>
</>
  // const routeSearch = routeApi.useSearch() 
  // return <CreateListingLand type={routeSearch?.type} />
}
