
export default async function getTreeData() {
const res = await fetch("http://localhost:3000/api/treeData", { next: { revalidate: 10 }})
return res.json();
}


{/* <button
        onClick={async () => {
          // dynamically load the axios dependency
          const axios = (await import("axios")).default;
          const res = await axios.get(api_url).then((res) => {
            setResponse(res);
          });

        }}
      ></button> */}
