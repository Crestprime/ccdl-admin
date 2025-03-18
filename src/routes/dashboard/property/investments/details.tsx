import { InvestmentDetailPage } from '@/components/dashboardPage'
import { createFileRoute, getRouteApi } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/property/investments/details')(
  {
    component: RouteComponent,
    validateSearch: (search: Record<string, string | undefined>) => ({
      id: search.id ?? "",
    })
  },
)

const routeApi = getRouteApi('/dashboard/property/investments/details')

function RouteComponent() {

  const routeSearch = routeApi.useSearch() 
  return <InvestmentDetailPage id={routeSearch?.id} />
}
