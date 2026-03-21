import CardWb from '@/components/card-wb'
import Filter from '@/components/filter/page'
import CardComplex from '@/components/ui/card-complex'
import CardNews from '@/components/card-news'
import TouchSlider from "@/components/touchSlider"
export default function Home() {
   const newsData = [
    {
      title: 'Оправдана ли нелюбовь к квартирам на последнем этаже?',
      desc: 'Инжинер развеял миф про последние этажи...',
      image: '/images/news/news1.png',
      alt: 'нелюбовь_к_первым_этажам',
      isLike: true,
      date: '20 марта 2026'
    },
    {
      title: 'Как выбрать идеальную квартиру?',
      desc: 'Советы экспертов по планировке и расположению...',
      image: '/images/news/news2.png',
      alt: 'выбор_квартиры',
      isLike: false,
      date: '19 марта 2026'
    },
    {
      title: 'Топ-5 ошибок при покупке',
      desc: 'На что обратить внимание перед подписанием договора...',
      image: '/images/news/news3.png',
      alt: 'ошибки_покупки',
      isLike: true,
      date: '18 марта 2026'
    },
    {
      title: 'Как работает ипотека в 2026 году?',
      desc: 'Обзор программ и процентных ставок...',
      image: '/images/news/news2.png',
      alt: 'ипотека',
      isLike: false,
      date: '17 марта 2026'
    },
    {
      title: '5 трендов в дизайне интерьера',
      desc: 'Что будет актуально в этом году...',
      image: '/images/news/news1.png',
      alt: 'тренды',
      isLike: true,
      date: '16 марта 2026'
    },
    {
      title: 'Как не переплатить за квартиру?',
      desc: 'Секреты от опытного риэлтора...',
      image: '/images/news/news3.png',
      alt: 'секреты',
      isLike: false,
      date: '15 марта 2026'
    }
  ];
  return (
    <div className="min-h-screen">
      <div className='grid lg:flex container-padding mx-auto gap-8 my-16'>
      <CardWb title={'Семейная ипотека от 6%'} text={'От наших партнёров — СберБанк · ВТБ '} image={'/wb-ipoteka.png'} alt={'wb-ipoteka'}/>
      <CardWb title={'Новые квартиры в ЖК Юннатов'} text={'Позиция №1 готова к заселению!'} image={'/wb-unnatov.png'} alt={'wb-unnatov'}/>
      </div>
      <div className='container-padding mx-auto my-30'>
        <h1 className='text-[32px] sm:text-5xl text-dark inline-block'>Новостройки <p className='text-accent font-medium inline-block'>в Великом Новгороде</p></h1>
        <Filter/>
      </div>
      <div className='container-padding grid mb-30 mx-auto gap-8'>
        <CardComplex name={'ЖК Юннатов'} street={'ул. Псковская'} price={'От 5.7 млн'} imageUrl={'/main-card-complex-unnatov.png'}/>
        <CardComplex name={'ЖК Раздолье'} street={'ул. Кочетова'} price={'От 5.4 млн'} imageUrl={'/main-card-compex-razdolje.png'}/>
      </div>
      <div className='container-padding mb-30 mx-auto grid gap-8'>
        <h2 className='text-dark text-[28px]'>Новости</h2>
        <div className=''>
          
          <TouchSlider>
 {newsData.map((news, idx) => (
          <CardNews
            key={idx}
            title={news.title}
            desc={news.desc}
            image={news.image}
            alt={news.alt}
            isLike={news.isLike}
            date={news.date}
          />
        ))}
        </TouchSlider>
      
          </div>
        
          </div>
    </div>
  );
}
