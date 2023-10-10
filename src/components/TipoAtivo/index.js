import CardAtivo from '../CardAtivo'
import './TipoAtivo.css'

const TipoAtivo = (props) => {
    return (
        //props.dados.length > 0 ? 
        
        <section className='painel-tipo-ativo' style={{ backgroundColor : props.corPrimaria }}>
            <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>
            <div className='card'>
            {props.dados.map( dado => <CardAtivo key={dado.empresa} corFundo={props.corPrimaria} empresa={dado.empresa} cnpj={dado.cnpj} logo={dado.logo}/>)}
            </div>
        </section>
        //: ''
    )
}

export default TipoAtivo