 ///////////////////////from my undervisning

import { NextResponse } from "next/server"; 
 
export default  function middleware(request) {  
    const token = request.cookies.get("Id_token"); 
    const userId = request.cookies.get("ld_user");  

    const isAuthenticated = token?.value && userId?.value;
  

    if(request.nextUrl.pathname.startsWith("/profile") &&!isAuthenticated) {
        return NextResponse.redirect(new URL("/login", request.url));
}
 
return NextResponse.next();
}
export const config = {
    matcher: ["/profile"],
}
 