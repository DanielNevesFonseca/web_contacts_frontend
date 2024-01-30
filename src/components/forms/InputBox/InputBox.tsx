import React from "react";
import { forwardRef } from "react";
import { TInputProps } from "./@types";

export const InputBox = forwardRef(
  (
    { error, label, id, ...rest }: TInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={`inputBox`}>
        <label className="text-sm-normal" htmlFor={id}>{label}</label>
        <input {...rest} ref={ref} id={id} className="input" />
        <span>{error?.message}</span>
      </div>
    );
  }
);
