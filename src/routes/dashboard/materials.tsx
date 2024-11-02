import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/materials')({
  component: () => <div>Hello /dashboard/materials!</div>,
})
