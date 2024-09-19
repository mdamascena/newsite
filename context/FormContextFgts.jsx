import { createContext, useContext, useState } from "react";

const FormFgtsContext = createContext();

export const useFormDataFgts = () => useContext(FormFgtsContext);

export const FormProviderFgts = ({ children }) => {

    const [formData, setFormData] = useState({})

    const atualizarForm = (newData) => {
        setFormData((prevData) => ({
            ...prevData,
            ...newData
        }))
    }

    return (
        <FormFgtsContext.Provider value={{ formData, atualizarForm }}>
            {children}
        </FormFgtsContext.Provider>
    )
}