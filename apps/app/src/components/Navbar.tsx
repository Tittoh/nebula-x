import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <>
      <nav className="container mx-auto absolute z-10 max-w-6xl p-3 left-0 right-0">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex lg:flex-1">
            <a href="#" className="relative flex items-center w-10 h-10">
              <Image src={'/alt-logo.svg'} fill alt='Logo' />
            </a>
          </div>
          <div className="flex gap-x-6 justify-end">
            <a
              href="https://github.com/Tittoh/nebula-x"
              className="text-sm font-semibold leading-6"
            >
              <Icon
                className="w-6 h-6 text-gray-900"
                icon="simple-icons:github"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}