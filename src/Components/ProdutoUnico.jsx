import React from "react"
import Head from "./Head"
import useFetch from "../hooks/useFetch"
import { useParams } from "react-router-dom"


export default function ProdutoUnico(){
    const {id} = useParams()
    const {request,data,loading,error} = useFetch()

    React.useEffect(() => {
        async function fetchData(){
            const {response, json} = await request(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
        }
        fetchData()
    }, [id,request])
    if(error) return <div>Ocorreu o erro: {error}</div>
    if(loading) return <div className="loading"></div>
    if(data){
        return(
            <div className="containerProdutoUnicoGeneral animeLeft">
                <Head title={`Produto | ${data.nome}`} description={data.descricão}/>
                <div className="containerPai">
                    <div className="containerImagemProdutoUnico">
                        {
                            data.fotos.map((foto, index) => (
                                <img key={index} src={foto.src}/>
                            ))
                        }
                    </div>
                    <div className="containerInformacoes">
                        <div>
                            <h3>{data.nome}</h3>
                        </div>
                        <div className="containerProdutoUnicoPreco">
                            <p>R$ {data.preco}</p>
                        </div>
                        <div>
                            <p>{data.descricao}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}