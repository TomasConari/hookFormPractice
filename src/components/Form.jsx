export const Form = ({compStyle, data, func, dataText}) => {
    return (
        <div>
          <label>{dataText}</label>
          <br />
          <input style={compStyle} value={data} onChange={func}/>
        </div>
    );
};