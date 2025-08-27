// import { DashboardLayout } from '@/components/sidebarComponents'
import { createFileRoute } from '@tanstack/react-router' 

// THIS IS A LAYOUT FILE

export const Route = createFileRoute('/dashboard')({
  component: Dashboard,
})

function Dashboard() {

  return ( 
    // <DashboardLayout >
    //   <Outlet />
    // </DashboardLayout>
    <>
    </>
  )
}
