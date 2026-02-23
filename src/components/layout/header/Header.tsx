import { Bell, Gamepad2, SmilePlus, Trophy, Wifi } from "lucide-react";


const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit",  hour12: false });

export function Header() {
    return (
        <header className="p-8 grid grid-cols-[2fr_5fr_3fr] items-center">
            <div className="flex items-center gap-18">
                <div className="flex items-center gap-3">
                    <time className="font-semibold">{currentTime}</time>
                    <Wifi className="size-4" />
                </div>

                <div className="flex-xs flex items-center gap-1">
                    <span className="flex items-center gap-1">
                        {/*<Handbag className="size-5" />3*/}
						<img className='filter brightness-0 invert' width={40} height={40} src="/images/icons-playstation.png" alt="shopping bag"  />3
                    </span>
                    <span>|</span>
                    <span>$39.97</span>
                </div>
            </div>
            <div className="text-xs font-semibold flex items-center gap-2 justify-center">
                <div className="flex flex-col items-center">
                    <Gamepad2 />
                    <div className="-mt-1.5">1</div>
                </div>
                <div className="flex flex-col items-center">
                    <Gamepad2 />
                    <div className="-mt-1.5">2</div>
                </div>
            </div>
            <div className="flex items-center justify-end gap-6 text-sm font-semibold">
                <div className="flex items-center gap-1.5">
                    <Bell fill="white" />
                    <span>12</span>
                </div>
                <div className="flex items-center gap-2.5">
                    <SmilePlus />
                    <span>9</span>
                </div>
				<div className="flex items-center gap-3">
					<img src="/images/ps-plus.svg" alt="PlayStation Plus logo" width={24} height={24} />
				</div>
                <div className="flex items-center gap-3">
                    <img src="/images/avatar.png" alt="FallingStickman" width={45} height={45} />
                    <div className="mb-1">FallingStickman 
                    <div className="flex items-center gap-1 text-xs">
                        <Trophy size={16} />
                        <span>14</span>
                    </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
