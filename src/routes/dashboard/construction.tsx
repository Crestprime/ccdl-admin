import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/construction')({
  component: () => <div>Hello /dashboard/construction!</div>,
})
