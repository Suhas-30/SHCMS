const Button = (props) => {
    return (
        <>
            <button type={props.type || "button"} onClick={props.onClick}>
                Add {props.name}
            </button>
        </>
    );
}

export default Button;