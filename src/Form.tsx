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
                Imię:
                <input type="text"
                       name="name"
                       value={formData.name}
                       onChange={handleChange}
                />
            </label>

            <label>
                Powód wymówki:
                <input type="text"
                       name="excuseReason"
                       value={formData.excuseReason}
                       onChange={handleChange}
                />
            </label>

            <label>
                Poziom wiarygodności:
                <input type="range"
                       min={0}
                       max={5}
                       value={0}
                       name="levelOfCredibility"
                       onChange={handleChange}
                />
            </label>

            <label>
                Data:
                <input type="date"
                       name="dateOfEvent"
                       value={formData.dateOfEvent}
                       onChange={handleChange}
                />
            </label>

            <label>
                Poziom kreatywności:
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
                Dodatkowe szczegóły:
                <textarea name="extraDetails"
                          value={formData.extraDetails}
                          onChange={handleChange}
                />
            </label>

            <label>
                Czy wymówka jest pilna?
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