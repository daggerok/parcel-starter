import { counter } from "./store";

export function App() {
    return <h1 onClick={() => counter.value++}>
        And {counter}: Hello world!
    </h1>;
}
