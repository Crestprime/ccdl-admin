import { InvitePage } from '@/components/authComponents'
import { createFileRoute, getRouteApi } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/invite')({
  component: RouteComponent,
  validateSearch: (search: Record<string, string | undefined>) => ({
    inviteId: search.inviteId ?? "",
  })
})

const routeApi = getRouteApi('/auth/invite')

function RouteComponent() {

  const routeSearch = routeApi.useSearch() 
 
  return <InvitePage inviteId={routeSearch?.inviteId} />
}
