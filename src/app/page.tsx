"use client";
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hello = () => {
  return (
    <div className="w-full h-full relative bg-[#f5f1eb]">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="fixed left-0 w-full lg:left-1/2 lg:-translate-x-1/2 lg:top-5 z-[50]">
        <Header />
      </div>
      <div className="w-full h-full">
        <Hero />
      </div>
      <About />
    </div>
  );
};

export default Hello;
