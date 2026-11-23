import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import type { FormEvent } from 'react'

export const Route = createFileRoute('/tasks')({
  component: TasksPage,
})

type Task = {
  id: string
  title: string
  done: boolean
}

export function TasksPage() {
  const [draft, setDraft] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])

  function addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const title = draft.trim()
    if (!title) return

    const task = { id: crypto.randomUUID(), title, done: false }
    setTasks((previousTasks) => [...previousTasks, task])
    setDraft('')
  }

  function toggleTask(id: string) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    )
  }

  return (
    <section className="personal-page">
      <h1>Meine Aufgaben</h1>

      <form onSubmit={addTask}>
        <label htmlFor="task-title">Neue Aufgabe</label>
        <input
          id="task-title"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
        />
        <button type="submit">Hinzufügen</button>
      </form>

      {tasks.length === 0 && <p>Du hast noch keine Aufgaben.</p>}

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
              />
              <span className={task.done ? 'task-done' : undefined}>
                {task.title}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  )
}