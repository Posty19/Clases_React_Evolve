
const Input =({data})=>{

    return (
        <div>
            <label htmlFor={data.name}>{data.name}</label>
            <input type={data.type} id={data.name} placeholder={data.placeholder} name={data.name} /> 
        </div>
    );
}
export default Input;