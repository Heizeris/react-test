import {Card} from "react-bootstrap"


export const Donors = ({image, firstName, lastName, maidenName, age, email, phone, username, birthDate, bloodGroup}) =>{



    return(
        <>
        <Card style={{ width: '18rem'}}>
<Card.Img variant="top" src={image[0]}/>
<Card.Body>
    <Card.Title>Donor Info</Card.Title>
<Card.firstname>{firstName}</Card.firstname>
<Card.lastName>{lastName}</Card.lastName>
<Card.middleName>{maidenName}</Card.middleName>
<Card.age>{age}</Card.age>
<Card.email>{email}</Card.email>
<Card.phone>{phone}</Card.phone>
<Card.username>{username}</Card.username>
<Card.birthDate>{birthDate}</Card.birthDate>
<Card.bloodGroup>{bloodGroup}</Card.bloodGroup>
</Card.Body>
        </Card>
        </>
    )
}

export default Donors