import { forwardRef, useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { IInputProps } from "./@types";



export const InputPasswordBox = forwardRef(
  (
    { error, label, ...rest }: IInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div className={`inputBox inputBoxPassword`}>
        <label className="text-sm-normal" htmlFor="loginInputPassword">{label}</label>

        <input
          type={isVisible ? "text" : "password"}
          {...rest}
          ref={ref}
          className="input"
        />

        <button type="button" onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? <GoEyeClosed size={24} /> : <GoEye size={24} />}
        </button>
        
        <span>{error?.message}</span>
      </div>
    );
  }
);
