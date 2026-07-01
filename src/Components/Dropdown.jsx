import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

const Dropdown = ({ open, anchorRef, children }) => {
  if (!open) return null;

  return createPortal(
    <div className="fixed z-[9999]">{children}</div>,
    document.body,
  );
};

export default Dropdown;
