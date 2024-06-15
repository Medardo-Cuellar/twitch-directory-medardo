import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import Content from "./components/Content"

function App() {

  return (
    <>
    <main className="w-full min-h-screen grid grid-cols-[13rem_1fr] grid-rows-[3rem_1fr]">
      <Navbar />
      <Menu />
      <Content />
    </main>

    </>
  )
}

export default App
 