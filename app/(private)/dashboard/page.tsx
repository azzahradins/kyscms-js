'use client'
import { Card } from 'flowbite-react'
import Image from 'next/image'

export default function Dashboard (): JSX.Element {
  return (
    <main>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 mb-3'>
        <Card className="w-full">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Monthly Visitor
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
        <Card className="w-full">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Monthly Content Upload
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
        <Card className="w-full hidden lg:block">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Server Status
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
        </Card>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
        <Card>
          <div className="mb-2 flex items-center justify-between">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Latest Upload
            </h5>
            <a
              className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href="#"
            >
              <p>
                View all
              </p>
            </a>
          </div>
          <div className="flow-root">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-1 sm:py-2">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <Image
                      alt="Neil image"
                      className="rounded-full"
                      height="32"
                      src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1692966165~exp=1692966765~hmac=be5e5f0a2501813ffc717b22325436fe19eb8f7c28a042ec3012ed7aba438d07"
                      width="32"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                      #Title (#Subtitle)
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      Uploaded by: #Username
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    #Status
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </main>
  )
}
