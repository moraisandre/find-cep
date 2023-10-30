import './StreetNameSign.css'

const StreetNameSign = (props) => {

    const normalizeCep = props.address.cep
        ? `${props.address.cep.substring(0,5)}-${props.address.cep.substring(5,8)}`
        : '00000-000'

    return (
        <div className="street-name-sign">
            <div className="logradouro">{props.address.logradouro}</div>
            <div className="bairro">{props.address.bairro}</div>
            <div className="sign-details">
                <div className="bottom-text-detail">{props.address.cidade} - {props.address.uf}</div>
                <div className="bottom-text-detail">{normalizeCep}</div>
            </div>
        </div>
    );
}

export default StreetNameSign