import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/property/listings')({
  component: () => <div>Hello /dashboard/property/listings!</div>,
})
