import React from 'react'
import HeroEducation from '../components/Education/HeroEducation'
import VideoEdu from '../components/Education/VideoEdu'
import Tutorial1 from '../assets/Tutorial1.svg'
import Tutorial2 from '../assets/Tutorial2.svg'
import Tutorial3 from '../assets/Tutorial3.svg'
import Tutorial4 from '../assets/Tutorial4.svg'
import Tutorial5 from '../assets/Tutorial5.svg'

export default function Education() {
    return (
        <div className='flex flex-col justify-center items-center w-full min-h-screen overflow-hidden'>
            <HeroEducation />
            <div className='flex flex-wrap justify-between items-center w-[90%] h-auto gap-10 my-24 '>
                <VideoEdu image={Tutorial1} heading="CARA MENDIRIKAN TENDA DOME KAPASITAS 4 ORANG " tittle="Hallo, siapa yang mau camping tapi belum bisa pasang atau mendirikan tenda dome? Jangan khawatir, memasang atau mendirikan tenda dome tidak sulit kok. " url="https://www.youtube.com/watch?v=4wH3cFhvzng" />
                <VideoEdu image={Tutorial2} heading="Solo Camping | Bersantai di Pinggir Sungai" tittle="Hallo, siapa yang mau camping tapi belum bisa pasang atau mendirikan tenda dome? Jangan khawatir, memasang atau mendirikan tenda dome tidak sulit kok. " url="https://www.youtube.com/watch?v=hcmVMBQyKEI" />
                <VideoEdu image={Tutorial3} heading="CARA PACKING CARRIER TERBARU 2022 | TAS GUNUNG FORESTER BARUN 45+5 LITER " tittle="Bagaimana sih cara packing untuk berkemah yang benar? Yuk, kita simak video ini untuk memperdalam ilmu kita dalam berkemah!. " url="https://www.youtube.com/watch?v=SnloRdOPb3k&t=25s" />
                <VideoEdu image={Tutorial4} heading="Cara Atasi Rembesan Samping Tenda | Camel Outdoor | Chanodug FX2028 | Alltrek Tentastic Outdoor " tittle="Tutorial lengkap dengan gambar untuk mengatasi tenda yang rembes saat berkemah. Yuk! simak videonya..." url="https://www.youtube.com/watch?v=yuJwBk69BsU" />
                <VideoEdu image={Tutorial5} heading="Perlengkapan Camping Untuk Pemula yang Ekonomis, Simple, Estetik, Nyaman | Tenda Glamping Murah" tittle="Di video kali ini saya mencoba mereview peralatan apa saja si yang kita bawa saat camping. " url="https://www.youtube.com/watch?v=wqYdwABNOAU" />
                <VideoEdu image={Tutorial1} heading="CARA MENDIRIKAN TENDA DOME KAPASITAS 4 ORANG " tittle="Hallo, siapa yang mau camping tapi belum bisa pasang atau mendirikan tenda dome? Jangan khawatir, memasang atau mendirikan tenda dome tidak sulit kok. " url="https://www.youtube.com/watch?v=4wH3cFhvzng" />

            </div>
        </div>
    )
}
