"use client";

import { useState } from "react";


import { createUser} from "./newuser-action"

export const metadata = {
    title: "Create user",
    description: "Creat a new user",

};


export default function NewUserPage() {

    const [error, setError] = useState("");

    async function handleSubmit(formDat) {
        const firstname = formDat.get("firstname")?.toString().trim();
        const lastname = formDat.get("lastname")?.toString().trim();
  const password = formDat.get("password")?.toString().trim();
  
        if(!firstname || !lastname){
            setError("please fill in both first and last name. ");
            return;
        }

        if (!password) {
            setError("you must type the password.");
            return;
        }
        
        setError("");
        await createUser(formDat);
        
    }
    return(
         <div>
            <form action={handleSubmit}>
                <h1>Create user</h1>
                {error && <p style={{ color: "black"}}>{error}</p>}
                <div>
                    <input
                        name="firstname"
                        placeholder="First name"
                    />

                    <input
                        name="lastname"
                        placeholder="Last name"
                    />

                </div>

                <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email"

                />



                <input
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Password"


                />

                <button> Creat </button>

        </form>



    </div >
    )
}