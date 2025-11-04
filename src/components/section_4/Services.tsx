import type { Services } from '../../Types'
import { Items } from './Items'

export function Services() {
  const serviceMock: Services[] = [
    {
      title: 'Definición de rizos profesional',
      duration: '1 hora',
      description:
        'Lavado con productos hidratantes y definición adaptada a tu tipo de rizo.',
      about:
        'Ideal para quienes buscan rizos definidos, con movimiento y sin frizz.',
    },
    {
      title: 'Hidratación profunda y reparación capilar',
      duration: '45 minutos',
      description:
        'Tratamiento nutritivo con aceites naturales y vapor para restaurar el brillo.',
      about:
        'Recomendado cada 2 a 4 semanas para mantener la salud y elasticidad del cabello.',
    },
  ]
  return (
    <article className="z-20 w-2xl bg-white py-15 px-9 pb-35 rounded shadow-md">
      <header className="w-full poppins-regular flex gap-4 items-center justify-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 12C9.44769 12 9 12.4477 9 13C9 13.5523 9.44769 14 10 14H14C14.5522 14 15 13.5523 15 13C15 12.4477 14.5522 12 14 12H10Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 2C2.34314 2 1 3.34314 1 5V19C1 20.6569 2.34314 22 4 22H20C21.6569 22 23 20.6569 23 19V5C23 3.34314 21.6569 2 20 2H4ZM20 4H4C3.44769 4 3 4.44769 3 5V8H21V5C21 4.44769 20.5522 4 20 4ZM3 19V10H21V19C21 19.5523 20.5522 20 20 20H4C3.44769 20 3 19.5523 3 19Z"
            fill="currentColor"
          />
        </svg>
        <strong>Seleccionar cita</strong>
      </header>
      <Items services={serviceMock}></Items>
    </article>
  )
}
