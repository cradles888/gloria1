'use client'
import { useState } from 'react';
import ButtonParam from '@/components/filter/ui/button-select-param'
import Button from '@/components/ui/button';
import Range from '@/components/filter/ui/range';

const filter = () => {

    const [valueParam, setValueParam] = useState('')
    const [stateParam, setStateParam] = useState([])

    const handleParamClick = (paramData) => {

        setStateParam(prev => {
            if (paramData.isActive) {
                return [...prev, paramData.value];
            } else {
                return prev.filter(value => value !== paramData.value);
            }
        });
    }

    const closeParamClick = (indexToDrop) => {
        setStateParam(prev => prev.filter((_, index) => index !== indexToDrop))
    }

    return (
        <div className='my-6 grid gap-6'>
            <div className='grid gap-8 lg:gap-0 lg:flex items-center justify-between'>
                <div className='flex flex-wrap gap-2 gap-y-4'>
                    <ButtonParam text={'1'} onButtonClick={handleParamClick} activeParams={stateParam} />
                    <ButtonParam text={'2'} onButtonClick={handleParamClick} activeParams={stateParam} />
                    <ButtonParam text={'3'} onButtonClick={handleParamClick} activeParams={stateParam} />
                    <ButtonParam text={'4+'} onButtonClick={handleParamClick} activeParams={stateParam} />
                    <Range />
                    <Button text='Ещё фильтры' size={'sm_2xl'} variant={'outline'} icon={true} iconUrl='/chevron-arrow.svg' iconClassName='w-6 h-6' className='content-center ' />
                </div>
                <div className='hidden lg:block'>
                    <Button text='Показать предложения' size={'sm_2xl'} variant={'accent'} className='content-center' />
                </div>
            </div>
            
                {stateParam.length > 0 && (
                    <div className='flex gap-2 flex-wrap'> {stateParam.map((text, index) => (
                        <div key={index} className='flex gap-2 items-center content-center bg-accent40 h-10 px-5 text-sm text-dark rounded-4xl'>
                            {`${text}-комнатные`}
                            <img src="/close.svg" alt="close" width={'16px'} onClick={() => closeParamClick(index)} />
                        </div>
                    ))}</div>
                )}
            
            <div className='block lg:hidden'>
                <Button text='Показать предложения' size={'md'} variant={'accent'} className='content-center' />
            </div>
        </div>
    )
}

export default filter;