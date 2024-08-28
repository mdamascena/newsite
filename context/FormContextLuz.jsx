import { createContext, useContext, useState } from "react";

const FormLuzContext = createContext();

export const useFormDataLuz = () => useContext(FormLuzContext);

export const FormProviderLuz = ({ children }) => {

    const [formData, setFormData] = useState({})

    const atualizarForm = (newData) => {
        setFormData((prevData) => ({
            ...prevData,
            ...newData
        }))
    }

    return (
        <FormLuzContext.Provider value={{ formData, atualizarForm }}>
            {children}
        </FormLuzContext.Provider>
    )
}