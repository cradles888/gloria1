import Filter from "@/components/filter/page";
import Button from "@/components/ui/button";
import ButtonDropdown from "@/components/ui/button-dropdown";
import TouchSlider from "@/components/ui/touchSlider";
// import FirstInfoBlock from '@/components/unnatov/first-info-block'
import UniInfoBlock from '@/components/unnatov/uni-info-block'
import { formatText } from '@/utils/text-format'
import { formatTextWithBreaks } from '@/utils/text-format'
// import SliderFullScreen from '@/components/touch-slider-full-screen'
import SliderFullScreen from '@/components/swiper/swiper-fast'
import FreemodeSlider from '@/components/swiper/swiper-freemode'

export default function Unnatov() {
    const interiorClient = [
        {title: '', sqm: '', imageUrl: '/unnatov/.jpg', imageAlt: ''},
        {title: '', sqm: '', imageUrl: '/unnatov/.jpg', imageAlt: ''},
        {title: '', sqm: '', imageUrl: '/unnatov/.jpg', imageAlt: ''},
    ]

    const popularLocation = [
        { title: 'Кремль', desc: '10 минут пешком', imageUrl: '/unnatov/kremlin.jpg', imageAlt: 'Кремль' },
        { title: 'Театр драмы', desc: '10 минут пешком', imageUrl: '/unnatov/theatre.jpg', imageAlt: 'Театр' },
        { title: 'Вокзал', desc: '10 минут пешком', imageUrl: '/unnatov/station.jpg', imageAlt: 'Вокзал' }
    ]

    const freemodeSwiper = [
        { title: 'Двор без машин', desc:'Эксклюзивная концепция', imageUrl: '/unnatov/no-car.jpg', imageAlt: 'двор_без_машин' },
        { title: 'Отделка из дерева', desc:'Экологичный материал', imageUrl: '/unnatov/finishing.jpg', imageAlt: 'отдекла_в_подъезде' },
        { title: 'Надежные и крепкие стены', desc:'Из полнотелого кирпича', imageUrl: '/unnatov/material.jpg', imageAlt: 'материал_стен' },
        { title: 'Абвгди', desc:'Абвгди', imageUrl: '/unnatov/slider1.jpg', imageAlt: 'вид_сверху' },
        { title: 'Абвгди', desc:'Абвгди', imageUrl: '/unnatov/slider1.jpg', imageAlt: 'вид_сверху' },
    ]


    const fullScreenSlider = [
        { src: '/unnatov/genplan.jpg', alt: 'вид_сверху' },
        { src: '/unnatov/slider1.jpg', alt: 'вид_сверху' },
        { src: '/unnatov/slider2.jpg', alt: 'вид_сверху' },
    ]

    const historicalLocations = [
        { title: 'Свято-Юрьев мужской монастырь', desc: '15 минут на машине', imageUrl: '/unnatov/monastery.jpg', imageAlt: 'Свято_Юрьев_мужской_монастырь' },
        { title: 'Аркада гостиного двора', desc: '20 минут пешком', imageUrl: '/unnatov/arcade.jpg', imageAlt: 'Аркада_гостиного_двора' },
        { title: 'Первая медицинская комиссия', desc: '3 минуты пешком', imageUrl: '/unnatov/ambulance-station.jpg', imageAlt: 'Первая_медицинская_комиссия' },
        { title: 'Станция скорой помощи', desc: '5 минут пешком', imageUrl: '/unnatov/medical-center.jpg', imageAlt: 'Станция_скорой_помощи' }
    ]

    const educationBlock = [
        { title: 'Школа №21 через дорогу', desc: '10 минут на машине', imageUrl: '/unnatov/school21.jpg', imageAlt: 'Школа_№21_через_дорогу' },
        { title: 'Детский сад “Ручеёк”', desc: '7 минут пешком', imageUrl: '/unnatov/kindergarten.jpg', imageAlt: 'Детский_сад_“Ручеёк' },
        { title: 'Торгово-технологический техникум', desc: '15 минут пешком', imageUrl: '/unnatov/technical-college.jpg', imageAlt: 'Торгово_технологический_техникум' },
        { title: 'Педагогический институт НовГУ', desc: '10 минут пешком', imageUrl: '/unnatov/institute.jpg', imageAlt: 'Педагогический_институт_НовГУ' }
    ]
    return (
        <div>
            <div className="min-h-screen">
                <div className="h-full bg-[url(/unnatov/bg.png)] bg-no-repeat bg-cover top-0 w-full -z-10 absolute"></div>
                <div className="bg-gradient-to-b from-black/10 via-black/15 -z-10 to-transparent h-30 w-full absolute top-0"></div>
                <div className="bg-gradient-to-t from-black/2 via-black/10 -z-10 to-transparent h-100 w-full absolute bottom-0"></div>
                <div className="container-padding mx-auto py-24">
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-medium italic leading-12 md:leading-17">ЖК Юннатов<span className="font-light italic block text-3xl sm:text-4l md:text-5xl">Уют, в котором хочется остаться</span></h1>
                </div>
            </div>
            <div className="container-padding mx-auto relative bottom-15">
                <Filter />
                {/* <ButtonDropdown text={'Сортировать'} iconLink={'/chevron-arrow.svg'} iconAlt={'next-to-page'} /> */}
            </div>

            <div className="container-padding mx-auto mt-8 md:mt-16">
                <p className="text-black font-arial text-2xl sm:text-2xl md:text-[32px] mb-8">
                    ЖК “Юннатов”&nbsp;— жилой комплекс на&nbsp;Псковской. Рядом широко-развитая инфрастуктура: автовокзал, ж/д вокзал, спорт комплекс “Химик”, мед.учреждения, школы, детские сады и&nbsp;университет
                </p>
                <Button text="Выбрать квартиру" size={'lg'} variant={'dark'} />
            </div>
            <div className="container-padding mx-auto my-15 md:my-30">
            <UniInfoBlock 
                title={formatText('Популярные места в&nbsp;пешей доступности')}
                desc={formatText(' Жизнь здесь&nbsp;— это когда самое интересное начинается за&nbsp;порогом дома. В&nbsp;нескольких минутах ходьбы&nbsp;— уютные кофейни, модные рестораны, парки для&nbsp;прогулок и&nbsp;все ключевые точки вашего городского маршрута. Вам больше не&nbsp;нужен план «на&nbsp;вечер»&nbsp;— он складывается сам собой, стоит только выйти на&nbsp;улицу.')}
                data={popularLocation}
                colOff={true}
                classNameCol="lg:grid-cols-[1.7fr_1fr_1fr]"
                />
            </div>
            <SliderFullScreen data={fullScreenSlider} />
            <div className="container-padding mx-auto my-30">
            <UniInfoBlock
                title={formatText('Инфраструктура и&nbsp;историческое окружение')}
                desc={formatText('Здесь гармонично соединяются дух прошлого и&nbsp;комфорт настоящего. Вы&nbsp;будете жить среди архитектурных памятников, впитывая атмосферу города, но&nbsp;при этом вам доступны все современные удобства: от&nbsp;супермаркетов и&nbsp;фитнес-центров до&nbsp;детских садов и&nbsp;клиник. Это лучшее из&nbsp;двух миров прямо за&nbsp;окном.')}
                data={historicalLocations}
            />
            <UniInfoBlock className="mt-30"
                title={formatTextWithBreaks('Образование<br/> Учёба для&nbsp;детей&nbsp;— рядом')}
                desc={formatText('Ваши дети смогут добираться до&nbsp;уроков, не&nbsp;тратя время на&nbsp;длинные переезды. В&nbsp;шаговой доступности от&nbsp;дома расположены детские сады, школы и&nbsp;развивающие центры. Это не&nbsp;только безопасность и&nbsp;экономия времени, но&nbsp;и&nbsp;возможность для&nbsp;ребёнка больше общаться с&nbsp;друзьями во&nbsp;дворе и&nbsp;глубже погружаться в&nbsp;учёбу и&nbsp;хобби.')}
                data={educationBlock}
            />

            <UniInfoBlock 
            className="mt-30"
            title={'Особенности проекта'} 
            desc={formatText(' Ваши дети смогут добираться до&nbsp;уроков, не&nbsp;тратя время на&nbsp;длинные&nbsp;переезды.В&nbsp;шаговой доступности от&nbsp;дома расположены детские&nbsp;сады, школы и&nbsp;развивающие&nbsp;центры. Это не&nbsp;только безопасность и&nbsp;экономия&nbsp;времени, но&nbsp;и&nbsp;возможность для&nbsp;ребёнка больше общаться с&nbsp;друзьями во&nbsp;дворе и&nbsp;глубже погружаться в&nbsp;учёбу и&nbsp;хобби.')} 
            data={freemodeSwiper} 
            slider={true}/>

            <UniInfoBlock title={''} desc={''} data={interiorClient}/>
            </div>
        </div>

    )
}