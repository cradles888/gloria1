import Filter from "@/components/filter/page";
import Button from "@/components/ui/button";
import ButtonDropdown from "@/components/ui/button-dropdown";
import { headers } from "next/headers";
import Card from '@/components/unnatov/card'
import TouchSlider from "@/components/ui/touchSlider";
export default function Unnatov() {
    return(
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
            <Filter/>
            {/* <ButtonDropdown text={'Сортировать'} iconLink={'/chevron-arrow.svg'} iconAlt={'next-to-page'} /> */}
            </div>
            <div className="container-padding mx-auto mt-8 md:mt-16">
                <p className="text-black font-arial text-2xl sm:text-2xl md:text-[32px] mb-8">
                    ЖК “Юннатов”&nbsp;— жилой комплекс на&nbsp;Псковской. Рядом широко-развитая инфрастуктура: автовокзал, ж/д вокзал, спорт комплекс “Химик”, мед.учреждения, школы, детские сады и&nbsp;университет
                </p>
                <Button text="Выбрать квартиру" size={'lg'} variant={'dark'}/>
            </div>
            <article className="container-padding mx-auto grid gap-16 my-15 md:my-30 px-4 lg:px-0">
    {/* Первый блок: заголовок и описание */}
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-16 mb-16 lg:mb-0">
        <h3 className="text-2xl sm:text-[28px] lg:text-[32px] font-medium text-dark leading-[116%]">
            Популярные места в&nbsp;пешей доступности
        </h3>
        <p className="text-sm sm:text-base text-dark leading-[140%]">
            Жизнь здесь&nbsp;— это когда самое интересное начинается за&nbsp;порогом дома. 
            В&nbsp;нескольких минутах ходьбы&nbsp;— уютные кофейни, модные рестораны, парки для&nbsp;прогулок 
            и&nbsp;все ключевые точки вашего городского маршрута. Вам больше не&nbsp;нужен план 
            «на&nbsp;вечер»&nbsp;— он складывается сам собой, стоит только выйти на&nbsp;улицу.
        </p>
    </section>

    {/* Второй блок: карточки */}
    <section className="hidden lg:grid lg:grid-cols-[1.7fr_1fr_1fr] gap-6 lg:gap-8">
        <Card 
            title="Кремль" 
            timeFrom="10 минут пешком" 
            imageUrl={'/unnatov/kremlin.jpg'} 
            imageAlt={'Кремль'}
        />
        <Card 
            title="Театр драмы" 
            timeFrom="10 минут пешком" 
            imageUrl={'/unnatov/theatre.jpg'} 
            imageAlt={'Театр'}
        />
        <Card 
            title="Вокзал" 
            timeFrom="10 минут пешком" 
            imageUrl={'/unnatov/station.jpg'} 
            imageAlt={'Вокзал'}
        />
    </section>
    <article className="block lg:hidden"><TouchSlider>
                <Card 
            title="Кремль" 
            timeFrom="10 минут пешком" 
            imageUrl={'/unnatov/kremlin.jpg'} 
            imageAlt={'Кремль'}
        />
        <Card 
            title="Театр драмы" 
            timeFrom="10 минут пешком" 
            imageUrl={'/unnatov/theatre.jpg'} 
            imageAlt={'Театр'}
        />
        <Card 
            title="Вокзал" 
            timeFrom="10 минут пешком" 
            imageUrl={'/unnatov/station.jpg'} 
            imageAlt={'Вокзал'}
        />
    </TouchSlider></article>
</article>
        </div>

    )
}