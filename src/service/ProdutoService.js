import axios from 'axios';

// const BASE_URL = "http://localhost:3000/produtos"
const BASE_URL = "http://localhost:1337/api/produtos"
async function listaProdutos() {
    const response = await axios.get(BASE_URL);
    const listaProdutos = response.data.data;
    const listaProdutosRefinado = listaProdutos.map(prod => {
        return {
            id: prod.id,
            nome: prod.attributes.nome,
            preco: prod.attributes.preco
        }
    })
    return listaProdutosRefinado;
}

async function inserirProduto(produto) {
    const data = {
        data: produto
    }
    const response = await axios.post(BASE_URL, data);
    return response.data;
}

export default {
    listaProdutos,
    inserirProduto
};