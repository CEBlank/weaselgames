import { Fragment, useState } from 'react'
import './App.css'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon, HomeIcon, CalendarDateRangeIcon } from '@heroicons/react/24/outline';
import { useLocation }  from 'react-router-dom';

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
          name: 'TTRPG Events Schedule',
          items: [
            { name: 'Dungeons & Dragons: Adventure League', href: '#' },
            { name: 'Pathfinder', href: '#' },
            { name: 'DaggerHeart', href: '#' },
            { name: 'Warhammer 40k', href: '#' },
          ]
        },
        {
          id: 'cardgameEvents',
          name: 'Card Games Schedule',
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
            { name: 'Trans Game Night', href: '#' },
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
  const [selectedPage, setSelectedPage] = useState("home");
  const location = useLocation();
  const [open, setOpen] = useState(false)

  return(
    <div className='bg-white'>
  
    <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
      <DialogBackdrop
      transition
      className="fixed inset bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0" />

    <div className="fixed inset-0 z-40 flex">

      <DialogPanel 
      transition
      className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-purple pb-12 shadow-x1 transition duration-300 ease-in-out data-closed:-translate-x-full">

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

        {/* Links Output - Navigation by Tab Grouping */}
          <TabGroup className='mt-2'>
            <div className='border-b border-purple-200'>
            <TabList className='-mb-px flex space-x-8 px-4'>
              {navLinks.categories.map((category) => (
                <Tab 
                key={category.name}
                className='flex-1 border-b-2 border-transparent px-1 py-4 text-base-font-medium whitespace-nowrap data-selected:border-indigo-600' >
                  {category.name}
                </Tab>
              ))}
            </TabList>
            </div>

            {/* Tab Panels for Groups */}

            <TabPanels as={Fragment}>
              {navLinks.categories.map((category) => (
                <TabPanel key={category.name} className='space-y-10 px-4 pt-10 pb-8'>

                  {/* Feature Links - Picture Placeholders */}

                  <div className='grid grid-cols-2 gap-x-4'>
                    {category.featured.map((item) => (
                      <div key={item.name} className='group relative text-sm' >
                        <img className='aspect-square w-full rounded-lg bg-grey-100 object-cover group-hover:opacity-75' />
                        <a href={item.href} className="mt-6 block font-medium text-gray-100">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                        </a>
                        <p aria-hidden="true" className="mt-1">
                          Shop now
                        </p>
                      </div>
                    ))}
                  </div>

                    {/* Section Links - Menu of Links */}
                  {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a href={item.href} className="-m-2 block p-2 ">
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>

          {/* No-drop Links */}
          <div>
            {navLinks.pages.map((page) => (
              <div key={page.name} className='flow-root' >
                <a href={page.name} className='-m-2 p-2 font-medium' >
                  {page.name}
                </a>
              </div>
            ))}
          </div>

          {/* Login, Search, and Cart */}
          <div className='space-y-6 border-t border-gray-200 px-4 py-6' >
            <div className='flow-root'>
              <a href='#' className='-m-2 block p-2 font-medium' >
                Sign In
              </a>
            </div>
            <div className='flow-root'>
              <a href='#' className='-m-2 block p-2 font-medium' >
                Create Account
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
          <div className="flex h-16 items-center">
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
                  src="./images/ermineLogo.png"
                  className="w-20 h-20"
                />
              </a>
            </div>

      {/* The Real PopOvers */}
            <PopoverGroup className='hidden lg:ml-8 lg:block lg:self-stretch'>
              <div>
                {navLinks.categories.map((category) => (
                  <Popover key={category.name} className='flex' >
                    <div className='relative-flex' >
                      <PopoverButton className='group relative flex items-center justify-center text-sm font-medium transition-colors duration-200 ease-out' >
                        {category.name}
                        <span
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out"
                        />
                      </PopoverButton>
                    </div>
                  </Popover>

                ))}
              </div>


            </PopoverGroup>

          </div>
        </div>
      </nav>
    </header>
  
    </div>
  )

}

export default Nav