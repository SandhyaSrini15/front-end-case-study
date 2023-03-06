"use client";

import React, { useState } from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { getChildDOMNode } from "@/lib/util";

function Navbar({ data }) {
  const [state, setState] = useState(data);
  const [expand, setExpand] = useState(false);
  const [count, setCount] = useState(0);

  function handleClick(e) {
    setExpand(!expand);
    getChildDOMNode(e, expand);
    
  }

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>
        <nav className="bg-white border-gray-400 rounded justify-end">
          <ul className="flex flex-col justify-end md:flex-row md:space-x-8">
            {state.map((element) => {
              return (
                <div key={element.id}>
                  <Link
                    href="#"
                    className="block py-2 pl-3 pr-4 rounded md:bg-transparent text-blue-700"
                    onClick={handleClick}
                  >
                    {element.label}{" "}
                  </Link>
                  {element.children.length > 0 && (
                    <Dropdown
                      dropdownList={element.children}
                      parentName={element.label}
                      onClickFn={handleClick}
                      setCount={increaseCount}
                    />
                  )}
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
