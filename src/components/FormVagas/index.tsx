import { FormEvent, useState } from 'react'
import * as S from './styles' 

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <S.Form onSubmit={aoEnviarForm}>
      <S.Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <S.BotaoPesquisar type="submit">Pesquisar</S.BotaoPesquisar>
    </S.Form>
  )
}

export default FormVagas


  // return (
  //   <form className={styles.form} onSubmit={aoEnviarForm}>
  //     <input
  //       className={styles.campo}
  //       placeholder="Front-end, fullstack, node, design"
  //       onChange={(e) => setTermo(e.target.value)}
  //       type="search"
  //     />
  //     <button className={styles.btnPesquisar} type="submit">
  //       Pesquisar
  //     </button>
  //   </form>
  // )


