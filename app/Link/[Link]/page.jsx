import React from "react";
import DragDrop from "@/app/components/DragDrop";

function page({ params }) {
  console.log(params.Link);
  return (
    <div>
      Links dynamic page {decodeURI(params.Link)}
      <DragDrop />
    </div>
  );
}

export default page;
