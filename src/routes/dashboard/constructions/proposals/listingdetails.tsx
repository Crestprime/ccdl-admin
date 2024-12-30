import { ProposalListingDetailPage } from '@/components/dashboardPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/dashboard/constructions/proposals/listingdetails',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <ProposalListingDetailPage />
}