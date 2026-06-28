"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Accordion({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        className="w-full flex items-center justify-between py-4 text-sm font-medium hover:text-primary transition-colors text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{label}</span>
        <ChevronDown
          size={16}
          className={`transition-transform shrink-0 text-muted-foreground ${
            open ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>
      {open && (
        <div className="pb-5 text-sm text-muted-foreground leading-loose">
          {children}
        </div>
      )}
    </div>
  );
}
