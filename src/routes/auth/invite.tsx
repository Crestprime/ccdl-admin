import { InvitePage } from '@/components/authComponents'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/invite')({
  component: RouteComponent,
  validateSearch: (search: Record<string, string | undefined>) => ({
    inviteId: search.inviteId ?? "",
  })
})
 

function RouteComponent() { 
 
  return <InvitePage />
}
