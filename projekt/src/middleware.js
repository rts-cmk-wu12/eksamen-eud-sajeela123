 ///////////////////////from my undervisning

import { NextResponse } from "next/server"; 
 
export default  function middleware(request) {  
    const token = request.cookies.get("Id_token"); /* i find  here  little spell mistake, 
      there was (ld),  i replace it with (Id), 
     you can also check in my last push.*/
    const userId = request.cookies.get("Id_user");  

    const isAuthenticated = token?.value && userId?.value;
  console.log("in middleware")

    if(request.nextUrl.pathname.startsWith("/profile") &&!isAuthenticated) {
        return NextResponse.redirect(new URL("/login", request.url));
}
 
return NextResponse.next();
}
export const config = {
    matcher: ["/profile"],
}
 