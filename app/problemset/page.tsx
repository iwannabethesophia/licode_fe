'use client'

/* components and icon */
import { IconButton } from '@/components/button'
import { Badge, Card, Pagination } from 'flowbite-react'
import { FaArrowRight } from 'react-icons/fa6'

/* theme */
import type { CustomFlowbiteTheme } from 'flowbite-react'

/* useful stuff */
import Link from 'next/link'
import { useState } from 'react'

const paginationTheme: CustomFlowbiteTheme = {
  layout: {
    table: {
      base: "text-sm text-gray-700",
      span: "font-semibold text-gray-900"
    }
  },
  pages: {
    base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
    showIcon: "inline-flex",
    previous: {
      base: "ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700",
      icon: "h-5 w-5"
    },
    next: {
      base: "rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700",
      icon: "h-5 w-5"
    },
    selector: {
      base: "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 hover:bg-gray-100",
      active: "bg-cyan-50 text-white bg-[#0066ff] hover:bg-blue-700 hover:text-white",
      disabled: "opacity-50 cursor-normal"
    }
  }
};

export default function ProblemsetPage() {

  const test_data = [
    {"id": "licodeprogrammingcontest2", "name": "LICODE PROGRAMMING CONTEST #2", "authors": ["ecnerwala", "Errichto"], "avg_diff": 3282.1, "tag": ["geometry", "fft", "adhoc"]},
    {"id": "licodeprogrammingcontest1", "name": "LICODE PROGRAMMING CONTEST #1", "authors": ["iwannabetheguy", "tourist"], "avg_diff": 2754.6, "tag": ["graph", "geometry"]},
    {"id": "licodeprogrammingcontest2", "name": "LICODE PROGRAMMING CONTEST #2", "authors": ["ecnerwala", "Errichto"], "avg_diff": 3282.1, "tag": ["geometry", "fft", "adhoc"]},
    {"id": "licodeprogrammingcontest1", "name": "LICODE PROGRAMMING CONTEST #1", "authors": ["iwannabetheguy", "tourist"], "avg_diff": 2754.6, "tag": ["graph", "geometry"]},
    {"id": "licodeprogrammingcontest2", "name": "LICODE PROGRAMMING CONTEST #2", "authors": ["ecnerwala", "Errichto"], "avg_diff": 3282.1, "tag": ["geometry", "fft", "adhoc"]},
    {"id": "licodeprogrammingcontest1", "name": "LICODE PROGRAMMING CONTEST #1", "authors": ["iwannabetheguy", "tourist"], "avg_diff": 2754.6, "tag": ["graph", "geometry"]},
    {"id": "licodeprogrammingcontest2", "name": "LICODE PROGRAMMING CONTEST #2", "authors": ["ecnerwala", "Errichto"], "avg_diff": 3282.1, "tag": ["geometry", "fft", "adhoc"]},
    {"id": "licodeprogrammingcontest1", "name": "LICODE PROGRAMMING CONTEST #1", "authors": ["iwannabetheguy", "tourist"], "avg_diff": 2754.6, "tag": ["graph", "geometry"]},
    {"id": "licodeprogrammingcontest2", "name": "LICODE PROGRAMMING CONTEST #2", "authors": ["ecnerwala", "Errichto"], "avg_diff": 3282.1, "tag": ["geometry", "fft", "adhoc"]},
    {"id": "licodeprogrammingcontest1", "name": "LICODE PROGRAMMING CONTEST #1", "authors": ["iwannabetheguy", "tourist"], "avg_diff": 2754.6, "tag": ["graph", "geometry"]},
    {"id": "licodeprogrammingcontest2", "name": "LICODE PROGRAMMING CONTEST #2", "authors": ["ecnerwala", "Errichto"], "avg_diff": 3282.1, "tag": ["geometry", "fft", "adhoc"]},
    {"id": "licodeprogrammingcontest1", "name": "LICODE PROGRAMMING CONTEST #1", "authors": ["iwannabetheguy", "tourist"], "avg_diff": 2754.6, "tag": ["graph", "geometry"]},
    {"id": "licodeprogrammingcontest2", "name": "LICODE PROGRAMMING CONTEST #2", "authors": ["ecnerwala", "Errichto"], "avg_diff": 3282.1, "tag": ["geometry", "fft", "adhoc"]},
    {"id": "licodeprogrammingcontest1", "name": "LICODE PROGRAMMING CONTEST #1", "authors": ["iwannabetheguy", "tourist"], "avg_diff": 2754.6, "tag": ["graph", "geometry"]},
    {"id": "licodeprogrammingcontest2", "name": "LICODE PROGRAMMING CONTEST #2", "authors": ["ecnerwala", "Errichto"], "avg_diff": 3282.1, "tag": ["geometry", "fft", "adhoc"]},
    {"id": "licodeprogrammingcontest1", "name": "LICODE PROGRAMMING CONTEST #1", "authors": ["iwannabetheguy", "tourist"], "avg_diff": 2754.6, "tag": ["graph", "geometry"]},
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex flex-col justify-center px-16">
      <div className="mb-4">
        <h2 className="font-sans text-2xl font-bold">LIST OF PROBLEMSET</h2>
      </div>
      <div className="grid grid-cols-3 gap-4 w-full">
        <div className="relative col-span-2">
          {
            test_data.map((problemset, idx) => (
              <Card className="max-w-full mb-2">
                <Link href={`/problemset/${problemset.id}`} className="text-xl font-sans font-bold tracking-tight text-gray-900">
                  <span className="hover:text-[#0066ff] hover:underline hover:underline-offset-4">{problemset.name}</span>
                </Link>
                <div className="font-normal text-gray-700 flex-col">
                  <div className="text-sm align-middle flex">Difficulity: <Badge className="ml-1 rounded-lg" color="failure">{problemset.avg_diff}</Badge></div>
                  <div className="text-sm align-middle flex mt-1">
                    Problemset tag:
                    {
                      problemset.tag.map(t => (
                       <Badge className="ml-1 rounded-lg" color="info">{t}</Badge>
                      ))
                    }
                  </div>
                  <div className="text-sm align-middle flex mt-1">
                    Authors:
                    {
                      problemset.authors.map(author => (
                       <Badge className="ml-1 rounded-lg" color="gray">{author}</Badge>
                      ))
                    }
                  </div>
                </div>
                <div className="absolute right-0 mr-6">
                  <Link href={`/problemset/${problemset.id}`}>
                    <IconButton className="bg-white text-[#0066ff] border-2 border-[#0066ff] hover:border-blue-700 hover:text-white hover:bg-blue-700 transition duration-300 px-4 py-2">
                      Challenge
                      <FaArrowRight className="ml-2"/>
                    </IconButton>
                  </Link>
                </div>
              </Card>
            ))
          }
          <div className="flex overflow-x-auto sm:justify-center">
            <Pagination currentPage={currentPage} totalPages={parseInt(test_data.length / 10 + 1)} onPageChange={onPageChange} showIcons theme={paginationTheme} />
          </div>
        </div>
        <div>
          <Card className="max-w-full">
            <h5 className="text-xl font-sans font-bold tracking-tight text-gray-900">
              Search problemset
            </h5>
            <div className="font-normal text-gray-400">Coming soon...</div>
          </Card>
        </div>
      </div>
    </div>
  )
}
