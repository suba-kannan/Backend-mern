const withAlert =(WrapperAlert)=>(props)=>{

    const showAlert =()=>{
        alert("Button clicked")
    }

    const textNew = "This is button"

    return <WrapperAlert {...props} show={showAlert} text={textNew} />;


}

export default withAlert;