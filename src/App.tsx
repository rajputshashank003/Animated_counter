import Counter from "./components/Counter"

const App = () => {
    return (
        <div className="h-screen flex bg-zinc-900 justify-center items-center">
            <Counter min={8} max={22} />
        </div>
    )
}

export default App