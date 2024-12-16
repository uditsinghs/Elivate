//fetch api

const fetchData =async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return data;
}
console.log(fetchData())