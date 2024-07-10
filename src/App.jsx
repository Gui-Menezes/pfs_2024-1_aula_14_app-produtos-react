import { Outlet } from "react-router-dom"
import Carrossel from "./components/Carrossel"
import FormProduto from "./components/FormProduto"
import ListCardProdutos from "./components/ListCardProdutos"
import Menu from "./components/Menu"

function App() {
  return (
    <>
		<Menu></Menu>
		<div className="w3-container w3-padding-16 w3-margin-top">
			<h1>Minha Petshop</h1>
		</div>
    		<Carrossel />
		<div className="w3-row w3-container w3-margin-top">
			{/* <ListCardProdutos></ListCardProdutos>	 */}
			{/* <FormProduto></FormProduto> */}
			<Outlet></Outlet>
		</div>
      <footer className="w3-container w3-margin-top w3-black ">
        <p className="w3-center">Realizado por Ries (imagens retiradas de petz.com.br)</p>
      </footer>
    </>
        
  )
}

export default App
