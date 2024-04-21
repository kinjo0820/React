import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className='text-gray-700 border-b border-gray-400'>
      <div className='container flex mx-auto p-5 flex-col md:flex-row mb-4 md:mb-0 items-center'>
        <a href=""className='font-medium text-gray-900'>
          <span className='text-xl ml-3'>Profile</span>
        </a>
        <nav className='md:ml-auto text-base'>
          <a href="#home" className='mr-5 hover:text-blue-500 duration-300'>Home</a>
          <a href="#about" className='mr-5 hover:text-blue-500 duration-300'>About</a>
          <a href="" className='mr-5 hover:text-blue-500 duration-300'>Skills</a>
          <a href="" className=' hover:text-blue-500 duration-300'>Blog</a>
        </nav>
      </div>
    </header>

    <section className='text-gray-700' id='home'>
      <div className='flex container mx-auto md:py-16 py-8 px-5 flex-col md:flex-row items-center justify-center'>
        <div className='md:w-1/2 mb-16 lg:pr-24 md:pr-16 text-center md:text-left' >
          <h1 className='text-3xl sm:text-6xl text-gray-800 font-medium mb-4'>
            Hello<br/>
            I'm champloo <br/>
            WEB Developer
          </h1>
          <p className='mb-8 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores error earum, ab suscipit deleniti repellat unde quas pariatur sit eveniet?</p>
          <button className='text-white bg-green-600 py-2 px-6 border-0 rounded text-lg hover:bg-green-500 duration-500'>Contct</button>
        </div>
        <div className=' md:w-1/2 lg max-w-sm'>
          <img src="./img/tyler-nix-8youKEwX0vY-unsplash.jpg" alt="" />
        </div>
      </div>
    </section>

    <section className='text-gray-700 border-t border-gray-300' id='about'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center mb-20 '>
          <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-800'>
            About me
          </h1>
          <p className='pb-10 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, voluptas molestias exercitationem voluptatibus ea libero a cupiditate perferendis id reprehenderit?</p>
          <p className='text-left'> epellat accusantium iure impedit officia provident delectus earum voluptates error ipsum quod? Quas voluptate porro doloribus dolor modi molestias iste officiis corporis similique fuga, deleniti quos rem. Fugiat quasi neque illo doloribus hic reiciendis, incidunt temporibus asperiores unde facilis blanditiis, nobis atque porro nulla qui natus labore molestiae minus laudantium ratione possimus! Cupiditate impedit aliquid ad eos corrupti esse sit doloribus in vel? A voluptatibus praesentium quo, provident placeat?</p>
        </div>
        {/* card */}
        <div className='flex flex-wrap'>
          <div className='md:w-1/3 p-4'>
            <div className='bg-slate-200 rounded-lg p-5'>
              <div className='flex items-center mb-2'>
                <div className='text-white mr-2'>
                  <svg width="40px" height="40px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M854.7 828.1H169.9c-38.9 0-70.5-31.6-70.5-70.5v-499c0-38.9 31.6-70.5 70.5-70.5h684.7c38.9 0 70.5 31.6 70.5 70.5v499c0.1 38.9-31.5 70.5-70.4 70.5z" fill="#FFFFFF" /><path d="M885.2 258.1c0-16.5-13.5-30-30-30H169.4c-16.5 0-30 13.5-30 30v120.1h745.7V258.1z m-649.7 96.1c-28.2 0-51.2-23-51.2-51.2s23-51.2 51.2-51.2 51.2 23 51.2 51.2-22.9 51.2-51.2 51.2z m281.8-6.8H374.7c-24.1 0-43.7-19.6-43.7-43.7s19.6-43.7 43.7-43.7h142.6c24.1 0 43.7 19.6 43.7 43.7s-19.6 43.7-43.7 43.7z" fill="#E6E6E6" /><path d="M213.3 752.8h298.8c5.5 0 10-4.5 10-10s-4.5-10-10-10H213.3c-8.5 0-15.4-6.9-15.4-15.4V524.6c0-5.5-4.5-10-10-10s-10 4.5-10 10v192.9c0.1 19.4 15.9 35.3 35.4 35.3z" fill="#06F3FF" /><path d="M235.5 271.8c-17.2 0-31.2 14-31.2 31.2s14 31.2 31.2 31.2 31.2-14 31.2-31.2-14-31.2-31.2-31.2z" fill="#FFFFFF" /><path d="M235.5 251.8c-28.2 0-51.2 23-51.2 51.2s23 51.2 51.2 51.2 51.2-23 51.2-51.2-22.9-51.2-51.2-51.2z m0 82.4c-17.2 0-31.2-14-31.2-31.2s14-31.2 31.2-31.2 31.2 14 31.2 31.2-14 31.2-31.2 31.2z" fill="#005BFF" /><path d="M517.3 280.1H374.7c-13 0-23.7 10.6-23.7 23.7s10.6 23.7 23.7 23.7h142.6c13 0 23.7-10.6 23.7-23.7s-10.7-23.7-23.7-23.7z" fill="#FFFFFF" /><path d="M517.3 260.1H374.7c-24.1 0-43.7 19.6-43.7 43.7s19.6 43.7 43.7 43.7h142.6c24.1 0 43.7-19.6 43.7-43.7s-19.6-43.7-43.7-43.7z m0 67.3H374.7c-13 0-23.7-10.6-23.7-23.7s10.6-23.7 23.7-23.7h142.6c13 0 23.7 10.6 23.7 23.7s-10.7 23.7-23.7 23.7z" fill="#005BFF" /><path d="M855.2 188.1H169.4c-38.6 0-70 31.4-70 70v500c0 38.6 31.4 70 70 70h685.7c38.6 0 70-31.4 70-70v-500c0.1-38.6-31.3-70-69.9-70z m30 570c0 16.5-13.5 30-30 30H169.4c-16.5 0-30-13.5-30-30V398.2h745.7v359.9z m0-379.9H139.5V258.1c0-16.5 13.5-30 30-30h685.7c16.5 0 30 13.5 30 30v120.1z" fill="#005BFF" /><path d="M459.9 624.6l-114.3-45.3 114.3-43.7v-46.5L296.1 560v39.5l163.8 71.2zM568.7 454.8h-34.4L475.1 702h33.8zM747.9 560.3l-164-70.9v45.8l114.4 44.5-114.4 45v46.2l164-71.4z" fill="#005BFF" /></svg>
                </div>
                <h2 className='text-gray-800 text-lg font-medium'>WEB developer</h2>
              </div>
              <div>
                <p> Repellat, expedita quasi cum ipsa vero reiciendis nobis natus ducimus laboriosam exercitationem. Quibusdam aut harum doloremque ipsa consequatur, veritatis aliquid nemo qui amet! Voluptate rerum, hic dignissimos beatae error in ab alias veniam et dolorem distinctio tenetur ut iste magnam accusamus enim cum laudantium praesentium voluptates quo? Dicta quas sint </p>
                <a href="#" className='mt-3 text-green-900'>
                  see more →
                </a>
              </div>
            </div>
          </div>

          <div className='md:w-1/3 p-4'>
            <div className='bg-slate-200 rounded-lg p-5'>
              <div className='flex items-center mb-2'>
                <div className='text-white mr-2'>
                  <svg width="40px" height="40px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M854.7 828.1H169.9c-38.9 0-70.5-31.6-70.5-70.5v-499c0-38.9 31.6-70.5 70.5-70.5h684.7c38.9 0 70.5 31.6 70.5 70.5v499c0.1 38.9-31.5 70.5-70.4 70.5z" fill="#FFFFFF" /><path d="M885.2 258.1c0-16.5-13.5-30-30-30H169.4c-16.5 0-30 13.5-30 30v120.1h745.7V258.1z m-649.7 96.1c-28.2 0-51.2-23-51.2-51.2s23-51.2 51.2-51.2 51.2 23 51.2 51.2-22.9 51.2-51.2 51.2z m281.8-6.8H374.7c-24.1 0-43.7-19.6-43.7-43.7s19.6-43.7 43.7-43.7h142.6c24.1 0 43.7 19.6 43.7 43.7s-19.6 43.7-43.7 43.7z" fill="#E6E6E6" /><path d="M213.3 752.8h298.8c5.5 0 10-4.5 10-10s-4.5-10-10-10H213.3c-8.5 0-15.4-6.9-15.4-15.4V524.6c0-5.5-4.5-10-10-10s-10 4.5-10 10v192.9c0.1 19.4 15.9 35.3 35.4 35.3z" fill="#06F3FF" /><path d="M235.5 271.8c-17.2 0-31.2 14-31.2 31.2s14 31.2 31.2 31.2 31.2-14 31.2-31.2-14-31.2-31.2-31.2z" fill="#FFFFFF" /><path d="M235.5 251.8c-28.2 0-51.2 23-51.2 51.2s23 51.2 51.2 51.2 51.2-23 51.2-51.2-22.9-51.2-51.2-51.2z m0 82.4c-17.2 0-31.2-14-31.2-31.2s14-31.2 31.2-31.2 31.2 14 31.2 31.2-14 31.2-31.2 31.2z" fill="#005BFF" /><path d="M517.3 280.1H374.7c-13 0-23.7 10.6-23.7 23.7s10.6 23.7 23.7 23.7h142.6c13 0 23.7-10.6 23.7-23.7s-10.7-23.7-23.7-23.7z" fill="#FFFFFF" /><path d="M517.3 260.1H374.7c-24.1 0-43.7 19.6-43.7 43.7s19.6 43.7 43.7 43.7h142.6c24.1 0 43.7-19.6 43.7-43.7s-19.6-43.7-43.7-43.7z m0 67.3H374.7c-13 0-23.7-10.6-23.7-23.7s10.6-23.7 23.7-23.7h142.6c13 0 23.7 10.6 23.7 23.7s-10.7 23.7-23.7 23.7z" fill="#005BFF" /><path d="M855.2 188.1H169.4c-38.6 0-70 31.4-70 70v500c0 38.6 31.4 70 70 70h685.7c38.6 0 70-31.4 70-70v-500c0.1-38.6-31.3-70-69.9-70z m30 570c0 16.5-13.5 30-30 30H169.4c-16.5 0-30-13.5-30-30V398.2h745.7v359.9z m0-379.9H139.5V258.1c0-16.5 13.5-30 30-30h685.7c16.5 0 30 13.5 30 30v120.1z" fill="#005BFF" /><path d="M459.9 624.6l-114.3-45.3 114.3-43.7v-46.5L296.1 560v39.5l163.8 71.2zM568.7 454.8h-34.4L475.1 702h33.8zM747.9 560.3l-164-70.9v45.8l114.4 44.5-114.4 45v46.2l164-71.4z" fill="#005BFF" /></svg>
                </div>
                <h2 className='text-gray-800 text-lg font-medium'>WEB developer</h2>
              </div>
              <div>
                <p> Repellat, expedita quasi cum ipsa vero reiciendis nobis natus ducimus laboriosam exercitationem. Quibusdam aut harum doloremque ipsa consequatur, veritatis aliquid nemo qui amet! Voluptate rerum, hic dignissimos beatae error in ab alias veniam et dolorem distinctio tenetur ut iste magnam accusamus enim cum laudantium praesentium voluptates quo? Dicta quas sint </p>
                <a href="#" className='mt-3 text-green-900'>
                  see more →
                </a>
              </div>
            </div>
          </div>

          <div className='md:w-1/3 p-4'>
            <div className='bg-slate-200 rounded-lg p-5'>
              <div className='flex items-center mb-2'>
                <div className='text-white mr-2'>
                  <svg width="40px" height="40px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M854.7 828.1H169.9c-38.9 0-70.5-31.6-70.5-70.5v-499c0-38.9 31.6-70.5 70.5-70.5h684.7c38.9 0 70.5 31.6 70.5 70.5v499c0.1 38.9-31.5 70.5-70.4 70.5z" fill="#FFFFFF" /><path d="M885.2 258.1c0-16.5-13.5-30-30-30H169.4c-16.5 0-30 13.5-30 30v120.1h745.7V258.1z m-649.7 96.1c-28.2 0-51.2-23-51.2-51.2s23-51.2 51.2-51.2 51.2 23 51.2 51.2-22.9 51.2-51.2 51.2z m281.8-6.8H374.7c-24.1 0-43.7-19.6-43.7-43.7s19.6-43.7 43.7-43.7h142.6c24.1 0 43.7 19.6 43.7 43.7s-19.6 43.7-43.7 43.7z" fill="#E6E6E6" /><path d="M213.3 752.8h298.8c5.5 0 10-4.5 10-10s-4.5-10-10-10H213.3c-8.5 0-15.4-6.9-15.4-15.4V524.6c0-5.5-4.5-10-10-10s-10 4.5-10 10v192.9c0.1 19.4 15.9 35.3 35.4 35.3z" fill="#06F3FF" /><path d="M235.5 271.8c-17.2 0-31.2 14-31.2 31.2s14 31.2 31.2 31.2 31.2-14 31.2-31.2-14-31.2-31.2-31.2z" fill="#FFFFFF" /><path d="M235.5 251.8c-28.2 0-51.2 23-51.2 51.2s23 51.2 51.2 51.2 51.2-23 51.2-51.2-22.9-51.2-51.2-51.2z m0 82.4c-17.2 0-31.2-14-31.2-31.2s14-31.2 31.2-31.2 31.2 14 31.2 31.2-14 31.2-31.2 31.2z" fill="#005BFF" /><path d="M517.3 280.1H374.7c-13 0-23.7 10.6-23.7 23.7s10.6 23.7 23.7 23.7h142.6c13 0 23.7-10.6 23.7-23.7s-10.7-23.7-23.7-23.7z" fill="#FFFFFF" /><path d="M517.3 260.1H374.7c-24.1 0-43.7 19.6-43.7 43.7s19.6 43.7 43.7 43.7h142.6c24.1 0 43.7-19.6 43.7-43.7s-19.6-43.7-43.7-43.7z m0 67.3H374.7c-13 0-23.7-10.6-23.7-23.7s10.6-23.7 23.7-23.7h142.6c13 0 23.7 10.6 23.7 23.7s-10.7 23.7-23.7 23.7z" fill="#005BFF" /><path d="M855.2 188.1H169.4c-38.6 0-70 31.4-70 70v500c0 38.6 31.4 70 70 70h685.7c38.6 0 70-31.4 70-70v-500c0.1-38.6-31.3-70-69.9-70z m30 570c0 16.5-13.5 30-30 30H169.4c-16.5 0-30-13.5-30-30V398.2h745.7v359.9z m0-379.9H139.5V258.1c0-16.5 13.5-30 30-30h685.7c16.5 0 30 13.5 30 30v120.1z" fill="#005BFF" /><path d="M459.9 624.6l-114.3-45.3 114.3-43.7v-46.5L296.1 560v39.5l163.8 71.2zM568.7 454.8h-34.4L475.1 702h33.8zM747.9 560.3l-164-70.9v45.8l114.4 44.5-114.4 45v46.2l164-71.4z" fill="#005BFF" /></svg>
                </div>
                <h2 className='text-gray-800 text-lg font-medium'>WEB developer</h2>
              </div>
              <div>
                <p> Repellat, expedita quasi cum ipsa vero reiciendis nobis natus ducimus laboriosam exercitationem. Quibusdam aut harum doloremque ipsa consequatur, veritatis aliquid nemo qui amet! Voluptate rerum, hic dignissimos beatae error in ab alias veniam et dolorem distinctio tenetur ut iste magnam accusamus enim cum laudantium praesentium voluptates quo? Dicta quas sint </p>
                <a href="#" className='mt-3 text-green-900'>
                  see more →
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </div>

    </section>


      <div className='flex mt-96'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
     
    </>
  )
}

export default App
