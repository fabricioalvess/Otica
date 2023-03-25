import './SessaoProduto.css';
import React from  'react'

const SessaoProduto = ()=>{
    return(
        <div className="sessao-produto">
            <div className='sessao-produto-container'>
                <h2>NOSSOS PRODUTOS</h2>
                <p>
                    trabalhamos com óculos de grau, oculos de sol, lentes transition, nos modelos masculinos, femininos e infantil.

                </p>
                <p>
                    Todos os nossos preços são acessiveis e contam com a melhor qualidade do mercado
                </p>

                <div className="sessao-produtos-boxers">
                    <div className="sessao-produtos-box">
                        <h3>Óculos de grau</h3>
                        <img src="assets/oculos01.png"alt=""></img>
                        <p>R$ 500.00</p>
                    </div>
                    <div className="sessao-produtos-box">
                        <h3>Óculos transition</h3>
                        <img src="assets/oculos02.png"alt=""></img>
                        <p>R$ 750.00</p>
                    </div>
                    <div className="sessao-produtos-box">
                        <h3>Óculos de sol</h3>
                        <img src="assets/oculos03.png"alt=""></img>
                        <p>R$ 700.00</p>
                    </div>
                    <div className="sessao-produtos-box">
                        <h3>Óculos infantil</h3>
                        <img src="assets/oculos04.png"alt=""></img>
                        <p>R$ 500.00</p>
                    </div>
                </div>
                <p>
                    Todos os nossos produtos incluem:
                </p>
                <ul>
                    <li>Garantia de um ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </div>
    )
};
export default SessaoProduto;