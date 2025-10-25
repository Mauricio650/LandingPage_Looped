export function Header() {
  return (
    <header className="relative z-10 w-full flex justify-between items-center font-semibold lg:px-20 xl:px-35 2xl:px-50 py-12 text-lg text-[#F9EBCC]">
      <nav>
        <ul className="flex justify-center items-center gap-10">
          <li className="cursor-pointer hover:text-[#fbf8f1]">Citas</li>
          <li className="cursor-pointer hover:text-[#fbf8f1]">Tienda</li>
        </ul>
      </nav>
      <img
        className="lg:w-[440px] cursor-pointer"
        src="/logo/Looped.webp"
        alt="Logo of looped. Looped is the name of hair salon"
      />

      <span className="cursor-pointer hover:text-[#fbf8f1]">
        {'Carrito (0)'}
      </span>
    </header>
  )
}
