import { Stack } from "react-bootstrap";
const Registration = () =>{




return(
    <>
    <div>
<header>
    <h1>Register a decision to donate</h1>
    <p>Use this form to record a decision to donate some or all your organs and<br/>tissue. Fields marked with * are mandatory</p>
</header>

<form gap={3}> 
    
<Stack gap={3}>
      <div className="p-2"><input  type="email" name="email" placeholder="example@gmail.com" /></div>
      <div className="p-2"><input  type="text" name="name" placeholder="FirstName*" required/></div>
      <div className="p-2"><input type="text" name="name" placeholder="lastname*" required /></div>
      <div className="p-2"><input type="text" name="name" placeholder="middleName" /></div>
      <div className="p-2"><input type="number" name="name" placeholder="age*" required/></div>
      <div className="p-2"><input type="text" name="name" placeholder="birthDate*" required /></div>
      <div className="p-2"><input type="text" name="name" placeholder="bloodGroup" required/></div>
      <div className="p-2"><input type="submit" name="name"></input></div>
   
    </Stack>


  

</form>



    </div>
    
</>
)
}


export default Registration;