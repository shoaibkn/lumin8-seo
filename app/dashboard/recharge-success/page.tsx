"use client";

import { useTransition } from "react";

export default function HomePage() {
  const [isPending, startTransition] = useTransition();

  const handlePay = () => {
    startTransition(async () => {
      try {
        // const { checkoutUrl } = await initiatePhonePePayment(100); // ₹100
        // window.location.href = checkoutUrl; // Redirect to PhonePe checkout page
      } catch (err) {
        console.error(err);
        alert("Payment initiation failed");
      }
    });
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Pay with PhonePe</h1>
      <button
        onClick={handlePay}
        disabled={isPending}
        style={{
          background: "#5e2ced",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {isPending ? "Processing…" : "Pay ₹100"}
      </button>
    </main>
  );
}
