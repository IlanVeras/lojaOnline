import React from "react"
import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import Head from "./Head"


export default function(){
    const {request,data,loading,error} = useFetch()

    React.useEffect(() => {
        async function fetchData(){
            const {response,json} = await request("https://ranekapi.origamid.dev/json/api/produto")
        }
        fetchData()
    },[request])
    console.log(data)
    if(error) return <div>Ocoreu o erro: {error}</div>
    if(loading) return <div className="loading"></div>
    if(data){
        return(
            <div className="containerProdutoGeneral animeLeft">
                <Head title="Produtos" description="Produtos"></Head>
                {
                    data.map((produto) => (
                        <div key={produto.id} className="containerProduto">
                            <Link to={`/produto/${produto.id}`} className="customLink">
                                <div className="containerImagem">
                                    <img src={produto.fotos[0].src}></img>
                                </div>
                            <div className="containerTextProduto">
                                    <h3>{produto.nome}</h3>
                            </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        )
    }else{
        return null
    }
}