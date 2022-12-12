import React, { useState } from "react";
import "./CollapsibleSection.scss";

const CollapsibleSection = ({ children }) => {
  const [open, setOpen] = useState(true);

  // TODO look at css animations here
  return (
    <div>
      <div className={open ? "content" : "hidden"} hidden={!open}>
        {children}
      </div>
      <button className="collapseButton" onClick={() => setOpen(!open)}>
        {open ? "^" : "v"}
      </button>
    </div>
  );
};

export default CollapsibleSection;
