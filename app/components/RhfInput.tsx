import { FieldErrors, FieldValue, UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface RhfInputProps {
  placeholder?: string;
  costumeClass?: string;
  autoFocus?: boolean;
  name: string;
  type?: string;
  register: UseFormRegister<FieldValue<any>>;
  isValid?: boolean;
  errors?: FieldErrors<FieldValue<any>>;
}
export default function RhfInput({
  placeholder,
  costumeClass,
  autoFocus,
  name,
  type,
  register,
  errors,
}: RhfInputProps) {
  return (
    <>
      <input
        {...register(name)}
        placeholder={placeholder}
        className={costumeClass}
        autoFocus={autoFocus}
        name={name}
        type={type}
      />
      <span className="tw-text-red-500 tw-font-semibold tw-text-sm">
        <ErrorMessage name={name} errors={errors} />
      </span>
    </>
  );
}
