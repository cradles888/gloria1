import CardWb from '@/components/card-wb'
import Filter from '@/components/filter/page'
import CardComplex from '@/components/ui/card-complex'
import CardNews from '@/components/card-news'
export default function Home() {
  return (
    <div className="min-h-screen">
      <div className='grid lg:flex container-padding mx-auto gap-8 my-16'>
      <CardWb title={'Семейная ипотека от 6%'} text={'От наших партнёров — СберБанк · ВТБ '} image={'/wb-ipoteka.png'} alt={'wb-ipoteka'}/>
      <CardWb title={'Новые квартиры в ЖК Юннатов'} text={'Позиция №1 готова к заселению!'} image={'/wb-unnatov.png'} alt={'wb-unnatov'}/>
      </div>
      <div className='container-padding mx-auto my-30'>
        <h1 className='text-4xl sm:text-5xl text-dark inline-block'>Новостройки <p className='text-accent font-medium inline-block'>в Великом Новгороде</p></h1>
        <Filter/>
      </div>
      <div className='container-padding grid mb-30 mx-auto gap-8'>
        <CardComplex name={'ЖК Юннатов'} street={'ул. Псковская'} price={'От 5.7 млн'} imageUrl={'/main-card-complex-unnatov.png'}/>
        <CardComplex name={'ЖК Раздолье'} street={'ул. Кочетова'} price={'От 5.4 млн'} imageUrl={'/main-card-compex-razdolje.png'}/>
      </div>
      <div className='container-padding mb-30 mx-auto grid gap-8'>
        <h2 className='text-dark text-[40px]'>Новости</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6'>
          <CardNews 
          title={'Оправдана ли нелюбовь к квартирам на последнем этаже?'} 
          desc={'Инжинер ООО Глория развеял миф про последние этажи, почему стоит забыть про ... '}
          image={'/images/news/news1.png'}
          alt={'нелюбовь_к_первым_этажам'}
          isLike={true}
          date={'20 марта 2026'}

          />
                    <CardNews 
          title={'Оправдана ли нелюбовь к квартирам на последнем этаже?'} 
          desc={'Инжинер ООО Глория развеял миф про последние этажи, почему стоит забыть про ... '}
          image={'/images/news/news1.png'}
          alt={'нелюбовь_к_первым_этажам'}
          isLike={true}
          date={'20 марта 2026'}

          />
                    <CardNews 
          title={'Оправдана ли нелюбовь к квартирам на последнем этаже?'} 
          desc={'Инжинер ООО Глория развеял миф про последние этажи, почему стоит забыть про ... '}
          image={'/images/news/news1.png'}
          alt={'нелюбовь_к_первым_этажам'}
          isLike={true}
          date={'20 марта 2026'}

          />
                    <CardNews 
          title={'Оправдана ли нелюбовь к квартирам на последнем этаже?'} 
          desc={'Инжинер ООО Глория развеял миф про последние этажи, почему стоит забыть про ... '}
          image={'/images/news/news1.png'}
          alt={'нелюбовь_к_первым_этажам'}
          isLike={true}
          date={'20 марта 2026'}

          />
          </div>
        
          </div>
    </div>
  );
}
