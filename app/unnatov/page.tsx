import Filter from "@/components/filter/page";
import ButtonDropdown from "@/components/ui/button-dropdown";
import { headers } from "next/headers";

export default function Unnatov() {
    return(
        <div>
            <div className="min-h-screen">
                <div className="h-full bg-[url(/unnatov/bg.png)] bg-no-repeat bg-cover top-0 w-full -z-10 absolute"></div>
                <div className="bg-gradient-to-b from-black/10 via-black/15 -z-10 to-transparent h-30 w-full absolute top-0"></div>
            <div className="bg-gradient-to-t from-black/2 via-black/10 -z-10 to-transparent h-100 w-full absolute bottom-0"></div>
                <div className="container-padding mx-auto py-24">
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-medium italic leading-12 md:leading-17">ЖК Юннатов<span className="font-light italic block">Уют, в котором хочется остаться</span></h1>
                </div>
            </div>
            <div className="container-padding mx-auto relative bottom-10">
            <Filter/>
            <ButtonDropdown text={'Сортировать'} iconLink={'/chevron-arrow.svg'} iconAlt={'next-to-page'} />
            </div>
            
        </div>

    )
}