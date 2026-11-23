import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/settings')({
  component: SettingsPage,
})

export function SettingsPage() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark',
  )

  function changeTheme(enabled: boolean) {
    const theme = enabled ? 'dark' : 'light'

    setDarkMode(enabled)
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }

  return (
    
    <section className="personal-page">
      <h1>Einstellungen</h1>
      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={(event) => changeTheme(event.target.checked)}
        />
        Dark Mode
      </label>
    </section>
  )
}