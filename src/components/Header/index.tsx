export const Header = () => {
  return (
    <header className=" flex flex-col items-center justify-between">
      <figure className="">
        <img className="object-cover h-1/2" src="" alt="Logo" />
      </figure>
      <nav
        className="
      w-full"
      >
        <ul className="  flex items-center justify-between">
          <li className="p-4 w-1/2 bg-gray-1 text-body font-600 text-gray-5 text-center hover:">
            Registro
          </li>
          <li className="p-4 w-1/2 bg-gray-5 text-body font-600 text-gray-1 text-center hover:">
            Login
          </li>
        </ul>
      </nav>
      <nav className="w-full">
        <ul className="flex flex-col items-center">
          <li className="text-body-1 text-gray-3 hover:">opção 1</li>
          <li className="text-body-1 text-gray-3 hover:">opção 2</li>
        </ul>
      </nav>
    </header>
  );
};
