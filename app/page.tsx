import CardWb from '@/components/card-wb'
import Filter from '@/components/filter/page'
import CardComplex from '@/components/ui/card-complex'
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




        {/* <CardCompex name={'ЖК Раздолье'} street={'ул. Кочетова'} price={'От 5.4 млн'} imageUrl={'/main-card-compex-razdolje.png'}/> */}
      <div className="absolute inset-0 rounded-4xl overflow-hidden">
  <div className="h-30 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-dark40/50 [&::-webkit-scrollbar-thumb:hover]:bg-dark40 [&::-webkit-scrollbar-track]:bg-transparent [scrollbar-width:thin] [scrollbar-color:#404040_transparent]">
    <div className="bg-dark15 px-5 pt-8 pb-6 sm:px-8 sm:py-12">
      {/* ваш контент */}
      
        <p className='h-10 w-20 '>1</p>
        <p className='h-10 w-20 '>1</p>
        <p className='h-10 w-20 '>1</p>
        <p className='h-10 w-20 '>1</p>
        <p className='h-10 w-20 '>1</p>
        <p className='h-10 w-20 '>1</p>
        <p className='h-10 w-20 '>1</p>
      
      {/* кнопка внизу */}
      <div className="sticky bottom-0 left-4 z-10">
        {/* <Button text="Перейти на страницу ЖК" size="md" variant="accent" /> */}
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
