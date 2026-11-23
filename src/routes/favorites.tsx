import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/favorites')({
  component: FavoritesPage,
})

export function FavoritesPage() {
  const favorites = [
    { category: 'Film', title: 'Spider-Man: A New Universe' },
    { category: 'Spiel', title: 'Stardew Valley' },
    { category: 'Musik', title: 'Daft Punk' },
  ]

  return (
    <section className="personal-page">
      <h1>Meine Favoriten</h1>
      <ul>
        {favorites.map(({ category, title }) => (
          <li key={category}>
            <strong>{category}</strong> – {title}
          </li>
        ))}
      </ul>
    </section>
  )
}