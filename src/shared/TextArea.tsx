import React, { FormEvent, useState } from "react";
import iInputFields from "../models/iInputFields";

export default function TextArea({ options, state }: iInputFields) {
  const [getter, setter] = state;
  const { instructions, label, type } = options;
  const [fieldIsValid, setFieldIsValid] = useState(false);
  const [fieldTouched, setFieldTouched] = useState(false);
  function blurHandler() {
    setFieldTouched(true);
    if (getter.trim() === "") {
      setFieldIsValid(false);
    }
  }
  function inputChangeHandler(event: FormEvent) {
    let target = event.target as HTMLInputElement;
    setter(target.value);

    if (target.value.trim() !== "") {
      setFieldIsValid(true);
    }
  }

  const inputIsInvalid = !fieldIsValid && fieldTouched;
  const inputClass = inputIsInvalid ? "input-error" : "";
  const inputTouchClass = fieldTouched ? "input-touch" : "";
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <textarea
        required
        className={`input ${inputClass} ${inputTouchClass}`}
        placeholder={label}
        value={getter}
        onBlur={blurHandler}
        onChange={inputChangeHandler}
      />
      <p className="input-error">{inputIsInvalid && instructions}</p>
    </div>
  );
}
