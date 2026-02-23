import type { THotkeyKey } from "../../data/hotkeys.data";

interface Props {
    keyDetail: THotkeyKey;
}

export function KeyInfo({ keyDetail: key }: Props) {
    return (
        <div className="flex items-center gap-2">
            <div className="bg-white rounded-full shadow text-[#353841] size-4 flex items-center justify-center p-0.5">{key.icon}</div>
            <div>{key.label}</div>
        </div>
    );
}
