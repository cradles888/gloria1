'use client'
import Filter from "@/components/filter/page";
import ButtonDropdown from "@/components/ui/ButtonDropdown";
import ComplexSelector from "@/components/ComplexSelector";
import { useState } from "react";
import SliderSwitch from '@/components/ui/SliderSwitch'
import AppartmentCard from "@/components/ui/AppartmentCard";

export default function Appartments() {
    const [selectedComplex, setSelectedComplex] = useState('ЖК Юннатов');
    const [view, setView] = useState('grid');
    

    const selectParamChoice = (indexButton) => {
        setSelectedParam(indexButton)
    }

    const listComplex = [
        { name: 'ЖК Юннатов' },
        { name: 'ЖК Раздолье' },
        { name: 'ЖК Шелонская' }
    ];

    const allAppartments = [
        {
            id: '0',
            rooms: '2',
            sqm: '45.7',
            price: '7780000',
            priceSqm: '171240',
            imageUrl: '/apartments/2-45.7.jpg',
            imageAlt: 'fd',
            position: '1',
            floor: '4',
            floorTotal: '8'
        },
        {
            id: '1',
            rooms: '2',
            sqm: '45.7',
            price: '7780000',
            priceSqm: '171240',
            imageUrl: '/apartments/2-45.7.jpg',
            imageAlt: 'fd',
            position: '1',
            floor: '4',
            floorTotal: '8'
        },
        {
            id: '2',
            rooms: '2',
            sqm: '45.7',
            price: '7780000',
            priceSqm: '171240',
            imageUrl: '/apartments/2-45.7.jpg',
            imageAlt: 'fd',
            position: '1',
            floor: '4',
            floorTotal: '8'
        },
        {
            id: '3',
            rooms: '2',
            sqm: '45.7',
            price: '7780000',
            priceSqm: '171240',
            imageUrl: '/apartments/2-45.7.jpg',
            imageAlt: 'fd',
            position: '1',
            floor: '4',
            floorTotal: '8'
        },
        {
            id: '4',
            rooms: '2',
            sqm: '45.7',
            price: '7780000',
            priceSqm: '171240',
            imageUrl: '/apartments/2-45.7.jpg',
            imageAlt: 'fd',
            position: '1',
            floor: '4',
            floorTotal: '8'
        },
        {
            id: '5',
            rooms: '2',
            sqm: '45.7',
            price: '7780000',
            priceSqm: '171240',
            imageUrl: '/apartments/2-45.7.jpg',
            imageAlt: 'fd',
            position: '1',
            floor: '4',
            floorTotal: '8'
        },
        {
            id: '6',
            rooms: '2',
            sqm: '45.7',
            price: '7780000',
            priceSqm: '171240',
            imageUrl: '/apartments/2-45.7.jpg',
            imageAlt: 'fd',
            position: '1',
            floor: '4',
            floorTotal: '8'
        },
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

            <div className="flex justify-end">
            <SliderSwitch view={view} setView={setView}/>
            </div>
            <div className={`${view == 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6' : 'grid gap-6'} my-16`}>
                {allAppartments.map((item, index) => (
                    <AppartmentCard view={view} key={index} {...item} />
                ))}
            </div>
        </div>
    );
}