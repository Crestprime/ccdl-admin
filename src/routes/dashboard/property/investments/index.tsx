import { InvestmentPage } from '@/components/dashboardPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/property/investments/')({
  component: () => <InvestmentPage />,
})
