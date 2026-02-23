import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";

export const hotkeysData = [
    {
        icon: <ArrowUp />,
        label: "TOP MENU",
    },

    {
        icon: (
            <>
                <ArrowDown /> {""}
            </>
        ),
        label: "DETAILS",
        
    },
    {
        icon: (
            <>
                <ArrowLeft /> {""}
            </>
        ),
        label: "PREV_GAME",
       
    },

    {
        icon: (
            <>
                <ArrowRight /> {""}
            </>
        ),
        label: "NEXT_GAME",
    },
];

export type THotkeyKey = (typeof hotkeysData)[number];
