// constants.tsx
export type NavLink = {
  id: number;
  url: string;
  Label: string;
};

const NavLinks: NavLink[] = [
  { id: 1, url: '#home', Label: "Home" },
  { id: 2, url: '#services', Label: "Services" },
  { id: 3, url: '#resume', Label: "Resume" },
  { id: 4, url: '#work', Label: "Work" },
  { id: 5, url: '#skills', Label: "Skills" },
  { id: 6, url: '#contact', Label: "Contact" },
];

export default NavLinks;
