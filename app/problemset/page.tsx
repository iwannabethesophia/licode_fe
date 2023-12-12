'use client'

/* components and icon */
import { IconButton } from '@/components/button'
import { Badge, Card, Pagination } from 'flowbite-react'
import {
  FaArrowRight,
  FaSistrix,
} from 'react-icons/fa6'

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
      base: "w-10 border border-gray-300 bg-white py-2 leading-tight text-gray-500 hover:bg-gray-100",
      active: "bg-cyan-50 text-white bg-[#0066ff] hover:bg-blue-700 hover:text-white",
      disabled: "opacity-50 cursor-normal"
    }
  }
};

export default function ProblemsetPage() {

  const [test_data, setTestData] = useState([
    {"id": "licodeprogrammingcontest2", "name": "LICODE PROGRAMMING CONTEST #2", "authors": ["ecnerwala", "Errichto"], "avg_diff": 3282.1, "tag": ["geometry", "fft", "adhoc"]},
    {"id": "licodeprogrammingcontest1", "name": "LICODE PROGRAMMING CONTEST #1", "authors": ["iwannabetheguy", "tourist"], "avg_diff": 2754.6, "tag": ["graph", "geometry"]},
    {"id": "licodeprogrammingcontest2", "name": "CODETON", "authors": ["ecnerwala", "Errichto"], "avg_diff": 3282.1, "tag": ["geometry", "fft", "adhoc"]},
    {"id": "licodeprogrammingcontest1", "name": "CODEFORCES", "authors": ["iwannabetheguy", "tourist"], "avg_diff": 2754.6, "tag": ["graph", "geometry"]},
    {"id": "licodeprogrammingcontest2", "name": "Atcoder", "authors": ["ecnerwala", "Errichto"], "avg_diff": 3282.1, "tag": ["geometry", "fft", "adhoc"]},
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageOffset, setPageOffset] = useState(10);
  const totalPages: number = pageOffset === 0 ? 0 : parseInt(Math.round(test_data.length / pageOffset).toString());

  const onPageChange = (page: number) => setCurrentPage(page);

  /* search box engine */
  const [searchbox_NameValue, set_searchbox_NameValue] = useState("");

  const [searchbox_BackupData, set_searchbox_BackupData] = useState(test_data);
  const searchbox_SearchEvent = (event) => {
    const re = new RegExp(`^.*${searchbox_NameValue}.*$`, "i");
    const searchbox_MatchedValue: Array<any> = test_data.filter(({ name }) => name.match(re));
    setTestData(searchbox_MatchedValue);
  }
  const searchbox_ResetEvent = (event) => {
    setTestData(searchbox_BackupData);
    set_searchbox_NameValue("");
  }

  return (
  <div className="flex flex-col justify-center px-16">
    <div className="mb-4">
      <h2 className="font-sans text-2xl font-bold">LIST OF PROBLEMSET</h2>
    </div>
    <div className="grid grid-cols-3 gap-4 w-full">
      <div className="relative col-span-2">
        <div className="flex items-center justify-between overflow-x-auto mb-4">
          <div className="flex items-center justify-center">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} theme={paginationTheme} showIcons />
          </div>
          <div className="flex items-center justify-end mt-2">
            <label>Entries:</label>
            <input className="ml-2 outline-none bg-slate-100 px-4 py-1 w-16 rounded-xl hover:bg-slate-200" value={pageOffset} onChange={event => setPageOffset(event.target.value == "" ? 0 : parseInt(event.target.value.toString()))} />
          </div>
        </div>
        {
          pageOffset == 0 || test_data.length == 0 ?
          <Card className="my-4 rounded-xl">
            <h2 className="text-center text-3xl font-sans font-bold py-8">No problemset found.</h2>
          </Card>
          :
          test_data
            .slice((currentPage - 1) * pageOffset, currentPage * pageOffset)
            .map((problemset, idx) => (
            <Card className="max-w-full mb-2 rounded-xl">
              <Link href={`/problemset/${problemset.id}`} className="text-xl font-[sfprorounded-bold] font-bold tracking-tight text-gray-900">
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
                  <IconButton className="bg-[#0066ff] text-white hover:bg-blue-700 transition duration-300 px-4 py-2 shadow-xl">
                    Challenge
                    <FaArrowRight className="ml-2"/>
                  </IconButton>
                </Link>
              </div>
            </Card>
          ))
        }
        <div className="flex justify-between items-center overflow-x-auto mb-4">
          <div className="flex items-center justify-center">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} theme={paginationTheme} showIcons />
          </div>
          <div className="flex items-center justify-end mt-2">
            <label>Entries:</label>
            <input className="ml-2 outline-none bg-slate-100 px-4 py-1 w-16 rounded-xl hover:bg-slate-200" value={pageOffset} onChange={event => setPageOffset(event.target.value == "" ? 0 : parseInt(event.target.value.toString()))} />
          </div>
        </div>
      </div>
    <div>
      <Card className="max-w-full rounded-2xl">
        <h5 className="text-xl font-sans font-bold tracking-tight text-gray-900">
          Search problemset
        </h5>
        <div className="flex flex-col">
          <div className="relative mb-2">
            <div className="absolute inset-y-0 start-0 ps-4 inline-flex items-center">
              <FaSistrix />
            </div>
            <input value={searchbox_NameValue} onChange={event => set_searchbox_NameValue(event.target.value)} className="ps-10 block outline-none w-full text-sm px-4 py-2 bg-slate-100 rounded-xl hover:bg-slate-200" placeholder="Search problemset name"/>
          </div>
          <div className="flex justify-end space-x-1.5">
            <IconButton className="bg-gray-200 text-black text-sm hover:bg-gray-300" onClick={searchbox_ResetEvent}>
              Reset
            </IconButton>
            <IconButton className="bg-[#0066ff] text-white text-sm hover:bg-blue-700" onClick={searchbox_SearchEvent}>
              <FaSistrix className="mr-2" />
              Search
            </IconButton>
          </div>
        </div>
      </Card>
    </div>
  </div>
  </div>
  )
}
