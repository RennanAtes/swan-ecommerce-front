import { useState } from 'react';

export default function SidebarMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative inline">
      <button onClick={toggleMenu}>
        {isMenuOpen ? 'Fechar Menu' : 'Abrir Menu'}
      </button>
      <div
        className={`fixed left-0 top-0 h-screen w-64 bg-white shadow transition-transform ease-in-out duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Conteúdo do menu */}
        <ul>
          <li>Opção 1</li>
          <li>Opção 2</li>
          <li>Opção 3</li>
        </ul>
        <button onClick={closeMenu}>Fechar Menu</button>
      </div>
    </div>
  );
}
