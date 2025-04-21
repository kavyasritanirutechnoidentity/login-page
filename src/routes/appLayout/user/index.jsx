import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/appLayout/user/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/appLayout/user/"!</div>
}
