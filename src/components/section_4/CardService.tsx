import type { Services } from '../../Types'

export function CardService({ title, duration, description, about }: Services) {
  return (
    <article className="py-8 px-5   bg-white shadow-md flex flex-col gap-5">
      <header className="flex justify-between items-start">
        <div className="poppins-regular flex flex-col items-start justify-center">
          <strong>{title}</strong>
          <span className="text-gray-500">{duration}</span>
        </div>
        <button className="bg-black poppins-bold hover:bg-[#B8693D]/50 hover:text-black text-sm text-white p-2 rounded cursor-pointer">
          Reservar
        </button>
      </header>
      <section className="poppins-regular">
        <p>
          {description}
          <span className="block">{about}</span>
        </p>
      </section>
    </article>
  )
}
