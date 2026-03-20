"use client";

import { useEffect, useState } from "react";
import Button from '@/components/ui/button';

const ResidentialComplex = ({ name, street, price, imageUrl }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);

      if (desktop) {
        setIsClicked(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      setIsClicked(false);
    }
  };

  return (
    <article className="grid gap-8">
      <div
        className="relative min-h-[680px] lg:h-152 [perspective:1400px]"
        onClick={handleClick}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`relative h-full w-full rounded-4xl transition-transform duration-700 [transform-style:preserve-3d] ${
            !isDesktop && isClicked ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* FRONT */}
          <div
            className="absolute inset-0 cursor-pointer overflow-hidden rounded-4xl bg-cover bg-center bg-no-repeat [backface-visibility:hidden]"
            style={{
              backgroundImage: `url('${imageUrl}')`,
              boxShadow: "inset 0 -20px 20px -10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div
              className={`relative top-[calc(100%-11rem)] grid pb-12 sm:pb-5 content-center gap-3 sm:flex h-44 items-center justify-between rounded-b-4xl bg-gradient-to-t from-black/80 via-black/60 to-transparent px-6 transition-opacity duration-300 sm:px-8 md:flex lg:px-10 ${
                isDesktop && isClicked ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="grid justify-start">
                <p className="select-none font-medium text-[28px] leading-tight text-white sm:text-[34px] lg:text-5xl">
                  {name}
                </p>
                <p className="select-none font-medium text-sm text-dark25 sm:text-base lg:text-2xl">
                  {street}
                </p>
              </div>

              <div>
                <p className="select-none text-lg font-medium text-white sm:text-xl lg:text-2xl">
                  {price}
                </p>
              </div>
            </div>

            {/* DESKTOP GLASS PANEL */}
            <div
              className={`absolute right-0 top-0 hidden h-full w-1/2 overflow-hidden rounded-r-4xl border-l border-white/10 transition-all duration-300 lg:block ${
                isClicked
                  ? "opacity-100 bg-white/10 backdrop-blur-xl saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_0_30px_rgba(255,255,255,0.08)]"
                  : "pointer-events-none opacity-0"
              }`}
            >
              <div className="absolute inset-0 overflow-hidden rounded-r-4xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28)_0%,transparent_38%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.04)_35%,transparent_60%)]"></div>
              </div>

              <div
                className={`relative z-10 mt-14 w-full transform px-10 transition-all duration-300 ease-in-out xl:px-16 ${
                  isClicked
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                }`}
              >
                <p className="mb-8 text-start text-2xl font-medium text-white">
                  Квартиры в {name}
                </p>

                <div className="flex flex-wrap gap-8 xl:gap-16">
                  <div className="grid gap-4 text-start">
                    <p className="text-white lg:text-base xl:text-xl">1-комнатные</p>
                    <p className="text-white lg:text-base xl:text-xl">2-комнатные</p>
                    <p className="text-white lg:text-base xl:text-xl">3-комнатные</p>
                  </div>

                  <div className="grid gap-4 text-start">
                    <p className="text-white lg:text-base xl:text-xl">от 30.7 м²</p>
                    <p className="text-white lg:text-base xl:text-xl">от 50 м²</p>
                    <p className="text-white lg:text-base xl:text-xl">от 75.4 м²</p>
                  </div>

                  <div className="grid gap-4 text-start">
                    <p className="text-white lg:text-base xl:text-xl">от 5.4 млн</p>
                    <p className="text-white lg:text-base xl:text-xl">от 6.3 млн</p>
                    <p className="text-white lg:text-base xl:text-xl">от 10.3 млн</p>
                  </div>
                </div>

                <div className="my-6 h-px w-[80%] bg-dark40"></div>

                <div className="grid">
                  <p className="text-lg font-medium text-white">Места поблизости</p>

                  <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 xl:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                    <div className="grid justify-items-start gap-2 text-white">
                      <p className="mt-2 text-base font-medium">Здоровье</p>
                      <p className="text-sm">— Поликлиника</p>
                      <p className="text-sm">— Станция скорой помощи</p>
                    </div>

                    <div className="grid justify-items-start gap-2 text-white">
                      <p className="mt-2 text-base font-medium">Учёба</p>
                      <p className="text-sm">— Пед.институт</p>
                      <p className="text-sm">— Школа, детский сад</p>
                    </div>

                    <div className="grid justify-items-start gap-2 text-white">
                      <p className="mt-2 text-base font-medium">Культура</p>
                      <p className="text-sm">— Дворец культуры</p>
                      <p className="text-sm">— Кинотеатр "Россия"</p>
                    </div>

                    <div className="grid justify-items-start gap-2 text-white">
                      <p className="mt-2 text-base font-medium">Спорт</p>
                      <p className="text-sm">— Дворец спорта "Химик"</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Button text="Перейти на страницу ЖК" size={'md'} variant={'accent'} className="saturate-66 my-14"/>
                </div>
              </div>
            </div>
                    <div className={`absolute bottom-4 right-4 block rounded-full bg-black/40 px-3 py-1 text-xs text-white ${isClicked ? 'hidden' : ''}`}>
          Нажмите для подробного просмотра
        </div>
          </div>

          {/* BACK - MOBILE ONLY */}
          <div className="absolute inset-0 flex flex-col overflow-hidden rounded-4xl bg-dark15 lg:hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="relative z-10 w-full flex-1 overflow-y-auto px-5 pt-8 pb-6 sm:px-8 sm:py-12">
              <p className="mb-6 text-start text-xl font-medium text-dark sm:mb-8 sm:text-2xl">
                Квартиры в {name}
              </p>

              <div className="flex flex-wrap gap-8 sm:gap-12">
                <div className="grid gap-3 text-start sm:gap-4">
                  <p className="text-sm text-dark sm:text-base xl:text-xl">1-комнатные</p>
                  <p className="text-sm text-dark sm:text-base xl:text-xl">2-комнатные</p>
                  <p className="text-sm text-dark sm:text-base xl:text-xl">3-комнатные</p>
                </div>

                <div className="grid gap-3 text-start sm:gap-4">
                  <p className="text-sm text-dark sm:text-base xl:text-xl">от 30.7 м²</p>
                  <p className="text-sm text-dark sm:text-base xl:text-xl">от 50 м²</p>
                  <p className="text-sm text-dark sm:text-base xl:text-xl">от 75.4 м²</p>
                </div>

                <div className="grid gap-3 text-start sm:gap-4">
                  <p className="text-sm text-dark sm:text-base xl:text-xl">от 5.4 млн</p>
                  <p className="text-sm text-dark sm:text-base xl:text-xl">от 6.3 млн</p>
                  <p className="text-sm text-dark sm:text-base xl:text-xl">от 10.3 млн</p>
                </div>
              </div>

              <div className="my-5 h-px w-full sm:w-[80%] bg-dark40 sm:my-6"></div>

              <div className="grid mb-6">
                <p className="text-base font-medium text-dark sm:text-lg">
                  Места поблизости
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                  <div className="grid justify-items-start gap-2 text-dark">
                    <p className="mt-2 text-sm font-medium sm:text-base">Здоровье</p>
                    <p className="text-[13px] sm:text-sm">— Поликлиника</p>
                    <p className="text-[13px] sm:text-sm">— Станция скорой помощи</p>
                  </div>

                  <div className="grid justify-items-start gap-2 text-dark">
                    <p className="mt-2 text-sm font-medium sm:text-base">Учёба</p>
                    <p className="text-[13px] sm:text-sm">— Пед.институт</p>
                    <p className="text-[13px] sm:text-sm">— Школа, детский сад</p>
                  </div>

                  <div className="grid justify-items-start gap-2 text-dark">
                    <p className="mt-2 text-sm font-medium sm:text-base">Культура</p>
                    <p className="text-[13px] sm:text-sm">— Дворец культуры</p>
                    <p className="text-[13px] sm:text-sm">— Кинотеатр "Россия"</p>
                  </div>

                  <div className="grid justify-items-start gap-2 text-dark">
                    <p className="mt-2 text-sm font-medium sm:text-base">Спорт</p>
                    <p className="text-[13px] sm:text-sm">— Дворец спорта "Химик"</p>
                  </div>
                </div>
              </div>
              <div className="z-10 bottom-5 left-14 flex justify-center">
                  <Button text="Перейти на страницу ЖК" size={'md'} variant={'accent'}/>
                </div>
            </div>
          </div>
        </div>


      </div>
    </article>
  );
};

export default ResidentialComplex;