import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface TInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError | undefined;
  label: string;
}

