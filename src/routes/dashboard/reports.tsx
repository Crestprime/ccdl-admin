import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/reports')({
  component: () => <div>Hello /dashboard/reports!</div>,
})
