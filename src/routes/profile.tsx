import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
  component: ProfilePage,
})

type ProfileCardProps = {
  name: string
  description: string
}

export function ProfileCard({ name, description }: ProfileCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
    </article>
  )
}

export function ProfilePage() {
  return (
    <section className="personal-page">
      <h1>Mein Profil</h1>
      <ProfileCard
        name="Laxmima Dostert"
        description="Ich interessiere mich für Webentwicklung und Gaming."
      />
    </section>
  )
}