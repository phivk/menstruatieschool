import { useState } from 'preact/hooks';

export default function NavToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div class="md:hidden ml-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Menu sluiten' : 'Menu openen'}
        class="flex flex-col gap-[5px] p-2"
      >
        <span class="block w-5 h-[1.5px] bg-[var(--color-bordeaux)]"></span>
        <span class="block w-5 h-[1.5px] bg-[var(--color-bordeaux)]"></span>
        <span class="block w-5 h-[1.5px] bg-[var(--color-bordeaux)]"></span>
      </button>

      {isOpen && (
        <nav class="absolute top-[60px] left-0 right-0 bg-white border-b border-[var(--color-border-subtle)] flex flex-col p-4 z-50 shadow-[var(--shadow-2)]">
          <a href="/#workshops" class="nav-link">Workshops</a>
          <a href="/#over-ons" class="nav-link">Over ons</a>
          <a href="/#workshops" class="btn btn-dark btn-sm mt-3 self-start">Aanmelden</a>
        </nav>
      )}
    </div>
  );
}
