import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='flex items-center py-6 mb-20 justify-end'>
        {/* <div className='flex items-center flex-shrink-0'>
            <img className='w-10 mx-2' src={logo.src} alt="logo" />
        </div> */}
        <div className='flex items-center justify-center gap-4 m-8 text-2xl text-white'>
            <a href="https://www.linkedin.com/in/jingyuejie-9752bb147/"><FaLinkedin/></a>
            <a href="https://github.com/yuejiejing"><FaGithub /></a>
            {/* <FaInstagram />
            <FaTwitter /> */}
        </div>
    </nav>
  )
}

export default Navbar