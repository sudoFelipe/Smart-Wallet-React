import './CardAtivo.css'

const CardAtivo = ({ empresa, cnpj, logo, corFundo }) => {
    return (
        <div className='card-ativo'>
            <div className='cabecalho' style={{ backgroundColor: corFundo }}>
                <img src={logo} alt={empresa}/>
            </div>
            <div className='rodape'>
                <h4>{empresa}</h4>
                <h5>{cnpj}</h5>
            </div>
        </div>
    )
}

export default CardAtivo