import { useState } from 'react'
import './App.css'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import LoginButton from './LoginButton';
import LogoutButton from './LogOutButton';
//import { useLocation }  from 'react-router-dom';



const navLinks = {

  categories: [
    //TTRPGs
    {
      id:'ttrpg',
      name: 'Table Top RPGs',
      featured: [
        {
          name: 'New Arrivals',
          href: '#'
        },
        {
          name: 'Staff Picks',
          href: '#'
        }
      ],
      sections: [
        {
          id: 'books',
          name: 'Books',
          items: [
            { name: 'Rulebooks', href: '#' },
            { name: 'Adventures', href: '#' },
            { name: 'Monster Manuals', href: '#' },
            { name: 'Beginner Kits', href: '#' },
          ]
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Spell Card Binders', href: '#' },
            { name: 'Game Mats', href: '#' },
            { name: 'Stationary', href: '#' },
            { name: 'Dice Sets', href: '#' },
          ]
        },
        {
          id: 'brands',
          name: 'By Brand',
          items: [
            { name: 'Dungeons & Dragons', href: '#' },
            { name: 'Pathfinder', href: '#' },
            { name: 'DaggerHeart', href: '#' }
          ]
        }

      ]
    },
    // Card Trading Card Games
    {
      id:'ccg',
      name: 'Collectable Card Games',
      featured: [
        {
          name: 'New Arrivals',
          href: '#'
        },
        {
          name: 'Pre-Orders',
          href: '#'
        }
      ],
      sections: [
        {
          id: 'cardpacks',
          name: 'Cards',
          items: [
            { name: 'Singles', href: '#' },
            { name: 'Card Packs', href: '#' },
            { name: 'Buylist', href: '#' }
          ]
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Card Binders', href: '#' },
            { name: 'Card Protectors', href: '#' }
          ]
        },
        {
          id: 'brands',
          name: 'By Brand',
          items: [
            { name: 'Magic the Gathering', href: '#' },
            { name: 'Yu-Gi-Oh', href: '#' },
            { name: 'Pokemon', href: '#' }
          ]
        }
      ]
    },
    // Commnuity and Events
    {
      id:'community',
      name: 'Community',
      featured: [
        {
          name: 'All Events',
          href: './events'
        },
        {
          name: 'Join Our Community',
          href: './community'
        }
      ],
      sections: [
        {
          id: 'ttrpgEvents',
          name: 'TTRPG Events',
          items: [
            { name: 'Dungeons & Dragons: Adventure League', href: '#' },
            { name: 'Pathfinder', href: '#' },
            { name: 'DaggerHeart', href: '#' },
            { name: 'Warhammer 40k', href: '#' },
          ]
        },
        {
          id: 'cardgameEvents',
          name: 'Card Games Events',
          items: [
            { name: 'Magic the Gathering', href: '#' },
            { name: 'Yu-Gi-Oh', href: '#' },
            { name: 'Pokemon', href: '#' },
            { name: 'Lorcana', href: '#' },
          ]
        },
        {
          id: 'otherEvents',
          name: 'Other Events',
          items: [
            { name: 'Open Board Games', href: '#' },
            { name: 'Root', href: '#' },
            { name: 'Open Painting', href: '#' },
            { name: 'Special Events', href: '#' },
          ]
        }
      ]
    },
  ],
    pages: [
    { name: 'Home', href: '/' },
    { name: 'Shop All', href: './shop' },
    { name: 'About', href: './about' },
  ]
}

const Nav = () => {
  const [open, setOpen] = useState(false)

 // console.log('Nav Loaded')

  return(
    <div id='topDiv' className='bg-dark'>
  
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* MOBILE ONLY Links */}

          <div className="h-screen w-full px-4 pt-32">

          {navLinks.categories.map((category) => (
            <ul className='menu rounded-box'
              key={category.name}
              >
                <li>
                    <details>
                      <summary
                      id='mobileCat'>
                        {category.name}
                      </summary>
                    {category.sections.map((section) => (
                      <ul>
                        <li>
                          <details>
                            <summary 
                            key={section.name}
                            id='mobileSection'>
                              {section.name}
                            </summary>
                            <ul>
                            {section.items.map((item) => (
                              <li
                              key={item.name}
                              id='mobileItem'>
                                {item.name}
                              </li>
                            ))}
                            </ul>
                          </details>
                        </li>
                      </ul>
                    ))}
                    </details>
                </li>
                
            </ul>
          ))}

          </div>




              {/* Mobile view Login */}
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Sign In
                </a>
              </div>
            </div>

          
          </DialogPanel>
        </div>
      </Dialog>

    {/* Header with Nav Bar */}
    <header className='relative'>

      <nav aria-label='Top' className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8' >
        <div className="border-b border-gray-200">
          <div className="flex h-21 items-center">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="relative rounded-md p-2 text-gray-400 lg:hidden"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <a href="/">
                <span className="sr-only">Weasel Games</span>
                <img
                  alt="Weasel Games"
                  src={"weaselArcherHead.png"}
                  className="w-16 h-20"
                />
              </a>
            </div>

      {/* The Main Display popovers - Not Mobile */}
            <PopoverGroup className='hidden lg:ml-8 lg:block lg:self-stretch'>
              <div id="navPanel" className='flex h-full space-x-8 md:flex'>
                {navLinks.categories.map((category) => (
                  <Popover key={category.name} className='flex' >
                    <div className='relative flex' >
                      <PopoverButton className='group relative flex items-center justify-center text-sm font-medium transition-colors duration-200 ease-out' >
                        {category.name}
                        <span
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out"
                        />
                      </PopoverButton>
                    </div>
                    <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full z-20 w-full bg-white text-sm transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                    >
                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-sm" />
                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                            
                              <div id='category' className="col-start-1 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div key={item.name} className="group relative text-base sm:text-sm">
                                    <img
                                      className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                    />
                                    <a href={item.href} className="mt-6 block font-medium">
                                      <span aria-hidden="true" className="absolute inset-0 z-10" />
                                      {item.name}
                                    </a>
                                  </div>
                                ))}
                              </div>

                              <div id='section' className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p id={`${section.name}-heading`} className="font-bold">
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li id='itemLine' key={item.name} className="flex">
                                          <a href={item.href} className="hover:text-gray-800">
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                  </Popover>
                ))}
                {navLinks.pages.map((page) => (
                  <a id='pages' key={page.name}
                  href={page.href}
                  className='flex items-center text-sm font-medium'>
                    {page.name}
                  </a>
                ))}
              </div>
            </PopoverGroup>
            <div  className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a id='login' href="#" className="text-sm font-medium">
                  {LoginButton()}
                </a>
                <a id='logout' href="#" className="text-sm font-medium">
                  {LogoutButton()}
                </a>
              </div>

              {/* Search */}
              <div className="flex lg:ml-6">
                <a id='search' href="#" className="p-2">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                </a>
              </div>

              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
                <a id='cart' href="#" className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon
                    aria-hidden="true"
                    className="size-6 shrink-0"
                  />
                  <span className="ml-2 text-sm font-medium">0</span>
                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  
    </div>
  )

}

export default Nav