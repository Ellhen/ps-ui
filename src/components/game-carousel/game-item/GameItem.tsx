import cn from "clsx";
import type { TGame } from "../../../data/games.data";

interface Props {
    game: TGame;
}

export function GameItem({ game }: Props) {
    return (
        <button>
            <div className={cn("p-0.5 border-2 border-transparent transition-colors duration-300 ease-in-out")}>
                <img src={game.coverImage} alt={game.title} className="w-35 h-35 object-cover transition-all duration-300 ease-in-out " />
            </div>
            <div className="mt-2">
                <img
                    src={game.platform === "PS5" ? "/images/ps5.png" : "/images/ps4.png"}
                    alt={game.platform}
                    width={60}
                    className="filter brightness-0 invert fadeIn hidden opacity-0 transition-opacity duration-300 ease-in-out "
                />
            </div>
        </button>
    );
}
