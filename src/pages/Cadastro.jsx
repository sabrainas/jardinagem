import React from 'react'
import bgCadastro from '/src/assets/img/bg-cadastro.png';
import { MoveRight } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

export default function Cadastro() {
  return (
    <>
      <div className='bg-auto px-36 pt-28 flex items-center bg-no-repeat bg-[#BCF0B3] h-screen w-full' style={{
        backgroundImage: `url(${bgCadastro})`,
        backgroundPosition: 'right'
      }}>
        <div className='flex flex-col items-center py-5 my-24 gap-4 rounded-lg w-96 bg-[#91DF84]'>
          <h3 className='text-4xl text-center font-semibold'>Cadastrar</h3>
          <img width={100} src="src/assets/img/circles.png" alt="" />
          <div className='w-full pb-5 px-8'>
            <form action="flex flex-col">
              <div className='flex flex-col gap-3'>
                <input type='email' name='email' className='rounded px-3 mb-3 py-3' placeholder='Insira o seu email' id='email' />
              </div>
              <div className='flex flex-col gap-3'>
                <input type='password' name='senha' className='rounded px-3 mb-3 py-3' placeholder='Insira a sua senha' id='senha' />
              </div>
              <div className='flex flex-col gap-3'>
                <input type='password' name='senha' className='rounded px-3 mb-3 py-3' placeholder='Repita a sua senha' id='senha' />
              </div>
              <div className='flex flex-col gap-3'>
                <button type='submit' className='bg-[#208F1D] py-3 rounded text-white text-left px-3 font-medium flex justify-between'>Confirmar <MoveRight /></button>
              </div>
            </form>
          </div>


          <div className='flex gap-7'>
            <button className='flex items-center font-semibold bg-white px-3 py-3 rounded gap-4 shadow-md'><FcGoogle size={25} /></button>
            <button className='flex items-center font-semibold text-white bg-[#3B5998] px-3 py-3 rounded gap-4 shadow-md'><FaFacebookF size={25} /> </button>
            <button className='flex items-center font-semibold bg-black text-white px-3 py-3 rounded gap-4 shadow-md'><FaApple size={25} /> </button>
          </div>

        </div>
      </div>

    </>
  )
}