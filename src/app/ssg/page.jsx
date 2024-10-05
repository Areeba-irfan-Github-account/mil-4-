import Link from "next/link";
import getData from "../../../services/getData"

const StaticSiteGeneration = async () =>{
    const data = getData();
    const users = await data;
    return(
        <>
        <h2>SSG</h2>
        <div>
            {
                users.map((user,i )=>(
                    <h3 key={i}>
                        <Link href={`/ssg/${user.id}`}>{user.id} {user.body} </Link>
                    </h3>
                ))
            }
        </div>
        </>
    )
}

export default StaticSiteGeneration