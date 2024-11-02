import { createLazyFileRoute } from '@tanstack/react-router'

// PLEASE CREATE ALL VIEWS IN THE VIEWS DIRECTORY WITH THE SAME FOLDER STRUCTURE

export const Route = createLazyFileRoute('/')({
  component: () => <div>Hello /!</div>,
})
