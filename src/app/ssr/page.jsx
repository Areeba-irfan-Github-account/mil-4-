async function getPosts(){
    let postData = await fetch("https://jsonplaceholder.typicode.com/posts")
    postData = await postData.json();
    return postData;
}

const Post = async() =>{
    let posts = await getPosts();
    return(
        <>
        <h1>SSR</h1>
        <div>
            {
                posts.map((post)=> <h4 key={post.id}>
                    Post Title {post.title}
                </h4>)
            }
        </div>
        </>
    )
}
export default Post