import { useState } from "react";

export const Header = () => {
  const [navBar, setNavBar] = useState<boolean>();

  return (
    <header className="h-20  relative flex flex-col items-center justify-between">
      <div className="w-full h-full px-[8%] flex items-center justify-between">
        <figure className="">
          <h1> projeto </h1>
        </figure>
        <button onClick={() => setNavBar((active) => !active)} className="">
          X
        </button>
      </div>
      <nav
        className={`absolute top-20 w-full z-10 overflow-hidden transition-height duration-700 delay-50 h-0 ${
          navBar ? "h-40" : ""
        }`}
      >
        <ul className="  flex items-center justify-between">
          <li className="p-4 w-1/2 bg-gray-1 text-body font-600 text-gray-5 text-center hover:">
            Registro
          </li>
          <li className="p-4 w-1/2 bg-gray-5 text-body font-600 text-gray-1 text-center hover:">
            Login
          </li>
        </ul>
        <ul className="bg-gray-3 flex flex-col items-center">
          <li className="text-body-1 text-gray-1 hover:">opção 1</li>
          <li className="text-body-1 text-gray-1 hover:">opção 2</li>
        </ul>
      </nav>
    </header>
  );
};
