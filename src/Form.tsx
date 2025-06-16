import React, {useState} from "react";
import "./css/Form.css"

export interface FormData {
    name: string;
    excuseReason: string;
    levelOfCredibility: number;
    dateOfEvent: string;
    creativityLevel: number;
    extraDetails: string;
    excuseIsImportant: boolean;
}

interface FormProps {
    addExcuseToList: (data: FormData) => void;
}

const InitialFormState: FormData = {
    name: "",
    excuseReason: "",
    levelOfCredibility: 0,
    dateOfEvent: "",
    creativityLevel: 0,
    extraDetails: "",
    excuseIsImportant: false
}

const Form = ({ addExcuseToList }: FormProps) => {
    const [formData, setFormData] = useState<FormData>(InitialFormState)

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const {name, value, type} = event.target;
        const checked = type === "checkbox" ? (event.target as HTMLInputElement).checked : undefined;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        addExcuseToList(formData);
        setFormData(InitialFormState);
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
                       name="levelOfCredibility"
                       value={formData.levelOfCredibility}
                       onChange={handleChange}
                />
            </label>

            <label>
                <span>Data:</span>
                <input type="date"
                       name="dateOfEvent"
                       value={formData.dateOfEvent?.toString()}
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
    );
};

export default Form;