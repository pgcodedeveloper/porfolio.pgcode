import React, { useEffect, useState } from 'react'

const Header = () => {

    return (
        <>
            <header className='flex justify-evenly sm:flex-row items-center py-5 w-full sticky top-0 left-0 right-0 backdrop-blur-lg z-[2] mx-auto mt-2'>
                <a href="/" className='flex items-center py-3 px-4 gap-x-2 justify-center'>
                    <span className="flex items-center justify-center text-sm font-semibold opacity-80 text-gray-800 bg-gray-100 rounded-md dark:bg-primary dark:text-gray-300 p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code w-7 h-7" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 8l-4 4l4 4" />
                            <path d="M17 8l4 4l-4 4" />
                            <path d="M14 4l-4 16" />
                        </svg>
                        <span className='sr-only'>Icono PGCODE</span>
                    </span>
                    <span className='font-semibold hover:font-bold transition text-primary'>PG CODE</span>
                </a>
                <nav className='flex flex-row gap-x-4 md:gap-x-10 opacity-80 sm:text-base text-xs flex-wrap justify-center gap-2 menuCompu'>
                    <a href="/#experiencia" className='transition hover:text-yellow-200'>Experiencia</a>
                    <a href="/#proyectos" className='transition hover:text-yellow-200'>Proyectos</a>
                    <a href="/#sobre-mi" className='transition hover:text-yellow-200'>Sobre mí</a>
                    <a href="/#contacto" className='transition hover:text-yellow-200'>Contacto</a>
                </nav>
            </header>
            <div className='menuTel'>
                <nav className='flex text-sm font-medium rounded-full gap-2 px-2 backdrop-blur-lg z-[2] transition' id='menu'>
                    <a href="/#experiencia" className='p-2 transition'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 hover:text-yellow-200 hover:scale-125" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                            <path d="M12 12l0 .01" />
                            <path d="M3 13a20 20 0 0 0 18 0" />
                        </svg>
                    </a>
                    <a href="/#proyectos" className='p-2 transition'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 hover:text-yellow-200 hover:scale-125" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>2
                            <path d="M8.5 13.5l-1.5 -1.5l1.5 -1.5" />
                            <path d="M15.5 10.5l1.5 1.5l-1.5 1.5" />
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M13 9.5l-2 5.5" />
                        </svg>
                    </a>
                    <a href="/#sobre-mi" className='p-2 transition'>
                        <svg className="size-6 hover:text-yellow-200 hover:scale-125" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                            <path d="M15 19l2 2l4 -4" />
                        </svg>
                    </a>
                    <a href="/#contacto" className='p-2 transition'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 hover:text-yellow-200 hover:scale-125" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
                            <path d="M10 16h6" />
                            <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M4 8h3" />
                            <path d="M4 12h3" />
                            <path d="M4 16h3" />
                        </svg>
                    </a>
                </nav>
            </div>
        </>
    )
}

export default Header
