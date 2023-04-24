"use client";
import React from "react";
import { Modal } from "antd";
import IconBtn from "../utils/Buttons/IconBtn";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Register from "./Register";
import Login from "./Login";
import useAuthModal from "@/app/hooks/useAuthModal";
import { signIn } from "next-auth/react";

const AuthModal = () => {
  const authModal = useAuthModal();

  return (
    <>
      <Modal footer={null} open={authModal.isOpen} onCancel={authModal.onClose}>
        <div className="flex flex-col gap-4 w-full">
          {authModal.isLogin ? <Login /> : <Register />}
          <div className="flex items-center justify-center gap-2">
            <span className="w-12 h-1 border-b border-dashed border-zinc-900"></span>
            OR
            <span className="w-12 h-1 border-b border-dashed border-zinc-900"></span>
          </div>
          <IconBtn
            outline
            label="Continue with Google"
            icon={FcGoogle}
            onClick={() => signIn("google")}
          />
          <IconBtn
            outline
            label="Continue with Github"
            icon={AiFillGithub}
            onClick={() => signIn("github")}
          />
          <div
            className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
          >
            {authModal.isLogin ? (
              <p>
                Create new account?
                <span
                  onClick={() => authModal.goRegister()}
                  className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
                >
                  {" "}
                  Sign up
                </span>
              </p>
            ) : (
              <p>
                Already have an account?
                <span
                  onClick={() => authModal.goLogin()}
                  className="
                text-neutral-800
                cursor-pointer 
                hover:underline
              "
                >
                  {" "}
                  Log in
                </span>
              </p>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AuthModal;
