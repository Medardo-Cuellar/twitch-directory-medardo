import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import Content from "./components/Content"

function App() {

  return (
    <>
    <main className="w-full min-h-screen p-4 grid grid-cols-[13rem_1fr] grid-rows-[3rem_1fr]">
      <Navbar />
      <Menu />
      <Content />
    </main>

    </>
  )
}

export default App
 