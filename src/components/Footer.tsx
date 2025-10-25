import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-orbitron font-bold text-foreground mb-4">
              AUTO<span className="text-primary">CUSTOM</span>
            </div>
            <p className="text-muted-foreground font-inter">
              Professional automotive customization services in Huddersfield, West Yorkshire.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-orbitron font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-inter">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-orbitron font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 font-inter">
              <li className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Huddersfield, West Yorkshire</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Contact us for details</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span>info@autocustom.co.uk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground font-inter text-sm">
          <p>&copy; {new Date().getFullYear()} AutoCustom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
