import Counter from 'animated-motion-counter';

const App = () => {
    const increase = (val: number) => {
        console.log(val);
    }
    const decrease = (val: number) => {
        console.log(val);
    }
    
    return (
        <div className="h-screen flex flex-col gap-8 bg-zinc-900 justify-center items-center">
            <Counter
                key={'1'}
                min={1} 
                max={22} 
                size="small"
            />
            <Counter
                key={'2'}
                min={1}
                max={22}
                size="medium"
            />
            <Counter
                min={19}
                max={22}
                onIncrease={increase}
                onDecrease={decrease}
                size="large"
                buttonColor="red"
                iconColor="white"
                textColor="white"
            />
        </div>
    )
}

export default App