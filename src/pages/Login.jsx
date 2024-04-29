import React from 'react'
import { MoveRight } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

export default function Login() {
  return (
    <>
      <div className='px-24 flex flex-col pt-28 gap-5 items-center bg-[#BCF0B3] h-screen'>
        <h1 className='text-5xl font-semibold'>Login</h1>
        <h3 className='font-medium text-xl'>Encontre a sua planta e descubra o clima, luminosidade e como regar do jeito certo.</h3>

        <div className='flex justify-between items-center'>
          <form action="flex flex-col">
            <div className='flex flex-col gap-3'>
              <input type='email' name='email' className='rounded px-3 mb-3 py-3' placeholder='Insira o seu email' id='email'  />
            </div>
            <div className='flex flex-col gap-3'>
              <input type='password' name='senha' className='rounded px-3 mb-3 py-3' placeholder='Insira a sua senha' id='senha' />
            </div>
            <div className='flex flex-col gap-3'>
              <button type='submit' className='bg-[#208F1D] py-3 rounded text-white text-left px-3 font-medium flex justify-between'>Confirmar <MoveRight /></button>
            </div>
          </form>
          <div className=''>
            <p className='font-semibold text-4xl mx-20'>/</p>
          </div>
          <div className='flex flex-col gap-3'>
            <button className='flex items-center font-semibold bg-white px-3 py-3 rounded gap-4 shadow-md'><FcGoogle size={25} /> Faça login no Google</button>
            <button className='flex items-center font-semibold bg-[#3B5998] text-white px-3 py-3 rounded gap-4 shadow-md'><FaFacebookF size={25} /> Faça login no Facebook</button>
            <button className='flex items-center font-semibold bg-black text-white px-3 py-3 rounded gap-4 shadow-md'><FaApple size={25} /> Faça login na Apple</button>
          </div>
        </div>

        <h1 className='text-3xl font-semibold underline'><a href="#">Esqueci minha senha</a></h1>

        <div className='absolute bottom-0 flex px-24 w-full justify-between pb-5'>
          <h5 className='text-left text-2xl font-semibold'><a href="">Política de Privacidade</a></h5>
          <h5 className='text-right text-2xl font-semibold'>Copyright© 2024</h5>
        </div>
      </div>
    </>
  )
}
