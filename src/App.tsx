import { counter } from "./store";
import { ReactElement } from "react";

export function App(): ReactElement {
    return <h1 onClick={() => counter.value++}>
        And {counter}: Hello world!
    </h1>;
}
