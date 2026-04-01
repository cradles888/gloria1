'use client'
import Filter from "@/components/filter/page";
import ButtonDropdown from "@/components/ui/button-dropdown";
import ComplexSelector from "@/components/complex-selector";
import { useState } from "react";
// import AppartmentCard from "@/components/appartment-card";

export default function Appartments() {
    const [selectedComplex, setSelectedComplex] = useState('ЖК Юннатов');
    
    const listComplex = [
        { name: 'ЖК Юннатов' },
        { name: 'ЖК Раздолье' },
        { name: 'ЖК Шелонская' }
    ];

    const allAppartments = [
        { 
            id: '1', 
            rooms: '2', 
            sqm: '45.7', 
            price: '7780000', 
            price_sqm: '171240', 
            imageUrl: '/appartments/2-45.7.jpg', 
            position: '1', 
            floor: '4', 
            floor_total: '8' 
        },
        // ... другие квартиры
    ];

    return (
        <div className="container-padding mx-auto">
            <div className="text-center my-30">
                <h1 className="text-4xl md:text-5xl text-dark px-4">
                    Квартиры в
                    <ComplexSelector
                        selectedComplex={selectedComplex}
                        onSelect={setSelectedComplex}
                        options={listComplex}
                    />
                </h1>
            </div>

            <article>
                <Filter />
                <ButtonDropdown 
                    text={'Сортировать'} 
                    iconLink={'/chevron-arrow.svg'} 
                    iconAlt={'next-to-page'} 
                />
            </article>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {/* {allAppartments.map((appartment) => (
                    <AppartmentCard key={appartment.id} appartment={appartment} />
                ))} */}
            </div>
        </div>
    );
}