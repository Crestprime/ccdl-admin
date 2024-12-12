import { InvestmentDetailPage } from '@/components/dashboardPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/property/investments/details')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return <InvestmentDetailPage />
}
