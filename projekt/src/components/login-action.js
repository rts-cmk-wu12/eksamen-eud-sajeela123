"use server";

import { cookies } from "next/headers";
import z  from "zod";

export default async function loginAction(prevState, formData) {
	const { email, password } = Object.fromEntries(formData);

	const schema = z.object({
	    email: z.string().min(1, { message: "Du skal udfylde et email" }),
		
		password: z.string().min(1, { message: "Du skal udfylde en adgangskode" })
	});

	const validated = schema.safeParse({
		email,
		password
	});

	if (!validated.success) return {
		...validated,
		...z.treeifyError(validated.error),
		data: {
			email,
			password
		}
	};
try{
    const response = await fetch("http://localhost:4000/auth/token", {
		method: "POST",
		headers: {
			"content-type": "application/json"
		},
		body: JSON.stringify({
			"email": "priya.patel@swaphub.test",
			"password": "password1234"
		})
	});

	if (!response.ok) return {
		success: false,
		errors: ["Forkert brugernavn eller adganskode"],
		data: {
			email,
			password
		}
	};

	const json = await response.json();

	const cookieStore = await cookies();

	cookieStore.set({
		name: "ld_token",
		value: json.token,
		path: "/",
		secure: true
	});



	return {
		success: true,
		data: {
			email,
			password
		}
	};
}catch(error) {
	console.error("login error.", error);

return{
	sucess: false,
	error:["intern server error"],
	data:{email,passord}
};
}
}