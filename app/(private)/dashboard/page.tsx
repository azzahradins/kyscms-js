'use client'
import Card from '@/component/Page/Card'
import Image from 'next/image'
import LineDataOptions from '../../../example-data/LineDataOptions.json'
import { CategoryScale, Chart as ChartJS, Filler, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale, PointElement, LineElement, Filler, Title,
  LinearScale, Tooltip, Legend
)

export default function Dashboard (): JSX.Element {
  return (
    <main className='wrappe'>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 mb-3'>
        <Card>
          <Card.Header>
            Monthly Visitor
          </Card.Header>
          <Card.Body>
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            Monthly Upload
          </Card.Header>
          <Card.Body>
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </Card.Body>
        </Card>

        <Card className='hidden lg:block'>
          <Card.Header>
            Server Status
          </Card.Header>
          <Card.Body>
            This or that whatever
          </Card.Body>
        </Card>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
        <Card>
          <Card.Header>
            <h3 className="text-2xl font-bold leading-none text-card-content dark:text-cardD-content">
              Latest Upload
            </h3>
            <a className="text-sm font-medium text-sidebar-ON hover:underline dark:text-sidebarD-ON"
              href="#"> View all </a>
          </Card.Header>
          <Card.Body>
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
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            Visit Performance Report
          </Card.Header>
          <Card.Body className='max-h-52'>
            This is summary for loadtime and performance issue
            <div>
              <Line data={LineDataOptions.data} className='relative' options={LineDataOptions.options} />
            </div>
          </Card.Body>
        </Card>
      </div>
    </main>
  )
}
