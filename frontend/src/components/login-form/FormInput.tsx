import { useState } from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
  pattern?: string; // Aceptamos pattern como string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  name,
  label,
  value,
  errorMessage,
  pattern,
  handleChange,
  ...props
}) => {
  const [touched, setTouched] = useState(false);
  const [currentError, setCurrentError] = useState<string | undefined>(errorMessage);

 

  const handleBlur = () => {
    setTouched(true);
    validateInput(value as string);
  };

  const validateInput = (inputValue: string) => {
    if (pattern) {
      const regex = new RegExp(pattern);
      if (regex.test(inputValue)) {
        setCurrentError(undefined); // Sin error si el valor coincide con el pattern
      } else {
        setCurrentError(errorMessage); // Mostrar error si no coincide
      }
    }
  };

  return (
    <div className="flex flex-col mb-4 max-w-[450px] md:max-w-[350px] w-full">
      <label className="px-1" htmlFor={id}>
        {label}
      </label>
      <input
        className={`p-[15px] mt-3 rounded-md border-2 transition-all duration-200 ${
          currentError && touched
            ? "border-red-600"
            : "border-gray-500 focus:border-blue-500"
        }`}
        id={id}
        name={name}
        value={value}
        onChange={(e) => {
          handleChange(e);
          validateInput(e.target.value); // Validación en tiempo real
        }}
        onBlur={handleBlur}
        {...props}
      />
      {currentError && touched && (
        <span className="text-red-600 text-sm mt-1">{currentError}</span>
      )}
    </div>
  );
};

export default FormInput;