"use client";

import Image from "next/image";
import React from "react";
import AFLogo from "../../../assets/af-transparent.png";
import useNavbar from "./useNavbar";
import Button from "../Button/Button";

const Navbar = () => {
  const { shortcuts, isLoggedIn, navigateToLogin, user, loading, logout } =
    useNavbar();

  return (
    <nav className="flex flex-row w-full bg-french-red px-4 py-2 gap-8 justify-between items-center">
      <div className="flex flex-row items-center gap-4">
        <div className="text-french-white">
          <Image
            src={AFLogo}
            alt={"logo-alianca-francesa"}
            height={64}
            width={64}
          />
        </div>
        <ul className="flex flex-row gap-6">
          {shortcuts.map((shortcut) => (
            <li key={shortcut.id}>
              <button
                type="button"
                className="text-french-white cursor-pointer hover:text-slate-300 hover:underline bg-transparent border-none p-0 m-0"
                onClick={shortcut.action}
              >
                {shortcut.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row items-center gap-4">
        {!loading && (
          <>
            {isLoggedIn || user ? (
              <Button label="Logout" onClick={logout} />
            ) : (
              <Button label="Login" onClick={navigateToLogin} />
            )}
            <Button
              label="Contato"
              onClick={() => console.log("Signing up...")}
            />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
