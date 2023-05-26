const ColorButton = ({text, func}) =>{
    return(
        <button onClick={func}>{text}</button>
    );
};
export default ColorButton;