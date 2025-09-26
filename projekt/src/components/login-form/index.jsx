///////////////////////from my undervisning

"use client";


 import { useActionState, useEffect } from "react";
import loginAction from "./login-action";
import { redirect } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "./login.scss";


 
export default function LoginForm() {
    const [formState, formAction, pending] = useActionState(loginAction);
    useEffect(function () {
		pending ? toast.loading("Logger ind...", { toastId: "loader" }) : toast.dismiss();

		if (formState?.success) {
			toast.update("loader", {
				toastId: "loader",
				render: "Du er nu logget ind!",
				type: "success",
				isLoading: false,
				closeOnClick: false,
				hideProgressBar: true,
				position: "top-right"
			});
			setTimeout(function () {
				redirect("/profile");
			}, 2000);
		}
	}, [formState, pending]);

 
    return (
        <form action={formAction} className="login-form">
           
                <label>
                    <span>Email</span>
                    <input type="email" name="email" defaultValue={formState?.data?.email} />
                    <span className="error">{formState?.properties?.email?.errors}</span>
                </label>
            
          
                <label>
                    <span>Adgangskode</span>
                    <input type="password" name="password" defaultValue={formState?.data?.password} />
                    <span className="error">{formState?.properties?.password?.errors}</span>
                </label>
            
            <div className="form-errors">{formState?.errors}</div>
            <button type="submit">Log ind</button>
           <p className="forget-password">Forgot password?</p> 
            <ToastContainer />
        </form>
    );
}
 