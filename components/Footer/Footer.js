import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className='footer footer-center p-10  '>
      <div>
        <div className='text-xl grid grid-flow-col gap-4'>
          <a
            className='text-secondary'
            target='_blank '
            href='https://github.com/BryonVerdone'
          >
            <FaGithub />
          </a>
          <a
            className='text-secondary'
            href='https://www.linkedin.com/in/bryon-verdone'
          >
            <FaLinkedin />
          </a>
          <a
            className='text-secondary'
            target='_blank'
            href='https://www.twitter.com/_thebryguy'
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
