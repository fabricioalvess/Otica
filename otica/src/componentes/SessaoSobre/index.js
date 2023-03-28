import './SessaoSobre.css'
import React from 'react';

const SessaoSobre=()=>{
    return(
        <div className='sessao-sobre'>
            <div className='sessao-sobre-agrupada'>
                <h2>QUEM SOMOS NOS?</h2>
                <p>
                    Fundada em 2021, em Nova Iguaçu - Rio de Janeiro, a Ótica vida iniciou com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.
                </p>

                <div className='grupo-imagem-texto'>
                    <div className='box-img'>
                        <img src="assets/loja.png"alt="imagem"/>
                    </div>
                    <div className='box-texto'>
                       <h3>
                        NOSSAS FILIAIS
                       </h3>
                       <p>
                        Hoje temos mais de 20 filiais pelo Brasil e na América
                       </p>
                    </div>
                    
                    <div className='box-texto'>
                        <h3>
                            ATENDIMENTO FLEXIVEL
                        </h3>
                        
                        <p>
                            Nossa equipe possui treinamento para te atender
                        </p>
                    </div>
                    <div className='box-img'>
                        <img src="assets/atendimento.png" alt="imagem"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SessaoSobre;