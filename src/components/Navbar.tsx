import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // navLinks dikosongkan agar teks Page1, Page2, PageExample hilang dari atas
  const navLinks: any[] = [];

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-[200] pointer-events-none">
      <div className="pointer-events-auto">
        <div className="flex items-center justify-between gap-6 mt-1">
          <div className="hidden md:flex space-x-6">
            {/* Kosong agar navbar atas bersih */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;