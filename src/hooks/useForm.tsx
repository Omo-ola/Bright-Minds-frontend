import { useState } from "react";
import { ChangeHandler, FormFields } from "../types/props";

const useForm = (initialForm: FormFields) => {
  const [formData, setFormData] = useState<FormFields>(initialForm);

  const handleChange: ChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return { formData, handleChange, setFormData };
};

export default useForm;
