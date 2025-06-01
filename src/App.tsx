import Form, { FormData } from "./Form.tsx";
import GeneratedExcuses from "./GeneratedExcuses.tsx";
import { useState } from "react";
import "./css/App.css"

function App() {
    const [excusesList, setExcusesList] = useState<FormData[]>([])

    const addExcuseToList = (formData: FormData) => {
        setExcusesList((prevState) => [...prevState, formData])
    }

    return (
        <>
            <main className={"app-content"}>
                <Form onSubmit={addExcuseToList}/>
                <GeneratedExcuses excusesList={excusesList}/>
            </main>
        </>
    )
}

export default App