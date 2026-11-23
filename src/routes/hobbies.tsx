import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hobbies')({
  component: HobbiesPage,
})

export function HobbiesPage() {
  const hobbies = ["Fotografie", "Radfahren", "Kochen", "Gaming"]

  return (
    <section className="personal-page">
      <h1>Meine Hobbys</h1>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </section>
  )
}