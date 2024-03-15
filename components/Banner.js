import Head from 'next/head'

export default function Banner() {
  return (
    <div className="pt-24 px-12 mx-auto max-w-7xl">
      <div className="w-full mx-auto text-left md:w-11/12  xl:w-9/12 sm:text-center">
        <h1 className="mb-8 text-center text-4xl font-bold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight dark:text-gray-50 transition-all duration-500">
          <span>Highlight</span>{' '}
          <span className=" w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-yellow-400 to-yellow-600 lg:inline">
            Tradings
          </span>{' '}
          <span>News </span>{' '}
          
        </h1>

        <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24 dark:text-gray-400 transition-all duration-500">
          Highlight Trading is a leading and profitable firm in Ethiopia. Following its foundation in 2008, it immediately engaged in several areas such as telecommunications, manufacturing, import-export, high-end printing, and so on.
        </p>
      </div>
    </div>
  )
}
