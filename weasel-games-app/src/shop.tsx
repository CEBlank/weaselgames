export function Shop() {

const products = [
  {
    id: 1,
    name: 'Dungeons&Dragons: Player Handbook 2024',
    href: '#',
    price: '$49.99',
    imageSrc: '#',
    imageAlt: 'Dungeons and Dragons player handbook 2024 edition.',
  },
  {
    id: 2,
    name: 'Root - A Game of Woodland Might and Right',
    href: '#',
    price: '$60.00',
    imageSrc: '#',
    imageAlt: '#',
  },
  {
    id: 3,
    name: 'Arcadia Quest',
    href: '#',
    price: '$99.99',
    imageSrc: '#',
    imageAlt: '#',
  },
  {
    id: 4,
    name: 'Pathfinder Bestiary',
    href: '#',
    price: '$49.99',
    imageSrc: '#',
    imageAlt: '#',
  },
  {
    id: 5,
    name: 'Card Keeper',
    href: '#',
    price: '$18.00',
    imageSrc: '#',
    imageAlt: '#',
  },
  {
    id: 6,
    name: 'Focus Multi-Pack',
    href: '#',
    price: '$39.00',
    imageSrc: '#',
    imageAlt: 'Stack of 3 small drab green cardboard paper card refill boxes with white text.',
  },
  {
    id: 7,
    name: 'Monster Manual 2024',
    href: '#',
    price: '$50.00',
    imageSrc: '#',
    imageAlt: '#',
  },
  {
    id: 8,
    name: 'Focus Carry Pouch',
    href: '#',
    price: '$32.00',
    imageSrc: '#',
    imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
]



  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 bg-white">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 bg-white">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg object-cover bg-gray-300 group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
