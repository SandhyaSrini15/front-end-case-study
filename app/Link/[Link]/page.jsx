import React from "react";

function page({ params }) {
    console.log(params.Link)
  return <div>Links dynamic page {decodeURI(params.Link)}</div>;
}

export default page;
