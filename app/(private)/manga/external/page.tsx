import { Title } from '@/components/Navigation/Title'
import MangaExternalForm from './forms'

export default function MangaExternalSource (): React.ReactElement {
  return (<main className="wrapper">
    <Title value="Mirroring Source" />
    <section className="flex flex-col lg:flex-row gap-4">
      <div className="flex-1">
        <MangaExternalForm />
      </div>
      <div className="w-full lg:w-7/12">Kanan</div>
    </section>
  </main>)
}
