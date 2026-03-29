import CardNews from "@/components/news/card-news";
import TouchSlider from "@/components/ui/touchSlider";
import FreemodeSlider from "@/components/swiper/swiper-freemode";

const newsModule = () => {
  const newsData = [
    {
      title: "Оправдана ли нелюбовь к квартирам на последнем этаже?",
      desc: "Инжинер развеял миф про последние этажи...",
      imageUrl: "/images/news/news1.png",
      imageAlt: "нелюбовь_к_первым_этажам",
      date: "20 марта 2026",
    },
    {
      title: "Как выбрать идеальную квартиру?",
      desc: "Советы экспертов по планировке и расположению...",
      imageUrl: "/images/news/news2.png",
      imageAlt: "выбор_квартиры",
      date: "19 марта 2026",
    },
    {
      title: "Топ-5 ошибок при покупке",
      desc: "На что обратить внимание перед подписанием договора...",
      imageUrl: "/images/news/news3.png",
      imageAlt: "ошибки_покупки",
      date: "18 марта 2026",
    },
    {
      title: "Как работает ипотека в 2026 году?",
      desc: "Обзор программ и процентных ставок...",
      imageUrl: "/images/news/news2.png",
      imageAlt: "ипотека",
      date: "17 марта 2026",
    },
    {
      title: "5 трендов в дизайне интерьера",
      desc: "Что будет актуально в этом году...",
      imageUrl: "/images/news/news1.png",
      imageAlt: "тренды",
      date: "16 марта 2026",
    },
    {
      title: "Как не переплатить за квартиру?",
      desc: "Секреты от опытного риэлтора...",
      imageUrl: "/images/news/news3.png",
      imageAlt: "секреты",
      date: "15 марта 2026",
    },
  ];
  return (
    <div>
      <h2 className="text-dark text-[28px] font-medium sm:text-[36px] mb-12 border-b border-dark40 pb-4">Новости</h2>
      <div className="">
        <FreemodeSlider data={newsData} type="news" />
        {/* <TouchSlider>
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
          </TouchSlider> */}
      </div>
    </div>
  );
}

export default newsModule;