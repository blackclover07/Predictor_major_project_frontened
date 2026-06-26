import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useUser, useAuth, SignIn } from "@clerk/react-router";
import { div, h1 } from "framer-motion/client";
import Loader from "../Components/Loader";

const Login = () => {
  // Local state tracking to capture operator inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isLoaded, isSignedIn } = useAuth();
  if (!isLoaded) {
    return <Loader /> ;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Initializing Auth Protocol for:", username);
    // Add your backend authentication connection logic here
  };

  // Stagger arrangement for sequential, high-tech field entry
  const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const techFadeVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn />
    </div>
  );
};

export default Login;
