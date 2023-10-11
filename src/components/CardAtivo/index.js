import './CardAtivo.css'

const CardAtivo = ({ empresa, cnpj, logo, corFundo, cotas, segmento }) => {
    return (
        <div className='card-ativo'>
            <div className='cabecalho' style={{ backgroundColor: corFundo }}>
                <img src={logo} alt={empresa}/>
            </div>
            <div className='rodape'>
                <h4>{empresa}</h4>
                <h5>CNPJ: {cnpj}</h5>
                <h3>Quantidade/Cotas: {cotas}</h3>
                <h3>Segmento: {segmento}</h3>
            </div>
        </div>
    )
}

export default CardAtivo