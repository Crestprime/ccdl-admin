import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/property/sales')({
  component: () => <div>Hello /dashboard/property/sales!</div>,
})
