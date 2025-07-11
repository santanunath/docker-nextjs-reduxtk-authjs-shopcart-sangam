"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { loginAction, logoutAction } from "@/actions";

// page header (component)
// -----------------------
function Header({ getSession }) 
{
  
  console.log(getSession, "getSession in header");

  
  // after clicking form 'submit' button
  // this function is executed 
  // see below..the Login/Logout submit button 
  // -----------------
  async function handleOauthSignOut() 
  {
    await logoutAction(); //calls server action defined in /src/actions/
  }


  // after clicking form 'submit' button
  // this function is executed 
  // see below..the Login/Logout submit button 
  // -----------------
  async function handleOauthSignIn() 
  {
    await loginAction(); //calls server action defined in /src/actions/
  }

  return (
    <header className="flex shadow-md py-4 px-4 bg-white min-h-[70px] tracking-wide relative z-50">
      
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <Link href={"/"}>Shopping Cart</Link>
      </div>
    
      <ul className="flex gap-6 items-center justify-center mr-10">
        <li className="text-lg font-semibold">
          <Link href={"/"}>Products</Link>
        </li>
    
        <li className="text-lg font-semibold">
          <Link href={"/cart"}>Cart</Link>
        </li>
      </ul>
    
      <div className="flex space-x-3">
    
        <form
          action={getSession?.user ? handleOauthSignOut : handleOauthSignIn}
        >
          <Button type="submit">{getSession?.user ? "Logout" : "Login"}</Button>
        </form>
          
      </div>
          
    </header>
  );

} //Header()

export default Header;
