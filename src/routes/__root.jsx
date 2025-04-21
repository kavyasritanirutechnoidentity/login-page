import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent () { 
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </QueryClientProvider>

  )
}