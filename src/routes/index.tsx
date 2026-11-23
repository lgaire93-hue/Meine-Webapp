import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Laxmima Dostert</h1>
      <p className="mt-4 text-lg">
        👋Hallo und Willkommen auf meiner Webseite! Ich bin Laxmi, eine motivierte Frontend Developer mit skills wie React und Typescript. Ich bin Passionat für technology.
      </p>
    </div>
  )
}
