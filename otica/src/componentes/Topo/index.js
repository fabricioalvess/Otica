import './Topo.css'
import React from 'react'
const Topo = ()=>{
    return(
        <div className="topo">
            <div className='topo-imagem'>
                <img src="assets/logo.png"alt=""></img>
            </div>
            <div  className='topo-lista'>
                <ul>
                    <li><a href="#">PRODUTOS</a></li>
                    <li><a href="#">SOBRE</a></li>
                    <li><a href="#">CONTATO</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Topo