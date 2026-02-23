import { GAMES_DATA } from "../../data/games.data";
import { GameItem } from "./game-item/GameItem";
import { type RefObject } from "react";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import { useGameStore } from "../../store";

import "swiper/swiper-bundle.css";

interface Props {
	swiperRef: RefObject<SwiperRef | null>;
}


export function GameCarousel({ swiperRef }: Props) {
    const { setActiveGameSlug } = useGameStore();
    return (
        <div className="ml-32">
            <Swiper
                ref={swiperRef}
                slidesPerView={8}
                spaceBetween={18}
                loop
                slideToClickedSlide
                initialSlide={2}
                onSlideChange={(e) => {
                    const gameSlag = GAMES_DATA[e.realIndex].slug;
                    setActiveGameSlug(gameSlag);
                }}
            >
                {GAMES_DATA.map((game) => (
                    <SwiperSlide key={game.slug}>
                        <GameItem game={game} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
