import { Menu } from "./components/menu/Menu";
import { GameCarousel } from "./components/game-carousel/GameCarousel";
import { useRef, useState } from "react";
import { KeyEnum } from "./config/hotkeys.config";
import { useHotkeys } from "react-hotkeys-hook";
import type { SwiperRef } from "swiper/react";
import { CATEGORIES } from "./data/menu.data";
import cn from "clsx";
import { GameDetails } from "./components/game-details/GameDetails";

type TLevelFocus = "top-menu" | "game-carousel" | "details";

function App() {
    const [activeCategory, setActiveCategory] = useState<string>("all");

    const [levelFocus, setLevelFocus] = useState<TLevelFocus>("game-carousel");

    const swiperRef = useRef<SwiperRef>(null);

    useHotkeys(KeyEnum.ArrowUp, () => {
        if (levelFocus === "game-carousel") setLevelFocus("top-menu");
        else if (levelFocus === "details") setLevelFocus("game-carousel");
    });

    useHotkeys(KeyEnum.ArrowDown, () => {
        if (levelFocus === "top-menu") setLevelFocus("game-carousel");
        else if (levelFocus === "game-carousel") setLevelFocus("details");
    });

    useHotkeys(KeyEnum.ArrowRight, () => {
        if (levelFocus === "top-menu") {
            const nextCategory = CATEGORIES.findIndex((cat) => cat.slug === activeCategory) + 1;
            if (nextCategory < CATEGORIES.length) {
                setActiveCategory(CATEGORIES[nextCategory].slug);
            }
        } else if (levelFocus === "game-carousel") {
            swiperRef.current?.swiper.slideNext();
        }
    });

    useHotkeys(KeyEnum.ArrowLeft, () => {
        if (levelFocus === "top-menu") {
            const prevCategory = CATEGORIES.findIndex((cat) => cat.slug === activeCategory) - 1;
            if (prevCategory >= 0) {
                setActiveCategory(CATEGORIES[prevCategory].slug);
            }
        } else if (levelFocus === "game-carousel") {
            swiperRef.current?.swiper.slidePrev();
        }
    });

    useHotkeys(KeyEnum.ArrowLeft, () => {
        if (levelFocus === "top-menu") {
            const prevCategory = CATEGORIES.findIndex((cat) => cat.slug === activeCategory) - 1;
            if (prevCategory >= 0) {
                setActiveCategory(CATEGORIES[prevCategory].slug);
            }
        } else if (levelFocus === "game-carousel") {
            swiperRef.current?.swiper.slidePrev();
        }
    });
    return (
        <div className="flex flex-col justify-between" style={{ height: "75%" }}>
            {" "}
            <div className={cn("ml-28 mt-5", levelFocus === "details" ? "hidden" : "block")}>
                {" "}
                <Menu activeValue={activeCategory} onSelect={(value) => setActiveCategory(value)} items={CATEGORIES} />{" "}
            </div>{" "}
            <div className={cn(levelFocus === "details" ? "hidden" : "block")}>
                {" "}
                <GameCarousel swiperRef={swiperRef} />{" "}
            </div>{" "}
            <GameDetails levelFocus={levelFocus} />{" "}
        </div>
    );
}

export default App;
