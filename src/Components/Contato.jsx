import React from "react"
import Head from "./Head"

export default function Contato(){
    return(
        <div className="containerContatoGeneral animeLeft">
            <Head title="Contato" description="Contato"></Head>
            <div className="containerContatoPai">
                <div className="containerImgContato">
                    <img src="/smartphone-2.jpg"></img>
                </div>
                <div className="containerInformaçõesContato">
                    <h3>Entre em contato</h3>
                    <p>andre@gmail.com</p>
                    <p>99999-9999</p>
                    <p>Rua Ali Perto, 999</p>
                </div>
            </div>
        </div>
    )
}