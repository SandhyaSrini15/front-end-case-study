
export default async function getTreeData() {
const res = await fetch("http://localhost:3000/api/treeData", { next: { revalidate: 10 }})
return res.json();
}
