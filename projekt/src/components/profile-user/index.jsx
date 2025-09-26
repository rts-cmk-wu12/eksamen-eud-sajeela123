///////////////////////from my undervisning



"use client";
 
import { useActionState, useEffect } from "react";
import profileAction from "./profile-action";
import{useRouter} from "next/navigation";
import { success } from "zod";
import "./profile.scss";
 
export default function ProfileForm({ profileData }) {
    //console.log(profileData);
   
    const [formState, formAction, pending] = useActionState(profileAction);
 
   const router = useRouter();

   useEffect(() => {
    if(formState?.success){
        router.push("/")
    }

   }, [formState, router]);
 
    return (
        <form action={formAction} className="profile-form">
            <div>
                <label>
                    <span>Firstname</span>
                    <input type="text" name="firstname" defaultValue={profileData.firstname}  />
                    <span>{formState?.properties?.firstname?.errors}</span>
                </label>
               
            </div>
            <div>
                <label>
                    <span>Lastname</span>
                    <input type="text" name="lastname" defaultValue={profileData.lastname} />
                     <span>{formState?.properties?.lastname?.errors}</span>
                </label>
               
            </div>
            <div>
                <label>
                    <span>Email</span>
                    <input type="text" name="email" defaultValue={profileData.email} />
                     <span>{formState?.properties?.email?.errors}</span>
                </label>
               
            </div>
            <div>
                <label>
                    <span>Password</span>
                    <input type="password" name="password" placeholder="....." />
                     <span>{formState?.properties?.password?.errors}</span>
                </label>
               
            </div>
           
            <button type="submit" disabled={pending}>
                {pending? "saving.." : "saved"}
                </button>
        </form>
    )
}