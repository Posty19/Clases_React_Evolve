import Input from "../Imput.jsx/Input";

const Form = ({formInputs}) =>{
    //console.log(formInputs);

    return (
        <form action="">
            {
                formInputs.map (inputData => {
                  return  <Input key={inputData.name} data={inputData} />
                })
            }
        </form>
    );
}

export default Form;