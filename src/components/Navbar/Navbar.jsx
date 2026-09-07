import CardNav from './CardNav.jsx'
import logo from './logo.svg';

const Navbar = () => {
  const items = [
    {
      label: "About",
      bgColor: "#d5bdaf",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company", href: "#company" },
        { label: "Careers", ariaLabel: "About Careers", href: "#careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#e3d5ca",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects", href: "#featured" },
        { label: "Case Studies", ariaLabel: "Project Case Studies", href: "#case-studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#d6ccc2", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "#email" },
        { label: "Twitter", ariaLabel: "Twitter", href: "#twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "#linkedin" }
      ]
    }
  ];

  return (
    <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default Navbar;