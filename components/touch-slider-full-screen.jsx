'use client'
import { useState, useRef, useEffect, Children } from 'react';

const FullscreenTouchSlider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  
  const startX = useRef(0);
  const startY = useRef(0);
  const startOffset = useRef(0);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const isHorizontalScroll = useRef(false);
  
  const slides = Children.toArray(children);
  const totalSlides = slides.length;
  const cardWidth = containerWidth;
  const maxIndex = totalSlides - 1;
  const maxOffset = maxIndex * cardWidth;
  
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === maxIndex;
  
  // Получаем ширину контейнера
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  
  // Функция для расчета правильного смещения в конце
  const getBaseTranslate = () => {
    if (isAtEnd && maxIndex > 0) {
      return -maxOffset;
    }
    return -currentIndex * cardWidth;
  };
  
  // Расчет смещения с учетом границ
  const calculateConstrainedOffset = (offset) => {
    const currentTranslate = getBaseTranslate();
    const newTranslate = currentTranslate + offset;
    
    if (newTranslate > 0 || newTranslate < -maxOffset) {
      return offset * 0.3;
    }
    return offset;
  };
  
  // Начало касания/клика
  const handleDragStart = (e) => {
    // Предотвращаем перетаскивание изображений
    e.preventDefault();
    
    setIsDragging(true);
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
    
    startX.current = clientX;
    startY.current = clientY;
    startOffset.current = dragOffset;
    isHorizontalScroll.current = false;
    
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grabbing';
    }
  };
  
  // Движение
  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    // Предотвращаем выделение текста и перетаскивание
    e.preventDefault();
    
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;
    
    const deltaX = Math.abs(clientX - startX.current);
    const deltaY = Math.abs(clientY - startY.current);
    
    // Определяем направление скролла (горизонтальный или вертикальный)
    if (!isHorizontalScroll.current && (deltaX > 5 || deltaY > 5)) {
      isHorizontalScroll.current = deltaX > deltaY;
    }
    
    // Если это горизонтальный свайп - двигаем слайдер
    if (isHorizontalScroll.current) {
      let newOffset = startOffset.current + (clientX - startX.current);
      newOffset = calculateConstrainedOffset(newOffset);
      
      setDragOffset(newOffset);
    }
  };
  
  // Завершение
  const handleDragEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Если это был горизонтальный свайп - обрабатываем переключение слайда
    if (isHorizontalScroll.current) {
      const threshold = cardWidth * 0.2;
      let newIndex = currentIndex;
      
      if (Math.abs(dragOffset) > threshold) {
        if (dragOffset < 0 && !isAtEnd) {
          newIndex = Math.min(currentIndex + 1, maxIndex);
        } else if (dragOffset > 0 && !isAtStart) {
          newIndex = Math.max(currentIndex - 1, 0);
        }
      }
      
      setCurrentIndex(newIndex);
    }
    
    setDragOffset(0);
    
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grab';
    }
    
    isHorizontalScroll.current = false;
  };
  
  // Расчет transform
  const getTransform = () => {
    const baseTranslate = getBaseTranslate();
    const translate = baseTranslate + dragOffset;
    return `translateX(${translate}px)`;
  };
  
  // Переключение слайдов кнопками
  const goToPrev = () => {
    if (!isAtStart) {
      setCurrentIndex(currentIndex - 1);
      setDragOffset(0);
    }
  };
  
  const goToNext = () => {
    if (!isAtEnd) {
      setCurrentIndex(currentIndex + 1);
      setDragOffset(0);
    }
  };
  
  return (
    <div className="w-full h-screen overflow-hidden relative select-none">
      {/* Кнопка предыдущего слайда */}
      {!isAtStart && (
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-all duration-200"
          aria-label="Предыдущий"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      
      {/* Кнопка следующего слайда */}
      {!isAtEnd && (
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-all duration-200"
          aria-label="Следующий"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      
      {/* Счетчик изображений */}
      {totalSlides > 1 && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-black/50 text-white text-sm">
          {currentIndex + 1} / {totalSlides}
        </div>
      )}
      
      {/* Слайдер */}
      <div 
        ref={containerRef}
        className="h-full w-full overflow-hidden"
      >
        <div 
          ref={sliderRef}
          className="h-full cursor-grab active:cursor-grabbing select-none"
          style={{ touchAction: 'pan-y pinch-zoom' }}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div
            className="flex h-full"
            style={{
              transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transform: getTransform(),
              willChange: 'transform'
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-full w-full flex items-center justify-center bg-dark50"
                style={{ width: `${cardWidth}px` }}
                onDragStart={(e) => e.preventDefault()} // Запрещаем перетаскивание содержимого
              >
                {slide}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Индикаторы */}
      {totalSlides > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setDragOffset(0);
              }}
              className={`
                transition-all duration-300 cursor-pointer rounded-full
                ${currentIndex === idx 
                  ? 'w-6 h-1 bg-white' 
                  : 'w-2 h-1 bg-white/50 hover:bg-white/70'
                }
              `}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FullscreenTouchSlider;