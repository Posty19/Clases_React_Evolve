import Form from "../../components/Form/Form"

const Contact = ()=>{

    const formImputs = [
        {type:'text',placeholder:'Nombre',name:'nombre',},
        {type:'number',placeholder:'Edad',name:'edad'},
        {type:'email',placeholder:'Email',name:'email'}
    ]

    return (
        <div className="container">
            <h1>Contact</h1>
            <p>Contenido del Contact</p>
            <Form formInputs={formImputs}/>
        </div>
    )
}
export default Contact