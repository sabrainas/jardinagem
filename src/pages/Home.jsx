import { useState } from 'react'
import bgSectionImage from '/src/assets/img/bg-section2.png';
import { MoveRight } from 'lucide-react';

function Home() {

  return (
    <>
      
      <main className='bg-[#BCF0B3]'>
        {/* seção 1 */}
        <section className='flex items-center px-24 justify-evenly h-screen'>
          {/* titulo e descrição  */}
          <div>
            <h2 className='text-6xl font-semibold'>Suas plantas estão <span className='text-[#2EAC23]'>morrendo!</span></h2>
            <p className='text-xl font-normal py-5'>Não se preocupe, nesse site terá as informações necessárias para salvar a sua planta!</p>

            <button><a href="cadastro" className='bg-[#1C511B] text-[#91DF84] px-3 py-2 rounded transition-all hover:bg-[#113311]  font-semibold'>Sign-in</a></button>
          </div>

          {/* imagem  */}
          <div>
            <img src="/src/assets/img/img-principal.png" alt="" />
          </div>
        </section>

        <h2 className='text-center py-3 text-4xl font-semibold'>Saiba qual é a luminosidade correta para a sua planta!</h2>

        {/* seção 2 */}
        <section className='flex px-24 gap-3 h-[80vh] bg-auto justify-center items-center shadow-xl' style={{ backgroundImage: `url(${bgSectionImage})` }}>
          <div className='flex justify-center items-center gap-3 h-full'>
            {/* card 1  */}
            <div className='w-80 shadow-lg'>
              {/* header  */}
              <div className='bg-[#074541] flex justify-center rounded-tl rounded-tr py-2 '>
                <img src="/src/assets/img/moon.png" alt="" />
              </div>

              {/* content  */}
              <div className='flex flex-col gap-4 p-3 bg-[#3A9B38] rounded-bl rounded-br shadow-lg'>
                <h3 className='text-2xl font-bold text-center text-[#17FFF1]'>Sombra</h3>
                <h4 className='text-lg font-semibold text-white'>O que é Sombra?</h4>
                <p className='font-medium text-white'>A Sombra, é quando a planta recebe a luz indireta do sol bem pouquinho por que essa espécie é sensível aos raios de sol direto, e curte o local escurinho que entra um pouco de sol, por exemplo plantas de banheiro.</p>
              </div>
            </div>

            {/* card 2  */}
            <div className='w-80'>
              {/* header  */}
              <div className='bg-[#0EB7AD] flex justify-center rounded-tl rounded-tr py-2 '>
                <img src="/src/assets/img/sun.png" alt="" />
              </div>

              {/* content  */}
              <div className='flex flex-col gap-4 p-3 bg-[#3A9B38] rounded-bl rounded-br shadow-lg'>
                <h3 className='text-2xl font-bold text-center text-[#FAFF00]'>Sol Pleno</h3>
                <h4 className='text-lg font-semibold text-white'>O que é Sol Pleno?</h4>
                <p className='font-medium text-white'>O Sol Pleno, é quando a planta está exposto aos raios de luz do sol. O exemplo disso são as suculentas a maioria delas curtem esse tipo de luminosidade. Tem que tomar cuidado para não exagerar, nem todas as espécies de suculentas aguentam por muito tempo.</p>
              </div>
            </div>

            {/* card 3  */}
            <div className='w-80'>
              {/* header  */}
              <div className='bg-[#074541] flex justify-center rounded-tl rounded-tr py-2 '>
                <img src="/src/assets/img/shadow.png" alt="" />
              </div>

              {/* content  */}
              <div className='flex flex-col gap-4 p-3 bg-[#3A9B38] rounded-bl rounded-br shadow-lg'>
                <h3 className='text-2xl font-bold text-center text-[#17FFF1]'><span className='text-[#FAFF00]'>Meia</span> Sombra</h3>
                <h4 className='text-lg font-semibold text-white'>O que é Meia Sombra?</h4>
                <p className='font-medium text-white'>Como o nome já diz, essa planta curte um pouco de sol direta e um pouco de sombra, para não complicar recomendo colocar essa planta em um local que tenha uma cortina filtrando a luz do sol.</p>
              </div>
            </div>
          </div>


        </section>

        {/* seção 3 */}
        <section className='h-[75vh]'>
          <div className='flex justify-between items-center  py-5 px-24'>
            <h3 className='text-4xl font-semibold'>Saiba como adubar!</h3>
            <p className='font-medium text-lg w-[50vw]'>Para manter que a sua planta fique verdinha e saudável, ela precisa consumir 13 nutrientes e não exagere na dose se você exagerar o ph do solo irá aumentar e ficar alcalino.</p>
          </div>
          <div className='px-24 flex gap-5'>
            <img src="/src/assets/img/plantando.png" alt="" />
            <div className='w-72'>
              <div>
                <h3 className='text-4xl font-semibold text-center py-5 bg-[#27931E] text-white rounded-t-xl'>30ºC</h3>
                <div className='flex flex-col bg-[#1C511B] items-start justify-between rounded-b-xl text-white h-48'>
                  <p className='font-medium text-center pt-5'>A temperatura da sua região está quente!</p>
                  <button className='bg-[#2EAC23] flex justify-between items-center font-semibold gap-5 py-3 px-5 rounded-bl-xl rounded-tr-xl hover:bg-[#329629] transition-all'>
                    Saiba mais! <MoveRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className='flex justify-between px-24 items-center py-5 bg-[#D7FFD0]'>
        <img src="/src/assets/img/logo.png" alt="" />
        <p className='font-medium text-lg'>Copyright© 2024</p>
      </footer>
    </>
  )
}

export default Home
