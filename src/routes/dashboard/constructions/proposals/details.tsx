import { ProposalDetailsPage } from '@/components/dashboardPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/dashboard/constructions/proposals/details',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <ProposalDetailsPage />
}
