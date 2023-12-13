



const Donors = ({image, firstName, lastName, maidenName, age, email, phone, username, birthDate, bloodGroup}) =>{



    return(
        <>
        <Card>
<Card.Img variant="top" src={image[0]}/>
<Card.Body>
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