 "use server";

import { cookies, Cookies } from "next/headers";
import { redirect } from "next/navigation";






 const API = process.env.API_BASE_URL;

   export async function createUser(formData) {
       
        const token = cookies().get("swaphub_token")?.value;
        if (!token) redirect("/login");

        const payload = {
            firstname: formData.get("firstname")?.toString().trim(),
            lastname: formData.get("lastname")?.toString().trim(),
            email: formData.get("email")?.toString().trim(),
            password: formData.get("password")?.toString().trim(),
        };

       
        const res = await fetch(`${API})/users`, {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: json.stringify(payload),
            cache: "no-store",
        }
        );

        const text = await res.text();
        if (!res.ok) {
            const msg = text || "could not create user";
            redirect(`/login`);
        }

        redirect("/login");
    }


