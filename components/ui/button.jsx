'use client'

import { useRouter } from "next/navigation"


const Button = ({
    text='',
    size,
    variant,
    className='',
    isLoading = false,
    disabled,
    linkToPage = '',
    icon = false,
    iconUrl = '',
    iconAlt = '',
    iconClassName = ''
    }) => {
        const variants = {
            accent: 'bg-accent text-white',
            white:  'bg-white text-dark',
            outline: 'bg-transparent border border-dark40',
        }
        
        const sizes = {
            sm: 'px-6 py-2 text-md rounded-4xl',
            sm_l: 'px-6 h-12 text-md rounded-4xl',
            sm_2xl: 'px-6 h-14 text-md rounded-4xl',
            md: 'px-8 h-12 text-md rounded-4xl',
            lg: 'text-md rounded-4xl',
            xl: '',
            
        }
        
    const router = useRouter();
    const handleClick = () => {
        if (isLoading || disabled) return;
        router.push(linkToPage)
    }

    return(
            <button className={`
                min-w-max
                active:scale-95
                duration-200
                hover:bg-dark15
                hover:text-dark 
                        ${variants[variant]}
                        ${sizes[size]}
                        ${className}
                        ${isLoading ? 'cursor-wait opacity-70' : ''}
                        ${icon ? 'flex gap-1.5 items-center' : ''}
                    `}
                    disabled={isLoading || disabled}
                    onClick={handleClick}>
                        

                    {text}
                    {icon ? <img src={iconUrl} alt={iconAlt} className={iconClassName} /> : null}
            </button>
);
}

export default Button;