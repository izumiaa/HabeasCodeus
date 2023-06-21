'use client';

import { signOut } from "next-auth/react";
import {useRouter} from "next/navigation";

const User = () => {
    const router = useRouter();

    // const onClick=()=>{
    //     console.log("signing out")
    //     signOut()
    //     router.push('/')
    // }
    return (
        <>
        <div>
            this is the user page
        </div>
        <button onClick={()=>signOut()}>
            logout
        </button>
        </>
    )
}

export default User;