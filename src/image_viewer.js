import './styles/image_viewer.css';
// import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
// import verysmall from '../assets/very-small.jpg';

export default () => {
  const image = document.createElement('img');
  image.src = small;

  document.body.appendChild(image);
}
