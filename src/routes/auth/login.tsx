import { LoginPage } from '@/components/authComponents'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/login')({
  component: () => <LoginPage />,
})
