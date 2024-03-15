import {useState, useEffect} from 'react'
// import {useTheme} from 'next-themes'
import Link from 'next/link'
import {BiTerminal} from 'react-icons/bi'
import {SiAboutdotme} from 'react-icons/si'

import {BiSun, BiMoon, BiCodeCurly} from 'react-icons/bi'
import {BsCodeSquare} from 'react-icons/bs'
import {VscGithub} from 'react-icons/vsc'
import {AiOutlineGoogle} from 'react-icons/ai'
import {FaGithubAlt, FaGithub, FaLinkedin, FaLinkedinIn} from 'react-icons/fa'

import {IoLogOutOutline} from 'react-icons/io5'
import {useTheme} from 'next-themes'

function Header() {
  const [isMounted, setIsMounted] = useState(false)
  const {theme, setTheme} = useTheme()
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
  }
  return (
    <>
      <header className="fixed w-full border-t-4 bg-gray-100 dark:bg-gray-900 border-yellow-500 dark:border-yellow-400 shadow dark:shadow-2 z-50 transition-all duration-500">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <a className="flex items-center hover:text-yellow-500 dark:hover:text-yellow-400 text-gray-800 dark:text-gray-50">
                  <span className="text-xl font-semibold"> 
                  </span>
                  <div className="px-2 h-full flex items-center justify-center">
          <p className="uppercase font-semibold tracking-widest text-lg animate-rotate-x animate-once animate-ease-linear">
            <span>
              <img src="/HighlightLogo1.jpg" className="w-60 h-10"></img>
            </span>{" "}
            
          </p>
        </div>
                  
                </a>
              </Link>
            </div>

            <div className="flex items-center -mx-2">
              <button
                className="flex items-center mx-2 lg:mx-4 text-base text-gray-800 hover:text-yellow-500 dark:hover:text-yellow-400 dark:text-gray-50"
                onClick={toggleTheme}
              >
                <span className="text-lg">
                  {isMounted && theme === 'dark' ? (
                    <BiSun className="text-xl" />
                  ) : (
                    <BiMoon className="text-xl" />
                  )}
                </span>
              </button>

              

              <a
                href="https://www.linkedin.com/in/mohit-sojitra"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center mx-2 lg:mx-4 text-base text-gray-800 dark:text-gray-100 hover:text-yellow-500  dark:hover:text-yellow-400"
              >
                {' '}
                <span className="text-lg">
                  <FaLinkedinIn className="text-xl" />
                </span>
              </a>

              {/* <Link href="/about">
                <a className="flex items-center mx-2  lg:mx-4 text-base text-gray-800 hover:text-yellow-500 dark:hover:text-yellow-400 dark:text-gray-50">
                  <span className="text-xl ">
                    <SiAboutdotme className="text-xl" />
                  </span>
                </a>
              </Link> */}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
