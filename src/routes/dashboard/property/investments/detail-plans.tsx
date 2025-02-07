import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/dashboard/property/investments/detail-plans',
)({
  component: RouteComponent,
  validateSearch: (search: Record<string, string | undefined>) => ({
    id: search.id ?? "",
  })
})

function RouteComponent() {
  return <div>Hello "/dashboard/property/investments/detail-plans"!</div>
}
