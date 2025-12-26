import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Events', path: '/events' },
    { label: 'Community', path: '/community' },
    { label: 'Contact', path: '/contact' }
  ];

  const focusAreas = [
    'Graphic Design',
    'UI/UX Design',
    'Web Development',
    'App Development',
    'Emerging Tech',
    'AI & IoT'
  ];

  return (
    <footer style={{ backgroundColor: '#0073E6' }} className="text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/1.png" alt="CodeWithTechno" className="h-8 w-auto" />
              <span className="text-xl font-bold">CodeWithTechno</span>
            </div>
            <p className="opacity-90 text-sm leading-relaxed">
              A community empowering students through design and tech education, hands-on workshops, and industry connections.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="opacity-80 hover:opacity-100 transition-opacity text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Focus Areas</h3>
            <ul className="space-y-2">
              {focusAreas.map((area) => (
                <li key={area} className="opacity-80 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact & Socials</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 opacity-90 text-sm">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@codewithtechno.in" className="hover:opacity-100 transition-opacity">
                  contact@codewithtechno.in
                </a>
              </div>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://www.instagram.com/codewithtechno.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/codewithtechno/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-90">
              © {currentYear} CodeWithTechno. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                Privacy Policy
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                Terms of Service
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
