import React, {useState} from "react";
import "./Form.css"

interface FormData {
    name: string;
    excuseReason: string;
    levelOfCredibility: number;
    dateOfEvent: string | readonly string[] | number | undefined;
    creativityLevel: number;
    extraDetails: string;
    excuseIsImportant: boolean;
}

const Form = () => {
    const [formData, setFormData] = useState<FormData>({name:"", excuseReason:"", levelOfCredibility:0, dateOfEvent:"", creativityLevel:0, extraDetails:"", excuseIsImportant:false});

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        console.log("Submitted Data: ", formData)
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        console.log(`event.target.value: ${event.target.value}, event.target.name: ${event.target.name}`)
        const {name, value, type, checked} = event.target as HTMLInputElement;
        setFormData(prevState => ({...prevState, [name]: type === "checkbox" ? checked : value}));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>Imię:</span>
                <input type="text"
                       name="name"
                       value={formData.name}
                       onChange={handleChange}
                />
            </label>

            <label>
                <span>Powód wymówki:</span>
                <input type="text"
                       name="excuseReason"
                       value={formData.excuseReason}
                       onChange={handleChange}
                />
            </label>

            <label>
                <span>Poziom wiarygodności:</span>
                <input type="range"
                       min={0}
                       max={5}
                       defaultValue={0}
                       name="levelOfCredibility"
                       onChange={handleChange}
                />
            </label>

            <label>
                <span>Data:</span>
                <input type="date"
                       name="dateOfEvent"
                       value={formData.dateOfEvent}
                       onChange={handleChange}
                />
            </label>

            <label>
                <span>Poziom kreatywności:</span>
                <select name="creativityLevel"
                        value={formData.creativityLevel}
                        onChange={handleChange}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                </select>
            </label>

            <label>
                <span>Dodatkowe szczegóły:</span>
                <textarea name="extraDetails"
                          value={formData.extraDetails}
                          onChange={handleChange}
                />
            </label>

            <label className={"excuse-is-important"}>
                <span>Czy wymówka jest pilna?</span>
                <input type="checkbox"
                       name="excuseIsImportant"
                       checked={formData.excuseIsImportant}
                       onChange={handleChange}
                />
            </label>

            <button type="submit">Wyślij</button>
        </form>
    )
}

export default Form;