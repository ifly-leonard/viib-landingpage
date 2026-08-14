"use client";

import { type AnchorHTMLAttributes, type MouseEventHandler, type ReactNode } from "react";

import { useCallbackDialog } from "@/components/viiv/CallbackContext";

type PhoneLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> & {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

/**
 * Intercepts clicks on phone links and opens the Request Callback dialog
 * instead of navigating directly to the tel: URI.
 */
export function PhoneLink({ children, className, onClick, ...rest }: PhoneLinkProps) {
  const { openCallbackDialog } = useCallbackDialog();

  return (
    <a
      href="tel:+918925991788"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
        openCallbackDialog();
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
