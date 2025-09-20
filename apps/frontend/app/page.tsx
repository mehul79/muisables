import {Button} from "@repo/ui/button"


export default function Home() {
  return (
    <main>
      <h1>Welcome to the Frontend App!</h1>
      <Button appName="Frontend" className="border p-2 ">
        Click Me
      </Button>
    </main>
  )
}