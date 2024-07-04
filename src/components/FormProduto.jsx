import { useState } from "react";
import produtoService from "../service/ProdutoService";

export default function FormProduto() {

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);

    const cadastrarProduto = (evento) => {
        evento.preventDefault();
        produtoService.inserirProduto({nome: nome, preco: preco})
            .then((produto) => {
                console.log("produto: ", produto);
            })
        setNome("");
        setPreco(0);
    }

    return (
        <form onSubmit={cadastrarProduto}>
            <label htmlFor="nome">Nome:</label>
            <input type="text" name="nome" id="nome" value={nome} onChange={(evento) => setNome(evento.target.value)}/>
            <br />
            <label htmlFor="preco">Preço:</label>
            <input type="number" name="preco" id="preco" value={preco} onChange={(evento) => setPreco(evento.target.value)}/>
            <br />
            <input type="submit" value="SALVAR" />

        </form>
    )
}