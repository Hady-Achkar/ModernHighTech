import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon, CameraIcon } from '@heroicons/react/outline';
import Logo from '../assets/mht.png';
const Home: NextPage = () => {
  const navigation = [
    { name: 'Company', href: '#home' },
    { name: 'Solutions', href: '#' },
    { name: 'Products', href: '#' },
  ];

  const products = [
    {
      id: 1,
      name: 'Wind Energy Fields',
      href: '#',
      imageSrc:
        'https://images.unsplash.com/photo-1589726096666-8bb135284e21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2021&q=80',
      imageAlt: 'Wind Energy',
    },
    {
      id: 2,
      name: 'Solar Energy Fields',
      href: '#',
      imageSrc:
        'https://images.unsplash.com/photo-1617269778723-73a40cf299bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      imageAlt: 'Solar energy.',
    },
    {
      id: 3,
      name: 'Self Powered Portable Houses',
      href: '#',
      price: '$32',
      description: 'Heather Gray',
      imageSrc:
        'https://cdn.shopify.com/s/files/1/0508/9709/2763/products/Bastone_portable_house_-_back-removebg-preview_800x.png?v=1649193733',
      imageAlt:
        'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
      id: 4,
      name: 'Self-Powered Portable Houses',
      href: '#',
      price: '$32',
      description: 'Heather Gray',
      imageSrc:
        'https://thurstongroup.co.uk/wp-content/uploads/2021/01/IMG_6324-scaled-e1611237060251.jpg',
      imageAlt:
        'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    // More products...
  ];
  return (
    <div>
      <Head>
        <title>Modern High Tech</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id="home">
          <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <svg
                  className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="50,0 100,0 50,100 0,100" />
                </svg>

                <Popover>
                  <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                    <nav
                      className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                      aria-label="Global"
                    >
                      <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                          <a href="#home">
                            <span className="sr-only">Workflow</span>
                            <img
                              alt="Workflow"
                              className="h-8 w-auto sm:h-10"
                              src="/mht.png"
                            />
                          </a>
                          <div className="-mr-2 flex items-center md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                              <span className="sr-only">Open main menu</span>
                              <MenuIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </Popover.Button>
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="font-medium text-gray-500 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        ))}
                        <a
                          href="#"
                          className="font-medium text-green-600 hover:text-green-500"
                        >
                          Book a call
                        </a>
                      </div>
                    </nav>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel
                      focus
                      className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    >
                      <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                          <div>
                            <img
                              className="h-8 w-auto"
                              src="https://tailwindui.com/img/logos/workflow-mark-green-600.svg"
                              alt=""
                            />
                          </div>
                          <div className="-mr-2">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                              <span className="sr-only">Close main menu</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                        <a
                          href="#"
                          className="block w-full px-5 py-3 text-center font-medium text-green-600 bg-gray-50 hover:bg-gray-100"
                        >
                          Log in
                        </a>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>

                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block xl:inline">
                        Empower your projects with{' '}
                      </span>{' '}
                      <span className="block text-green-600 xl:inline">
                        Modern High Tech.
                      </span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      The future is green energy, sustainability, renewable
                      energy
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <a
                          href="#"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                        >
                          Get started
                        </a>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="https://images.unsplash.com/photo-1501494278684-d0fb421388ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1067&q=80"
                alt=""
              />
            </div>
          </div>
        </section>

        <div className="relative bg-gray-50">
          <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-12">
            <div className="md:ml-auto md:w-full ">
              <h2 className="text-base text-center font-semibold uppercase tracking-wider text-gray-600">
                In Breif
              </h2>
              <p className="mt-2 text-center text-green-600 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Our vision
              </p>
              <ul className="mt-8 text-justify text-lg text-gray-900 space-y-4">
                <div>
                  <li>
                    <span className="font-bold text-green-800">
                      Plans to fully power nations with renewable
                    </span>
                  </li>
                  <li>
                    <span className="">
                      Electricity will not succeed unless countries reconfigure
                      all their energy systems, including fuels.
                    </span>
                  </li>
                </div>
                <div>
                  <li>
                    <span className="font-bold text-green-800">
                      Excess solar and wind energy can run electrolyzers{' '}
                    </span>
                    that convert water into hydrogen, which is distributed in
                    pipelines and converted back into electricity when needed.
                  </li>
                </div>{' '}
                <div>
                  <li>
                    <span className="font-bold text-green-800">
                      Plans to fully power nations with renewable
                    </span>
                  </li>
                  <li>
                    <span className="">
                      Electricity will not succeed unless countries reconfigure
                      all their energy systems, including fuels.
                    </span>
                  </li>
                </div>
                <li>
                  <span className="font-bold">
                    Hydrogen can be stored in tanks and underground caverns{' '}
                  </span>
                  forming a network that can energize industry and back up
                  electric grids.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* wind */}
        <div className="bg-white">
          <div className="bg-white overflow-hidden">
            <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
              <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                <div>
                  <h3 className="mt-2 text-green-600  text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl">
                    Wind Turbines
                  </h3>
                </div>
              </div>
              <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="relative lg:row-start-1 lg:col-start-2">
                  <svg
                    className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={384}
                      fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                    />
                  </svg>
                  <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                    <figure>
                      <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                        <img
                          className="rounded-lg shadow-lg object-cover object-center"
                          src="https://images.unsplash.com/photo-1548613053-22087dd8edb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                          alt="Whitney leaning against a railing on a downtown street"
                          width={1184}
                          height={1376}
                        />
                      </div>
                    </figure>
                  </div>
                </div>
                <div className="mt-8 lg:mt-0">
                  <div className="text-base max-w-prose mx-auto lg:max-w-none">
                    <p className="text-lg text-gray-500">
                      Anything that moves has kinetic energy, and scientists and
                      engineers are using the wind’s kinetic energy to generate
                      electricity. Wind energy, or wind power, is created using
                      a wind turbine, a device that channels the power of the
                      wind to generate electricity.
                    </p>
                  </div>
                  <div className="mt-5 prose prose-indigo text-lg space-y-4 text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                    <p>
                      The wind blows the blades of the turbine, which are
                      attached to a rotor. The rotor then spins a generator to
                      create electricity. There are two types of wind turbines:
                      the horizontal-axis wind turbines (HAWTs) and
                      vertical-axis wind turbines (VAWTs).
                    </p>
                    <p>
                      Small, individual wind turbines can produce 100 kilowatts
                      of power, enough to power a home. Small wind turbines are
                      also used for places like water pumping stations. Slightly
                      larger wind turbines sit on towers that are as tall as 80
                      meters (260 feet) and have rotor blades that extend
                      approximately 40 meters (130 feet) long. These turbines
                      can generate 1.8 megawatts of power. Even larger wind
                      turbines can be found perched on towers that stand 240
                      meters (787 feet) tall have rotor blades more than 162
                      meters (531 feet) long. These large turbines can generate
                      anywhere from 4.8 to 9.5 megawatts of power.
                    </p>
                    <p>
                      Once the electricity is generated, it can be used,
                      connected to the electrical grid, or stored for future
                      use. Batteries and pumped-storage hydropower can be used
                      to store excess wind energy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* solar */}
        <div className="bg-white">
          <div className="bg-white overflow-hidden">
            <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
              <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                <div>
                  <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-green-600 sm:text-4xl">
                    Solar Systems
                  </h3>
                </div>
              </div>
              <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="relative lg:row-start-1 lg:col-start-2">
                  <svg
                    className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={384}
                      fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                    />
                  </svg>
                  <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                    <figure>
                      <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                        <img
                          className="rounded-lg shadow-lg object-cover object-center"
                          src="https://images.unsplash.com/photo-1544245607-99ac92ec1da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                          alt="Whitney leaning against a railing on a downtown street"
                          width={1184}
                          height={1376}
                        />
                      </div>
                    </figure>
                  </div>
                </div>
                <div className="mt-8 lg:mt-0">
                  <div className="text-base max-w-prose mx-auto lg:max-w-none">
                    <p className="text-lg text-gray-500">
                      A solar PV panel consists of many cells made from layers
                      of semi-conducting material, most commonly silicon. When
                      light shines on this material, a flow of electricity is
                      created.
                    </p>
                  </div>
                  <div className="mt-5 prose prose-indigo text-lg space-y-4 text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                    <p>
                      The cells don’t need direct sunlight to work and can even
                      work on cloudy days. However, the stronger the sunshine,
                      the more electricity generated.
                    </p>
                    <p>
                      Consult us to get more information regarding the
                      feasibility of installing solar systems in your desired
                      project.
                    </p>
                    <p className="underline">
                      We provide all the services you need to implement solar
                      systems including cosultation, buying, and installing the
                      systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* contact */}
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="relative bg-white shadow-xl">
              <h2 className="sr-only">Contact us</h2>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Contact information */}

                {/* Contact form */}
                <div className="py-10 px-6 sm:px-10 lg:col-span-3 xl:p-12">
                  <h3 className="text-lg font-medium text-gray-900">
                    Send us a message
                  </h3>
                  <form
                    action="#"
                    method="POST"
                    className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-900"
                      >
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Phone
                        </label>
                        <span
                          id="phone-optional"
                          className="text-sm text-gray-500"
                        >
                          Optional
                        </span>
                      </div>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                          aria-describedby="phone-optional"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Subject
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Message
                        </label>
                        <span
                          id="message-max"
                          className="text-sm text-gray-500"
                        >
                          Max. 500 characters
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-green-500 focus:border-green-500 border border-gray-300 rounded-md"
                          aria-describedby="message-max"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:w-auto"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center space-x-6 md:order-2">
              <a href="#home">
                <img
                  alt="Workflow"
                  className="h-8 w-auto sm:h-10"
                  src="/mht.png"
                />
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-gray-400">
                &copy; {new Date().getFullYear()} Modern High Tech, Inc. All
                rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
