const Button = ({
    text='',
    size,
    variant,
    className='',
    isLoading = false,
    disabled,
    link
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
        md: 'py-3 px-8 text-md rounded-4xl',
        lg: 'text-md rounded-4xl',
        xl: '',

    }

    return(
    <button href={link} className={`min-w-max active:scale-95 duration-200 hover:bg-dark15 hover:text-dark 
            ${variants[variant]}
            ${sizes[size]}
            ${className}
            ${isLoading ? 'cursor-wait opacity-70' : ''}
        `} disabled={isLoading || disabled}>{text}
    </button>
);
}

export default Button;