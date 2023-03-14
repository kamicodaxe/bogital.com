/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { Fragment, useMemo } from 'react'

interface Props {
  open: boolean
  setOpen: (v: boolean) => void
}

const routes = [
  {
    name: {
      en: "Our Work",
      fr: "Projets"
    },
    path: "/projects"
  },
  {
    name: {
      en: "Blog",
      fr: "Blog",
    },
    path: "/blog"
  },
  {
    name: {
      en: "Contact",
      fr: "Contact",
    },
    path: "/contact"
  }
]


export default function CartComponnt({ open, setOpen }: Props) {
  const { locale, locales, asPath } = useRouter()
  const availableLocales = locales?.filter(_locale => _locale !== locale)
  const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
  console.warn(availableLocales)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[90]" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">

                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          <Link href="/"
                            className="flex items-center p-2">
                            <span className="flex items-center cursor-pointer z-50">
                              <img src="/images/logo.svg" alt="Bogital logo" srcSet="" className="h-6" />
                            </span>
                          </Link>
                        </Dialog.Title>

                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {
                              routes.map(item => (
                                <li key={item.path} className="flex py-6">
                                  <Link href={item.path} >
                                    <span>{item.name[lang]}</span>
                                  </Link>
                                </li>
                              ))
                            }
                          </ul>
                        </div>
                      </div>

                    </div>

                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root >
  )
}
