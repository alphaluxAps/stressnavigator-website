import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-5 text-center">
        
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.instagram.com/stress.navigator/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-primary transition-colors">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/company/stressnavigator" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-primary transition-colors">
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8 text-gray-600">
          <Link to="/kontakt" className="hover:text-primary transition-colors">Kontakt</Link>
          <Link to="/cookie-og-privatlivspolitik" className="hover:text-primary transition-colors">Cookie- og privatlivspolitik</Link>
          <Link to="/handels-og-abonnementsbetingelser" className="hover:text-primary transition-colors">Handels- og abonnementsbetingelser</Link>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          {new Date().getFullYear()} Stress Navigator. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
