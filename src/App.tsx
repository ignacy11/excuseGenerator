import Form, { FormData } from "./Form.tsx";
import GeneratedExcuses from "./GeneratedExcuses.tsx";
import { useState } from "react";
import "./css/App.css"

function App() {
    const [excusesList, setExcusesList] = useState<FormData[]>([])

    const addExcuseToList = (newExcuse: FormData) => {
        setExcusesList((prevExcuses) => [...prevExcuses, newExcuse])
    }

    return (
        <main className={"app-content"}>
            <Form addExcuseToList={addExcuseToList} />
            <GeneratedExcuses excusesList={excusesList} />
        </main>
    )
}

export default App