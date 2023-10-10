import { useState } from 'react'
import Button from '../Button'
import DropDownList from '../DropDownList'
import TextField from '../TextFields'
import './Formulario.css'

const Formulario = (props) => {

    const [empresa, setEmpresa] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [logo, setLogo] = useState('')
    const [tipoAtivo, setTipoAtivo] = useState('')

    const save = (event) => {
        event.preventDefault()
        props.dadosCadastro({
            empresa,
            cnpj,
            tipoAtivo,
            logo
        })
        setEmpresa('')
        setCnpj('')
        setLogo('')
        setTipoAtivo('')
    }
    
    return (
        <section className="formulario">
            <form onSubmit={save}>
                <h2>Preencha as informações para incluir um ativo </h2>
                <TextField label="Empresa" obrigatorio={true} placeholder="Digite o nome" valor={empresa} alterValue={valor => setEmpresa(valor)}/>
                <TextField label="CNPJ" placeholder="Digite o CNPJ" obrigatorio={true} valor={cnpj} alterValue={valor => setCnpj(valor)}/>
                <TextField label="Logo" placeholder="Informe o link da logo do ativo" obrigatorio={true} valor={logo} alterValue={valor => setLogo(valor)}/>
                <DropDownList label="Tipo de Ativo" placeholder="Escolha o ativo" itens={props.ativos} obrigatorio={true} valor={tipoAtivo} alterValue={valor => setTipoAtivo(valor)}></DropDownList>
                <Button>
                    Incluir Ativo
                </Button>
            </form>
        </section>
    )
}

export default Formulario