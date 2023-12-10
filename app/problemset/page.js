'use client'

/* components and icon */
import {IconButton} from '@/components/button'
import { Badge, Card } from 'flowbite-react'
import { FaArrowRight } from 'react-icons/fa6'

/* useful stuff */
import Link from 'next/link'

export default function ProblemsetPage() {

  const test_data = [
    {"id": "licodeprogrammingcontest2", "name": "LICODE PROGRAMMING CONTEST #2", "authors": ["ecnerwala", "Errichto"], "avg_diff": 3282.1, "tag": ["geometry", "fft", "adhoc"]},
    {"id": "licodeprogrammingcontest1", "name": "LICODE PROGRAMMING CONTEST #1", "authors": ["iwannabetheguy", "tourist"], "avg_diff": 2754.6, "tag": ["graph", "geometry"]},
  ];

  return (
    <div className="flex flex-col justify-center px-16">
      <div className="mb-4">
        <h2 className="font-sans text-2xl font-bold">LIST OF PROBLEMSET</h2>
      </div>
      <div className="grid grid-cols-3 gap-4 w-full">
        <div className="relative col-span-2">
          {
            test_data.map(problemset => (
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
                    <IconButton className="bg-white text-[#0066ff] border-2 border-[#0066ff] hover:border-blue-700 hover:text-white hover:bg-blue-700 transition duration-300 px-4 py-2 rounded-xl">
                      Challenge
                      <FaArrowRight className="ml-2"/>
                    </IconButton>
                  </Link>
                </div>
              </Card>
            ))
          }
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
