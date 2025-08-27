import { ClientDetailsPage } from '@/components/dashboardPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/users/clients/details')({
  component: RouteComponent,
  validateSearch: (search: Record<string, string | undefined>) => ({
    id: search.id ?? "",
  })
})
 

function RouteComponent() {  
  return <ClientDetailsPage  />
}
