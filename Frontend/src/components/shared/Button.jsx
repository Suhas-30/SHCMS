import './Button.css';


const Button = (props) => {
    return (
        <>
            <button type={props.type || "button"} onClick={props.onClick} className="custom-button">
                {props.name}
            </button>
        </>
    );
}

export default Button;