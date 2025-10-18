            <TabGroup className="mt-2">
              <div id='mobileCat' className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navLinks.categories.map((category) => (
                    <Tab
                      id='mobileItem'
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navLinks.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                    
                    {/* Mobile image section */}
                    <div className="grid grid-cols-2 gap-x-4 sm:grid-cols-1">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <img
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </a>
                        </div>
                      ))}
                    </div>
                    {/* Mobile Section LIST */}
                    {category.sections.map((section) => (
                      <div id='mobileSection' className='' key={section.name}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="flex flex-col font-medium text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6 md:flex"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a href={item.href} className="-m-2 block p-2 text-gray-500">
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

                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navLinks.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>