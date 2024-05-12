// Import the image
import myImage from '../img/img3.jpg';
import '../css/slideshow.css';
// Use the image in your component
function MyComponent() {
    return (
        <div>
            <img src={myImage} alt="My Img" className='img-fluid align-items-center myimg1'/>
        </div>
    );
}
export default MyComponent;