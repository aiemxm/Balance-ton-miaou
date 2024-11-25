import Cat from '#models/cat'
import { Layout } from '#resources/Layout'

interface CatsProps {
  cats: Cat[]
}
export function Cats(props: CatsProps) {
  const { cats } = props
  return (
    <Layout>
      <div>
        {cats.length > 0 ? (
          <ul>
            {cats.map((cat) => (
              <li key={cat.id}>{cat.name}</li>
            ))}
          </ul>
        ) : (
          <p>Vous n'avez enregistré aucun chat pour le moment.</p>
        )}
      </div>
    </Layout>
  )
}
