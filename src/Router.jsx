import { Route, Routes } from "react-router-dom";
import App from "./App";
import FormEditProduto from "./components/FormEditProduto";
import FormProduto from "./components/FormProduto";
import Home from "./components/Home";
import ListCardProdutos from "./components/ListCardProdutos";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="/lista" element={<ListCardProdutos />} />
                <Route path="/cadastro" element={<FormProduto />} />
                <Route path="/edit/:id" element={<FormEditProduto />} />
            </Route>
        </Routes>
    )
}