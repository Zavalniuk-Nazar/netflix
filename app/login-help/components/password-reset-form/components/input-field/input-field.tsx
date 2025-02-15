import { ResetMethod } from "../../types";
import { FormInput } from "@/common/components/form-input";
import { PhoneInput } from "@/common/components/phone-input";

interface InputFieldProps {
  inputType: ResetMethod;
}

export function InputField(props: InputFieldProps) {
  const { inputType } = props;

  if (inputType === "sms") {
    return <PhoneInput />;
  }

  return (
    <FormInput
      label="Enter your email address"
      id="forgot-password-input"
      type="email"
      size="normal"
      autoComplete="email"
    />
  );
}
