import './DropDownList.css'

const DropDownList = (props) => {
    
    return (
        <div className='drop-down-list'>
            <label>{props.label}</label>
            <select onChange={event => props.alterValue(event.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=''></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDownList