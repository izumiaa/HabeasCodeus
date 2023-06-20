'use client';

import {signOut} from "next-auth/react";

const HomePage = () => {
    return (
        <>
            <div>
                this is the home page
            </div>
            <button onClick={()=>signOut()}>
                logout
            </button>
        </>
        
    )
}

export default HomePage;