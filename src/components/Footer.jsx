import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'





const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt="Footer Logo"/>
                 </Link>
                 <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi esse, quibusdam molestias ullam voluptatibus numquam, dignissimos vel quae similique expedita quos hic officia! Fugit quas atque sit sint voluptas temporibus!
                 </p>
                 <div className="footer__socials">
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer"> <FaLinkedin/>
                    </a>
                    <a href="https://facebook.com/" target="_blank" rel="noreferrer"> <FaFacebookF/>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"> <AiOutlineTwitter/>
                    </a>
                    <a href="https://instagram.com/" target="_blank" rel="noreferrer"> <AiFillInstagram/>
                    </a>
                 </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Vehicles</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small> 2023 Marc3D Printing &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer