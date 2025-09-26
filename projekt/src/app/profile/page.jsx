///////////////////////from my undervisning


import { cookies } from "next/headers";
import ProfileForm from "@/components/profile-user";

export const metadata = {
  title: "Profile "
}
 
export default async function ProfilePage() {
    const cookieStore = await cookies();

    console.log("cookies", cookieStore.getAll());

    const user = cookieStore.get("Id_user");
    const token = cookieStore.get("Id_token");


    console.log("userid", user);
   console.log("token", token);
 
    if(!user || !token) {
        return(
            <div>
                <h2>you must log in first</h2>
                <p> no id or token found in cookies</p>
            </div>
        )
    }
 
    const response = await fetch(`http://localhost:4000/api/v1/users/${user.value}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token.value}`,
        },
    });
    if(!response.ok){
       return(<div>
        <h2> Error fetching profile</h2>
        <p>status:{response.status}</p>
       </div>)
    }
 
   const profileData = await response.json();
 
    return (
        <>
             <h1>Profil</h1>
             <ProfileForm profileData={profileData} />
     
       </>
            );
 
   
        }
 
 
 
 
       
 
 
 