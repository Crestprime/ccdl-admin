import { AllTransaction } from '@/components/dashboardPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/wallet/alltransaction')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AllTransaction />
}
