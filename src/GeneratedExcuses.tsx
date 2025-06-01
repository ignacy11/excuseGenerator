import { FormData } from "./Form.tsx";
import "./css/GeneratedExcuses.css"

interface GeneratedExcusesProps {
    excusesList: FormData[];
}

const GeneratedExcuses = ({ excusesList }: GeneratedExcusesProps) => {
    return(
        <>
            <div className="excuses-list">
                {
                    excusesList.map((excuse, index) => (
                        <p key={index} className={"excuse"}>
                            Panie Profesorze, nazywam się {excuse.name} i
                            niestety spóźniłem/am się ponieważ {excuse.excuseReason},
                            poziom wiarygodności tej wymówki to {excuse.levelOfCredibility},
                            zdarzenie miało miejsce {excuse.dateOfEvent?.toLocaleString()},
                            kreatywność {excuse.creativityLevel},
                            <br/>
                            dodatkowe szczegóły: {excuse.extraDetails},
                            <br/>
                            wymówka oznaczona jest jako {
                            excuse.excuseIsImportant ? "pilna" : "nie pilna"
                        }
                        </p>
                    ))
                }
            </div>
        </>
    )
}

export default GeneratedExcuses;