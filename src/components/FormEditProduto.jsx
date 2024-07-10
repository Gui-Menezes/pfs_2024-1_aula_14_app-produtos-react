import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import produtoService from "../service/ProdutoService";

export default function FormEditProduto() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);

    useEffect(() => {
        alert("Carregando Produto" +id);
    }, [])

    const editarProduto = (evento) => {
        evento.preventDefault();
        alert("Editando o produto " +id);
    }

    const voltar = () => {
        navigate(-1);
    }

    return (
        <form onSubmit={editarProduto}>
            <label htmlFor="nome">Nome:</label>
            <input type="text" name="nome" id="nome" value={nome} onChange={(evento) => setNome(evento.target.value)}/>
            <br />
            <label htmlFor="preco">Preço:</label>
            <input type="number" name="preco" id="preco" value={preco} onChange={(evento) => setPreco(evento.target.value)}/>
            <br />
            <input type="submit" value="SALVAR" />
            <input type="button" value="Voltar" onClick={voltar} />

        </form>
    )
}