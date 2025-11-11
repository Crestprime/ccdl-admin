import { InvestmentDetailPage } from '@/components/dashboardPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/property/investments/details')(
  {
    component: RouteComponent,
    validateSearch: (search: Record<string, string | undefined>) => ({
      id: search.id ?? "",
    })
  },
)
 

function RouteComponent() {
 
  return <InvestmentDetailPage  />
}
