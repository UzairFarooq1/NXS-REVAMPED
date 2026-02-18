import { useState } from "react";
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
      { label: "Radiology / X-Ray", href: "/solutions/radiology" },
      { label: "Endoscopy", href: "/solutions/endoscopy" },
      { label: "Operating Theatre", href: "/solutions/operating-theatre" },
      { label: "ICU Monitoring", href: "/solutions/icu" },
      { label: "Neurology", href: "/solutions/neurology" },
      { label: "Renal Care", href: "/solutions/renal-care" },
      { label: "Operating Microscopy", href: "/solutions/microscopy" },
      { label: "Radiology Consumables", href: "/solutions/consumables" },
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

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+254202606426" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Phone className="h-3.5 w-3.5" />
              +254 20 260 6426
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
          <a href="/" className="flex-shrink-0">
            <img src={logo} alt="Nairobi X-Ray Supplies Ltd" className="h-10 lg:h-12 w-auto" />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium font-heading text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
                {item.children && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-card border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-accent transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
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
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.children) {
                        e.preventDefault();
                        setSolutionsOpen(!solutionsOpen);
                      }
                    }}
                    className="block px-3 py-2.5 text-sm font-medium font-heading text-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                  {item.children && solutionsOpen && (
                    <div className="pl-6 space-y-1">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-foreground/60 hover:text-primary transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
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
