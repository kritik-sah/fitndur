"use client";
import React, { useState } from "react";
import IconBtn from "../utils/Buttons/IconBtn";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState(undefined);
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState(undefined);
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState(undefined);
  const [passwordError, setPasswordError] = useState(false);

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
          // registerModal.onClose();
          // loginModal.onOpen();
        })
        .catch((error) => {
          toast.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      toast.error(error);
    }
  };
  const onChangeName = (name) => {
    let test = new RegExp("^[A-Za-z]+((('|-|.)?([A-Za-z])+))?$");
    if (test.test(name)) {
      setNameError(false);
      setName(name);
    } else {
      setNameError(true);
    }
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
        </label>
      </div>

      <div className="border border-slate-600 rounded-md p-2">
        <label className="space-y-2">
          <p>email (required)</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="coolDude@email.com"
          />
        </label>
      </div>

      <div className="border border-slate-600 rounded-md p-2">
        <label className="space-y-2">
          <p>Password (required)</p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="**********"
          />
        </label>
      </div>

      <IconBtn
        disabled={!name || !email || !password}
        label="Signup"
        onClick={() => onSubmit()}
      />
    </>
  );
};

export default Register;
