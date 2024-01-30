import React from "react";
import { forwardRef } from "react";
import { TInputProps } from "./@types";

export const InputBox = forwardRef(
  (
    { error, label, ...rest }: TInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={``}>
        <label htmlFor="loginInputEmail">{label}</label>
        <input {...rest} ref={ref} className="input" />
        <span>{error?.message}</span>
      </div>
    );
  }
);
