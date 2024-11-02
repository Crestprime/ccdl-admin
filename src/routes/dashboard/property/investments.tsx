import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/property/investments')({
  component: () => <div>Hello /dashboard/property/investments!</div>,
})
