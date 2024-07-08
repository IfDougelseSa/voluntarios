import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import styled from 'styled-components';
import logoIcon from '../../assets/logo.png';
import voluntariosLogo from '../../assets/nome.png';

interface DropdownItem {
  title: string;
  href: string;
}

interface NavItem {
  id: string;
  title: string;
  items: DropdownItem[];
}

const StyledNavDropdown = styled(NavDropdown)`
  & .nav-link {
    color: #000 !important;
    font-size: 8px;
    padding: 20px;
    text-transform: uppercase;
    font-weight: 300;

    &:hover {
      outline: none;
      text-decoration: none;
      color: #dab074 !important;
    }
  }

  & .dropdown-item {
    &:hover {
      outline: none;
      text-decoration: none;
      color: #dab074;
    }
  }
`;

const StyledNavbarBrand = styled(Navbar.Brand)`
  display: flex;
  align-items: center;
  
  img {
    margin-right: 20px;
  }
`;

const StyledContainer = styled(Container)`
  padding-left: 8%;
  padding-right: 16%;
`;

const StyledNav = styled(Nav)`
  gap: 15px;
`;

const navItems: NavItem[] = [
  {
    id: 'sobre-dropdown',
    title: 'SOBRE',
    items: [
      { title: 'Submenu 1', href: '#action/3.1' },
      { title: 'Submenu 2', href: '#action/3.2' },
    ],
  },
  {
    id: 'voluntarios-dropdown',
    title: 'VOLUNTÁRIOS',
    items: [
      { title: 'Submenu 1', href: '#action/3.1' },
      { title: 'Submenu 2', href: '#action/3.2' },
    ],
  },
  {
    id: 'entidades-dropdown',
    title: 'ENTIDADES',
    items: [
      { title: 'Submenu 1', href: '#action/3.1' },
      { title: 'Submenu 2', href: '#action/3.2' },
    ],
  },
  {
    id: 'mais-dropdown',
    title: 'MAIS',
    items: [
      { title: 'Submenu 1', href: '#action/3.1' },
      { title: 'Submenu 2', href: '#action/3.2' },
    ],
  },
];

const NavigationBar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (dropdownId: string) => {
    setActiveDropdown(dropdownId);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <Navbar expand="lg">
      <StyledContainer>
        <StyledNavbarBrand href="#home">
          <img
            src={logoIcon}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Logo icon"
          />
          <img
            src={voluntariosLogo}
            height="23"
            className="d-inline-block align-top"
            alt="Voluntários logo"
          />
        </StyledNavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <StyledNav className="ms-auto">
            {navItems.map((item) => (
              <StyledNavDropdown
                key={item.id}
                title={item.title}
                id={item.id}
                show={activeDropdown === item.id}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                {item.items.map((subItem, index) => (
                  <NavDropdown.Item key={index} href={subItem.href}>
                    {subItem.title}
                  </NavDropdown.Item>
                ))}
              </StyledNavDropdown>
            ))}
          </StyledNav>
        </Navbar.Collapse>
      </StyledContainer>
    </Navbar>
  );
};

export default NavigationBar;