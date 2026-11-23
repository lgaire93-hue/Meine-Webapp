import { Outlet, createRootRoute } from '@tanstack/react-router'

import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import '../styles.css'
import { Navbar } from '#/components/navbar.comp'
import { FavoritesPage } from './favorites'
import { ProfilePage } from './profile'
import { HobbiesPage } from './hobbies'
import { TasksPage } from './tasks'
import { SettingsPage } from './settings'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      
      <Navbar/>
      <Outlet />
      <ProfilePage/>
      <FavoritesPage/>
      <HobbiesPage/>
      <TasksPage/>
      <SettingsPage/>

      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'TanStack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  )
}
