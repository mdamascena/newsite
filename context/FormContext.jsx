import { createContext, useContext, useState } from "react";

const FormDataContext = createContext();

export const useFormData = () => useContext(FormDataContext);

export const FormDataProvider = ({ children }) => {

    const [formData, setFormData] = useState({})

    const atualizarForm = (newData) => {
        setFormData((prevData) => ({
            ...prevData,
            ...newData
        }))
    }

    return (
        <FormDataContext.Provider value={{ formData, atualizarForm }}>
            {children}
        </FormDataContext.Provider>
    )
};