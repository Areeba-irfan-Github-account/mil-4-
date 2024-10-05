const UserID = async(props) => {
    const data = getData();
    const users = await data;
    const userId = props.params.id;
    const userinfo = users[userId - 1]
    return (
        <>
        <Navbar/>
        <h1 className='bg-yellow-500 p-6 m-6 flex justify-center items-center font-bold text-3xl'>User Information</h1>
        <div className='flex flex-col justify-center items-center m-16 p-3 bg-gray-900 rounded-lg'>
        <h3 className='mb-4 text-xl'>Id: {userinfo.id}</h3>
        <h3 className='mb-4 text-xl'>Name: {userinfo.username}</h3>
        <h3 className='text-xl'>Email: {userinfo.email}</h3>
        </div>
        <Footer/>
        </>
    )
}

export default UserID;

export const generateStaticParams = async ()=>{
    const data = getData();
    const users = await data ;
    return users.map(user =>({
        id : user.id.toString()
    }))
}