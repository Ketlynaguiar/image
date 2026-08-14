import { PrimeiroComponente } from "../components/PrimeiroComponente";

export default function formularioPage() {
  return (
   <div>
     <main>
      <h1>Formulário</h1> 
      <PrimeiroComponente
      mensagem =  " Está é uma mensagem passada como propriedade do primeiroCompopnente" 
      mensagemBotao = "Você clicou botão"
      />
    </main>
   </div>
  )
} 