import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";
import "./layout.css";

export default function Layout() {
  return (
    <div className="page-container">
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
