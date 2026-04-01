import CardWb from "@/components/card-wb";
import Filter from "@/components/filter/page";
import CardComplex from "@/components/ui/CardComplex";
import ButtonDropdown from '@/components/ui/ButtonDropdown'
import NewsModule from "@/components/news/news-module-block/page";
export default function Home() {

  return (
    <div className="min-h-screen">
      <div className="grid lg:flex container-padding mx-auto gap-8 my-16">
        <CardWb
          title={"Семейная ипотека от 6%"}
          text={"От наших партнёров — СберБанк · ВТБ "}
          image={"/wb-ipoteka.png"}
          alt={"wb-ipoteka"}
        />
        <CardWb
          title={"Новые квартиры в ЖК Юннатов"}
          text={"Позиция №1 готова к заселению!"}
          image={"/wb-unnatov.png"}
          alt={"wb-unnatov"}
        />
      </div>
      <div className="container-padding mx-auto mt-30 mb-14">
        <h1 className="text-[32px] font-medium sm:text-4xl text-dark pb-4 inline-block border-b border-dark40 w-full">
          Новостройки{" "}
          <p className="text-accent  inline-block">
            в Великом Новгороде
          </p>
        </h1>
        <div className="grid">
        <Filter />
          {/* <ButtonDropdown text={'Сортировать'} iconLink={'/chevron-arrow.svg'} iconAlt={'next-to-page'} /> */}
        </div>
      </div>
      <div className="container-padding grid  mb-30 mx-auto gap-8">
        <h2 className="text-3xl text-dark font-medium">Популярные проекты</h2>
        <CardComplex
          name={"ЖК Юннатов"}
          street={"ул. Псковская"}
          price={"От 5.7 млн"}
          imageUrl={"/main-card-complex-unnatov.png"}
          imageAlt={'Жилой комплекс Юннатов'}
          linkToPage={'/unnatov'}
        />
        <CardComplex
          name={"ЖК Раздолье"}
          street={"ул. Кочетова"}
          price={"От 5.4 млн"}
          imageUrl={"/main-card-compex-razdolje.png"}
                    imageAlt={'Жилой комплекс Раздолье'}
          linkToPage={'/razdolie'}
        />
      </div>
      <div className="container-padding mx-auto mb-30">
      <NewsModule/>
      </div>
    </div>
  );
}
