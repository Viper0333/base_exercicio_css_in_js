import Vaga from '../../components/Vaga'
import vagas from '../../data/vagas.json'
import { Secao, Titulo, Lista } from './styles'

const ListaVagas = () => (
  <Secao>
    <Titulo>Vagas abertas</Titulo>
    <Lista>
      {vagas.map((vaga) => (
        <Vaga
          key={vaga.id}
          titulo={vaga.titulo}
          localizacao={vaga.localizacao}
          nivel={vaga.nivel}
          modalidade={vaga.modalidade}
          salarioMin={vaga.salarioMin}
          salarioMax={vaga.salarioMax}
          requisitos={vaga.requisitos}
        />
      ))}
    </Lista>
  </Secao>
)

export default ListaVagas
