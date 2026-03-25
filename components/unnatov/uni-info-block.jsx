import Card from "@/components/unnatov/ui/card";
import TouchSlider from "@/components/ui/touchSlider";

const uniInfoBlock = ({title, desc, dataObject}) => {
    return (
        <article className="container-padding mx-auto grid lg:gap-16 my-15 md:my-30 px-4 lg:px-0">
            <section className="grid md:grid-cols-[1fr_1.3fr] gap-8 lg:gap-16 mb-16 lg:mb-0">
                <h3 className="text-xl md:text-[32px] font-medium text-dark leading-[116%]">
                    {title}
                </h3>
                <p className="text-base text-dark leading-[140%]">
                    {desc}
                </p>
            </section>

            <div>
                <section className="hidden lg:grid lg:grid-cols-2 gap-6">
                    {dataObject.map((item, index) =>(   
                        <Card
                            key={index}
                                title={item.title}
                                timeFrom={item.timeFrom}
                                imageUrl={item.image}
                                imageAlt={item.alt}
                        />
                    ))}
                </section>
                <article className="block lg:hidden">
                    <TouchSlider>
                        {dataObject.map((item, index) =>(   
                        <Card
                            key={index}
                                title={item.title}
                                timeFrom={item.timeFrom}
                                imageUrl={item.image}
                                imageAlt={item.alt}
                        />
                    ))}
                    </TouchSlider>
                </article>
            </div>
        </article>
    );
};

export default uniInfoBlock;
