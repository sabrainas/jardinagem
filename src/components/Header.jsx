import React from 'react'

export default function Header() {
    return (
        <>
            {/* header  */}
            <header className='fixed w-full '>
                <nav className='bg-[#91DF84] bg-opacity-70 flex justify-between px-28 py-2'>
                    {/* logo  */}
                    <div>
                        <a href="/"><img src="/src/assets/img/logo.png" alt="logo" /></a>
                    </div>

                    {/* menu  */}
                    <div className='flex gap-4'>
                        <button><a href="login" className='border border-[#1C511B] text-[#1C511B] px-3 py-2 rounded transition-all hover:bg-[#78ac77] font-semibold'>Login</a></button>

                        <button><a href="cadastro" className=' bg-[#1C511B] text-[#91DF84] px-3 py-2 rounded transition-all hover:bg-[#113311]  font-semibold'>Sign-in</a></button>
                    </div>
                </nav>
            </header>
        </>
    )
}
