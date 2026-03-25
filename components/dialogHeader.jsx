'use client'
import { Dialog } from '@headlessui/react';
import { useState } from 'react';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open menu</button>
      
      <Dialog 
        open={isOpen} 
        onClose={() => setIsOpen(false)}
        className="relative z-10 lg:hidden"
      >
        <div className="fixed inset-0 bg-[#4C4C4C]" aria-hidden="true" />
        
        <Dialog.Panel className="fixed inset-0 overflow-y-auto p-6 pt-36">
          qwe
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
export default MobileMenu;