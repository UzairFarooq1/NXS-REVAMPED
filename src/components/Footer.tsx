import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo_main.png";

const solutions = [
  { label: "Radiology / X-Ray", href: "/solutions/radiology" },
  { label: "Endoscopy", href: "/solutions/endoscopy" },
  { label: "Operating Theatre", href: "/solutions/operating-theatre" },
  { label: "ICU Monitoring", href: "/solutions/icu" },
  { label: "Renal Care", href: "/solutions/renal-care" },
  { label: "Operating Microscopy", href: "/solutions/microscopy" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Partners", href: "/partners" },
  { label: "CSR", href: "/csr" },
  { label: "News & Events", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="NXS Logo" className="h-10 w-auto mb-4 brightness-200" />
            <p className="text-sm leading-relaxed text-background/60">
              Premier distributor of medical equipment in East Africa since 1980.
              A subsidiary of The Vanguard Group.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              {solutions.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="hover:text-background transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {company.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="hover:text-background transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Enterprise Road, Industrial Area, Nairobi, Kenya</span>
              </li>
              <li>
                <a href="tel:+254202606426" className="flex items-center gap-2.5 hover:text-background transition-colors">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  +254 20 260 6426
                </a>
              </li>
              <li>
                <a href="mailto:info@nxsltd.com" className="flex items-center gap-2.5 hover:text-background transition-colors">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  info@nxsltd.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-background/50">
          <span>&copy; {new Date().getFullYear()} Nairobi X-Ray Supplies Ltd. All rights reserved.</span>
          <span>Part of The Vanguard Group</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
