import Card from 'react-bootstrap/Card'

const ItemDetail = ({Items}) => {

  return (
    <>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {Items.pictureUrl}/>
                <Card.Body>
                <Card.Title>{Items.title}</Card.Title>
                <Card.Text> PRECIO ${Items.price}</Card.Text>
                <Card.Text> {Items.description}</Card.Text>
                 </Card.Body>
                </Card>
    </>     
) }


{/*
   {Items.title}- ${Items.price} 
       <img src={Items.pictureUrl} alt={Items.title} 
        {Items.description} 
*/}       

export default ItemDetail
