const getData = async () =>{
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    return result.json();

}
export default getData;