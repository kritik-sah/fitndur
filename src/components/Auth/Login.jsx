"use client";
import React, { useState } from "react";
import IconBtn from "../utils/Buttons/IconBtn";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import useAuthModal from "@/app/hooks/useAuthModal";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState(undefined);
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState(undefined);
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState(undefined);
  const [passwordError, setPasswordError] = useState(false);
  const authModal = useAuthModal();

  const onSubmit = () => {
    setIsLoading(true);
    if (!emailError && !passwordError) {
      let data = {
        email: email,
        password: password,
      };
      signIn("credentials", {
        ...data,
        redirect: false,
      }).then((callback) => {
        setIsLoading(false);

        if (callback?.ok) {
          toast.success("Logged in");
          router.refresh();
          authModal.onClose();
        }

        if (callback?.error) {
          toast.error(callback.error);
        }
      });
    } else {
      toast.error(error);
    }
  };

  const onChangeEmail = (name) => {
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
      <h3 className="text-xl text-theme-dark font-medium">Login</h3>

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
        disabled={!email || !password}
        label="Login"
        onClick={() => onSubmit()}
      />
    </>
  );
};

export default Login;
