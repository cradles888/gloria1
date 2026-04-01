import { formatted } from '@/utils/formatPrice'

const AppartmentCard = ({
    id,
    rooms,
    sqm,
    price,
    priceSqm,
    imageUrl,
    imageAlt,
    position,
    floor,
    floorTotal,
}) => {

    const formattedPrice = formatted(price)
    const formattedSqm = formatted(sqm)
    const formattedPriceSqm = formatted(priceSqm)

    return(
        <article className="bg-dark10 p-6 rounded-3xl cursor-pointer">
    <header className="grid gap-1">
        <div className="flex justify-between">
            <h3 className="text-xl text-dark font-medium">{rooms} комнаты, {formattedSqm} м<sup>2</sup></h3>
            <div className=" justify-items-end">
                <p className="bg-dark15 rounded-lg text-dark px-2 py-1">№{id}</p>
            </div>
        </div>
    <div className="flex items-center gap-1">
        <p className="text-2xl text-accent font-medium">{formattedPrice}</p>
        <p className="text-xl text-dark80">·</p>
        <p className="text-sm text-dark80">{formattedPriceSqm} м<sup>2</sup></p>
    </div>
    
    <div>
        <p className="text-sm text-dark80">Ипотека от 37 832 ₽ в мес.</p>
    </div>
    </header>
    
    
    <div className="my-10">
        <img className="mix-blend-multiply" src={imageUrl} alt={imageAlt} />
    </div>
    
    <footer className="flex items-center gap-1">
        <p className="text-dark text-base">Позиция {position}</p>
        <p className="text-xl text-dark80">·</p>
        <p className="text-dark text-base">Этаж {floor} из {floorTotal}</p>
    </footer>
</article>
    );
}

export default AppartmentCard;