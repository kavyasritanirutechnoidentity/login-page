import { createFileRoute, Outlet } from '@tanstack/react-router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const Route = createFileRoute('/appLayout')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  )
}
