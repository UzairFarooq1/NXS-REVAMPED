import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo_main.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Solutions",
    href: "#",
    children: [
      { label: "Radiology", href: "", isHeader: true },
      { label: "Radiology Equipment", href: "/solutions/radiology" },
      { label: "Radiology Consumables", href: "/solutions/consumables" },
      { label: "Contrast Media", href: "/solutions/contrast-media" },
      { label: "Sony Printers", href: "/solutions/sony-printers" },
      { label: "", href: "", isDivider: true },
      { label: "Endoscopy & MAS", href: "/solutions/endoscopy" },
      { label: "Operating Theatre", href: "/solutions/operating-theatre" },
      { label: "ICU Monitoring", href: "/solutions/icu" },
      { label: "Neurology", href: "/solutions/neurology" },
      { label: "Cardiology", href: "/solutions/cardiology" },
      { label: "Renal Care", href: "/solutions/renal-care" },
      { label: "Operating Microscopy", href: "/solutions/microscopy" },
      { label: "Maternal & Infant Care", href: "/solutions/maternal-infant-care" },
    ],
  },
  { label: "Partners", href: "/partners" },
  { label: "CSR", href: "/csr" },
  { label: "News & Events", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+254733512802" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Phone className="h-3.5 w-3.5" />
              +254 (0) 733 512 802
            </a>
            <a href="mailto:info@nxsltd.com" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Mail className="h-3.5 w-3.5" />
              info@nxsltd.com
            </a>
          </div>
          <span className="text-primary-foreground/70">Part of The Vanguard Group</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b shadow-sm">
        <div className="container flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Nairobi X-Ray Supplies Ltd" className="h-10 lg:h-12 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <span
                    className={`px-3 py-2 text-sm font-medium font-heading cursor-default transition-colors ${
                      isActive("/solutions") ? "text-primary" : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium font-heading transition-colors ${
                      isActive(item.href) ? "text-primary" : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
                {item.children && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-card border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.children.map((child, idx) =>
                        (child as any).isHeader ? (
                          <span key={idx} className="block px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider text-muted-foreground">
                            {child.label}
                          </span>
                        ) : (child as any).isDivider ? (
                          <div key={idx} className="my-1 border-t" />
                        ) : (
                          <Link
                            key={child.label}
                            to={child.href}
                            className={`block px-4 py-2.5 text-sm transition-colors ${
                              location.pathname === child.href
                                ? "text-primary bg-accent"
                                : "text-foreground/70 hover:text-primary hover:bg-accent"
                            }`}
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="lg:hidden border-t bg-background">
            <div className="container py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <button
                      onClick={() => setSolutionsOpen(!solutionsOpen)}
                      className="block w-full text-left px-3 py-2.5 text-sm font-medium font-heading text-foreground/80 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2.5 text-sm font-medium font-heading transition-colors ${
                        isActive(item.href) ? "text-primary" : "text-foreground/80 hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.children && solutionsOpen && (
                    <div className="pl-6 space-y-1">
                      {item.children.map((child, idx) =>
                        (child as any).isHeader ? (
                          <span key={idx} className="block px-3 py-2 text-xs font-heading font-bold uppercase tracking-wider text-muted-foreground">
                            {child.label}
                          </span>
                        ) : (child as any).isDivider ? (
                          <div key={idx} className="my-1 border-t" />
                        ) : (
                          <Link
                            key={child.label}
                            to={child.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 text-sm transition-colors ${
                              location.pathname === child.href
                                ? "text-primary"
                                : "text-foreground/60 hover:text-primary"
                            }`}
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
