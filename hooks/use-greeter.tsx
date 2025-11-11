// hooks/useUpdateDialog.ts
"use client";

import { APP_VERSION } from "@/lib/constants";
import { useEffect, useState } from "react";
// import { APP_VERSION } from "@/app/constants/appConfig";

export function useGreeter() {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const lastSeenVersion = localStorage.getItem("appVersionSeen");
    if (lastSeenVersion !== APP_VERSION) {
      setShowDialog(true);
      localStorage.setItem("appVersionSeen", APP_VERSION);
    }
  }, []);

  return { showDialog, setShowDialog };
}
