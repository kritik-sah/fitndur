"use client";
import React, { useState } from "react";
import IconBtn from "../utils/Buttons/IconBtn";
import { toast } from "react-hot-toast";
import axios from "axios";
import useAuthModal from "@/app/hooks/useAuthModal";

const Register = () => {
  const authModal = useAuthModal();
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState(undefined);
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState(undefined);
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState(undefined);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMsg, setPasswordErrorMsg] = useState(undefined);

  const onSubmit = () => {
    setIsLoading(true);
    if (!nameError && !emailError && !passwordError) {
      let data = {
        name: name,
        email: email,
        password: password,
      };
      axios
        .post("/api/register", data)
        .then(() => {
          toast.success("Registered!");
          authModal.goLogin();
        })
        .catch((error) => {
          toast.error(error);
        })
        .finally(() => {
          setIsLoading(false);
          clear();
        });
    } else {
      nameError && toast.error("issue with name");
      emailError && toast.error("issue with email");
      passwordError && toast.error("issue with password");
    }
  };
  const clear = () => {
    setName(undefined);
    setEmail(undefined);
    setPassword(undefined);
    setNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setPasswordErrorMsg(false);
  };
  const onChangeName = (name) => {
    let test = new RegExp("^[A-Za-z]+((('|-|.)?([A-Za-z])+))?$");
    setName(name);
    if (test.test(name)) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  };
  const onChangeEmail = (input) => {
    let test = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    setEmail(input);
    if (test.test(input)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  const onChangePassword = (input) => {
    let test = new RegExp(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~`!@#$%^&*()_+={[}\]|\\:;"'<,>.?/₹-])(?!.*\s).{8,64}$/
    );
    setPassword(input);
    if (test.test(input)) {
      setPasswordError(false);
      setPasswordErrorMsg(checkPasswordValidity(input));
    } else {
      setPasswordError(true);
      setPasswordErrorMsg(checkPasswordValidity(input));
    }
  };
  const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return "Password must not contain Whitespaces.";
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return "Password must have at least one Uppercase Character.";
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return "Password must have at least one Lowercase Character.";
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return "Password must contain at least one Digit.";
    }

    const isContainsSymbol =
      /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if (!isContainsSymbol.test(value)) {
      return "Password must contain at least one Special Symbol.";
    }

    const isValidLength = /^.{8,}$/;
    if (!isValidLength.test(value)) {
      return "Password must be 8 Characters Long.";
    }

    return null;
  };
  return (
    <>
      <h3 className="text-xl text-theme-dark font-medium">
        Registe a new user
      </h3>

      <div className="border border-slate-600 rounded-md p-2">
        <label className="space-y-2">
          <p>name (required)</p>
          <input
            value={name}
            onChange={(e) => onChangeName(e.target.value)}
            type="text"
            placeholder="First name"
          />
          {nameError ? (
            <span className="text-red-400 text-xs">
              Please enter a proper name.
            </span>
          ) : null}
        </label>
      </div>

      <div className="border border-slate-600 rounded-md p-2">
        <label className="space-y-2">
          <p>email (required)</p>
          <input
            value={email}
            onChange={(e) => onChangeEmail(e.target.value)}
            type="text"
            placeholder="coolDude@email.com"
          />
          {emailError ? (
            <span className="text-red-400 text-xs">
              Please enter a proper email.
            </span>
          ) : null}
        </label>
      </div>

      <div className="border border-slate-600 rounded-md p-2">
        <label className="space-y-2">
          <p>Password (required)</p>
          <input
            value={password}
            onChange={(e) => onChangePassword(e.target.value)}
            type="password"
            placeholder="**********"
          />
          {passwordError || passwordErrorMsg ? (
            <span className="text-red-400 text-xs">{passwordErrorMsg}</span>
          ) : null}
        </label>
      </div>

      <IconBtn
        disabled={!name || !email || !password || isLoading}
        label="Signup"
        onClick={() => onSubmit()}
      />
    </>
  );
};

export default Register;
