import CardNews from "@/components/news/card-news";
import TouchSlider from "@/components/ui/touchSlider";

const newsModule = () => {
      const newsData = [
    {
      title: "Оправдана ли нелюбовь к квартирам на последнем этаже?",
      desc: "Инжинер развеял миф про последние этажи...",
      image: "/images/news/news1.png",
      alt: "нелюбовь_к_первым_этажам",
      isLike: true,
      date: "20 марта 2026",
    },
    {
      title: "Как выбрать идеальную квартиру?",
      desc: "Советы экспертов по планировке и расположению...",
      image: "/images/news/news2.png",
      alt: "выбор_квартиры",
      isLike: false,
      date: "19 марта 2026",
    },
    {
      title: "Топ-5 ошибок при покупке",
      desc: "На что обратить внимание перед подписанием договора...",
      image: "/images/news/news3.png",
      alt: "ошибки_покупки",
      isLike: true,
      date: "18 марта 2026",
    },
    {
      title: "Как работает ипотека в 2026 году?",
      desc: "Обзор программ и процентных ставок...",
      image: "/images/news/news2.png",
      alt: "ипотека",
      isLike: false,
      date: "17 марта 2026",
    },
    {
      title: "5 трендов в дизайне интерьера",
      desc: "Что будет актуально в этом году...",
      image: "/images/news/news1.png",
      alt: "тренды",
      isLike: true,
      date: "16 марта 2026",
    },
    {
      title: "Как не переплатить за квартиру?",
      desc: "Секреты от опытного риэлтора...",
      image: "/images/news/news3.png",
      alt: "секреты",
      isLike: false,
      date: "15 марта 2026",
    },
  ];
    return(
            <div className="container-padding mb-30 mx-auto grid gap-6">
        <h2 className="text-dark text-[28px] sm:text-[36px]">Новости</h2>
        <div className="">
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
    );
}

export default newsModule;