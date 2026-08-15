"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

import { useCallbackDialog } from "@/components/viiv/CallbackContext";
import { useLeadModal } from "@/components/viiv/LeadModalContext";

/**
 * Opens a conversion dialog from a URL param:
 *   ?trigger=apply_form     -> opens the global apply/lead modal
 *   ?trigger=callback_form  -> opens the callback dialog
 * The trigger only fires once on initial mount.
 */
export function TriggerDialog() {
  const searchParams = useSearchParams();
  const { openLeadModal } = useLeadModal();
  const { openCallbackDialog } = useCallbackDialog();
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    const trigger = searchParams.get("trigger");
    if (trigger === "apply_form") {
      fired.current = true;
      openLeadModal();
    } else if (trigger === "callback_form") {
      fired.current = true;
      openCallbackDialog();
    }
  }, [searchParams, openLeadModal, openCallbackDialog]);

  return null;
}
