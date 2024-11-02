import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/property/schedule')({
  component: () => <div>Hello /dashboard/property/schedule!</div>,
})
