import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/appLayout/setting')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/appLayout/setting"!</div>
}
