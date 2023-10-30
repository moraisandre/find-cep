import './StreetNameSign.css'

function StreetNameSign() {
    return (
        <div className="street-name-sign">
            <div className="logradouro">Logradouro</div>
            <div className="bairro">bairro</div>
            <div className="sign-details">
                <div className="bottom-text-detail">localidade - uf</div>
                <div className="bottom-text-detail">00000-000</div>    
            </div>
        </div>
    );
}

export default StreetNameSign