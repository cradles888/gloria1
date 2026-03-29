import Card from "@/components/unnatov/ui/card";
import TouchSlider from "@/components/ui/touchSlider";
import FreemodeSlider from "@/components/swiper/swiper-freemode";

const uniInfoBlock = ({ title, desc, data, slider = false, className = '' }) => {
    return (
        <article className={`${slider ? `${className}` : `lg:gap-16 my-15 md:my-30 ${className}`}`}>
            <section className={`grid md:grid-cols-[1fr_1.3fr] gap-8 lg:gap-16 mb-16 lg:mb-0 ${slider ? 'lg:mb-16' : ''}`}>
                <h3 className="text-xl md:text-[32px] font-medium text-dark leading-[116%]">
                    {title}
                </h3>
                <p className="text-base text-dark leading-[140%]">{desc}</p>
            </section>

            {slider ? (
                <FreemodeSlider data={data} />
            ) : (
                <div>
                    <section className="hidden lg:grid lg:grid-cols-2 gap-6">
                        {data.map((item, index) => (
                            <Card key={index}
                                {...item}
                            />
                        ))}
                    </section>
                    <article className="lg:hidden">
                        <FreemodeSlider data={data} type="default"/>
                    </article>
                </div>
            )}
        </article>
    );
};

export default uniInfoBlock;
