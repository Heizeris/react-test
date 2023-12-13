
import './firstPage.css'


const FirstPage = () => {


const handle = () =>{
  window.location.href = '/Regisration'
}




    return(
<>
<div >

<h1>Give something that<br/> means something</h1>
<h3>Give blood and give the gift of life. Come<br/>give blood Dec. 1-17 and get a $10 <br/> Amazon.com Gift Card* by email.</h3>
<form>
    
  <label>
    <input type="text" name="name" />
  </label>
  
  <a href="/Registration" onClick={handle} > 
MAKE AN APPOINTMENT NOW
  </a>
  
</form>
</div>
</>
    )
}

export default FirstPage