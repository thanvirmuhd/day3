import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './card.css'

export default function App() {
  var districts= [
    {
        "id": 1,
        "name": "Thiruvananthapuram",
        "description": "Thiruvananthapuram is the capital city of Kerala, known for its rich cultural heritage and historic landmarks.",
        "image": "https://img.freepik.com/premium-photo/beautiful-padmanabhaswamy-temple-reflected-pond-sunset-thiruvananthapuram-city-kerala-south-india_211251-1056.jpg?w=996"
    },
    {
        "id": 2,
        "name": "Kochi",
        "description": "Kochi, also known as Cochin, is a major port city in Kerala famous for its stunning backwaters and vibrant culture.",
        "image": "https://img.freepik.com/free-photo/beautiful-sunrise-fishing-dip-nets-pakpra-phatthalung-thailand_335224-816.jpg?w=996&t=st=1684823255~exp=1684823855~hmac=1d92760338c0497e0dfe37633760c8685fc601257b47d2e9fca307a5e62dfb60"
    },
    {
        "id": 3,
        "name": "Kozhikode",
        "description": "Kozhikode, formerly known as Calicut, is renowned for its historical significance and serene beaches.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Calicut_Beach.jpg/350px-Calicut_Beach.jpg"
    },
    {
        "id":4,
        "name": "Thrissur",
        "description": "Thrissur is known as the cultural capital of Kerala, famous for its festivals, temples, and traditional art forms.",
        "image": "https://www.keralatourism.org/images/festivals/large/20170330115924_321_1.jpg"
    },
    {
        "id": 5,
        "name": "Kollam",
        "description": "Kollam, situated on the banks of Ashtamudi Lake, is known for its cashew industry and picturesque backwaters.",
        "image": "https://static.javatpoint.com/tourist-places/images/tourist-places-in-kollam1.png"
    },
    {
        "id": 6,
        "name": "Alappuzha",
        "description": "Alappuzha, also known as Alleppey, is famous for its backwaters, houseboats, and serene coastal landscapes.",
        "image": "https://www.keralatourism.org/images/destination/large/alappuzha20160801052013_60_1.jpg"
    },
    {
        "id": 7,
        "name": "Kottayam",
        "description": "Kottayam is known for its scenic beauty, rubber plantations, and religious sites like the Ettumanoor Mahadeva Temple.",
        "image": "https://curlytales.com/wp-content/uploads/2022/10/Illickal_Kallu_1152-1170x658.jpg"
    },
    {
        "id": 8,
        "name": "Palakkad",
        "description": "Palakkad, often called the Gateway of Kerala, is known for its lush green landscapes, historic monuments, and dams.",
        "image": "https://img.traveltriangle.com/blog/wp-content/uploads/2019/08/cover-Things-To-Do-In-Palakkad.jpg"
    },
    {
        "id": 9,
        "name": "Malappuram",
        "description": "Malappuram is a district in Kerala known for its rich cultural heritage, scenic landscapes, and religious sites.",
        "image": "https://img.theweek.in/content/dam/week/news/india/2019/Dec/AERIAL-VIEW-MALAPPURAM.jpg"
    },
    {
        "id": 10,
        "name": "Pathanamthitta",
        "description": "Pathanamthitta is famous for its religious sites, including the Sabarimala temple, and beautiful natural surroundings.",
        "image": "https://assets-news.housing.com/news/wp-content/uploads/2022/09/07010326/Pathanamthitta-FEATURE-compressed.jpg"
    },
    {
        "id": 11,
        "name": "Kannur",
        "description": "Kannur is renowned for its pristine beaches, ancient forts, Theyyam rituals, and handloom weaving industry.",
        "image": "https://www.keralatourism.org/images/destination/large/st_angelo_fort_kannur20131105171125_83_1.jpg"
    },
    {
        "id": 12,
        "name": "Idukki",
        "description": "Idukki is a mountainous region known for its stunning hill stations, wildlife sanctuaries, and tea plantations.",
        "image": "https://keralatourism.travel/images/destinations/headers/idukki-kerala-tourism-entry-fee-timings-holidays-reviews-header.jpg"
    },
    {
        "id": 13,
        "name": "Wayanad",
        "description": "Wayanad is a picturesque district known for its lush green forests, wildlife, waterfalls, and coffee plantations.",
        "image": "https://www.wayanad.com/files/slides/7110478409.jpg"
    },
    {
        "id": 14,
        "name": "Kasargod",
        "description": "Kasargod is known for its rich tradition of Theyyam, a vibrant and ancient ritualistic art form performed in temples.",
        "image": "https://www.weekendthrill.com/wp-content/uploads/2016/07/Kasargod-compressed.jpg"
    }
];
  return (
    <div class="black">
      <div style={{backgroundColor:'black'}}>
      <h1 style={{color:'white',textAlign:'center' ,textDecorationLine:'underline'}}><br></br>KERALA DISTRICT</h1>
      </div>
    <Container >
      
      <Row>
        {
          districts.map((item,index)=>{
            return(
              <Col sm={3} className='mt-5' key={index}>
                <Card style={{height:'500px',width:'300px',backgroundColor:'black',border:'2px solid white'}}>
                  <Card.Img  style={{height:'13rem' }}varient="top" src={item.image}/>
                  <Card.Body >
                    <Card.Title style={{color:'white'}}>{item.name}</Card.Title>
                    <Card.Text style={{height:'170px',color:'white'}}>{item.description}</Card.Text>
                    <Button className='ms-5' variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
              </Col>
            )
          })
        }
      </Row>
    </Container>
    </div>
  )
}
