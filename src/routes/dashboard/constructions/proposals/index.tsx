import { ProposalPage } from '@/components/dashboardPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/constructions/proposals/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ProposalPage />
}
