import {GetStaticProps} from 'next'
import {format, parseISO} from 'date-fns'
import prBR from 'date-fns/locale/pt-BR'

type Episode = {
  id: string;
  tittle: string;
  members: string;
  published_at: string;
}

type HomeProps = {
  episodes: Episode[];
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
    )
}

export async function getStaticProps(){
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 *8,
  }
}
