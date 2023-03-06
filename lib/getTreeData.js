
export default async function getTreeData() {
const res = await fetch("http://localhost:3000/api/tree")
return res.json();
}
