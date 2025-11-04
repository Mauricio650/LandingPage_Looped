import type { Services } from '../../Types'
import { CardService } from './CardService'

interface Props {
  services: Services[]
}

export function Items({ services }: Props) {
  return (
    <section className="flex flex-col gap-1 mt-10">
      {services.map(service => (
        <CardService
          about={service.about}
          title={service.title}
          description={service.description}
          duration={service.duration}
        ></CardService>
      ))}
    </section>
  )
}
