"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import IconBtn from "../utils/Buttons/IconBtn";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const AuthModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        footer={null}
        title="Basic Modal"
        open={true}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex flex-col gap-4 w-full">
          <div className="border border-slate-600 rounded-md p-2">
            <label className="space-y-2">
              <p>name (required)</p>
              <input type="text" placeholder="Your name" />
            </label>
          </div>
          <div className="border border-slate-600 rounded-md p-2">
            <label className="space-y-2">
              <p>email (required)</p>
              <input type="text" placeholder="coolDude@email.com" />
            </label>
          </div>
          <div className="border border-slate-600 rounded-md p-2">
            <label className="space-y-2">
              <p>Password (required)</p>
              <input type="password" placeholder="**********" />
            </label>
          </div>
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
            <p>
              Already have an account?
              <span
                // onClick={onToggle}
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
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AuthModal;
