import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './hero.css'
import hero_json from '../jsons/hero-links.js'

const eleStyle = {
    color: "green",
    textDecoration: "none",
    fontSize: "20px"
}
function Hero() {
    const main_data_1 = hero_json
    return (
        <>
            <Container>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro maxime magnam labore! Ab ipsum optio consequuntur minus. Dolorum hic officia, dolores cum tenetur veritatis nesciunt neque fuga corrupti dolor accusamus, assumenda voluptates repellat maiores? Aliquid, vel consequuntur nulla cumque consectetur numquam porro ducimus? Vero qui earum soluta tenetur reiciendis eius.
                </div>
                

                <ul className="material">
                    {
                        main_data_1.map((val) => {
                            return (
                                <li className='Element'>{val}</li>
                            )
                        })
                    }
                </ul>
            </Container>
        </>
    )
}
export default Hero;