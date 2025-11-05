"use client";
import { motion } from "motion/react";
export default function Loading() {
  // Stack uses React Suspense, which will render this page while user data is being fetched.
  // See: https://nextjs.org/docs/app/api-reference/file-conventions/loading
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        style={{
          width: "50px",
          height: "50px",
          border: "5px solid #ccc",
          borderTopColor: "#333",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}
