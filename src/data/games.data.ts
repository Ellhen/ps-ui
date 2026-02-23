
export const GAMES_DATA = [
    {
        title: "Final Fantasy VII Remake",
        slug: "final-fantasy-VII-remake",
        coverImage: "/images/covers/ff7.jpg",
        bgImage: "/images/backgrounds/ff7-bg.jpg",
        platform: "PS5",
    },

    {
        title: "Ghost of Tsushima",
        slug: "ghost-of-tsushima",
        coverImage: "/images/covers/ghost.jpg",
        bgImage: "/images/backgrounds/ghost-bg.jpg",
        platform: "PS5",
    },

    {
        title: "Playstation Store",
        slug: "playstation-store",
        coverImage: "/images/covers/ps.jpg",
        bgImage: "/images/backgrounds/ps-bg.jpg",
        platform: "PS5",
    },

    {
        title: "Chrono Cross",
        slug: "chrono-cross",
        coverImage: "/images/covers/chrono-cross.jpg",
        bgImage: "/images/backgrounds/chrono-cross-bg.jpg",
        platform: "PS4",
    },

    {
        title: "Shadow of the Colossus",
        slug: "shadow-of-the-colossus",
        coverImage: "/images/covers/colossus.jpg",
        bgImage: "/images/backgrounds/colossus-bg.jpg",
        platform: "PS4",
    },

    {
        title: "Resident Evil 2",
        slug: "resident-evil-2",
        coverImage: "/images/covers/re2.jpg",
        bgImage: "/images/backgrounds/re2-bg.jpg",
        platform: "PS5",
    },

    {
        title: "Rayman Legends",
        slug: "rayman-legends",
        coverImage: "/images/covers/rayman.jpg",
        bgImage: "/images/backgrounds/rayman-bg.jpg",
        platform: "PS4",
    },

    {
        title: "Call of Duty: Modern Warfare",
        slug: "call-of-duty-modern-warfare",
        coverImage: "/images/covers/mw.jpg",
        bgImage: "/images/backgrounds/mw-bg.jpg",
        platform: "PS4",
    },

    {
        title: "Baldur's Gate 3",
        slug: "baldurs-gate-3",
        coverImage: "/images/covers/bg3.jpg",
        bgImage: "/images/backgrounds/bg3-bg.jpg",
        platform: "PS5",
    },

    {
        title: "Death Stranding",
        slug: "death-stranding",
        coverImage: "/images/covers/death-stranding.jpg",
        bgImage: "/images/backgrounds/death-stranding-bg.jpg",
        platform: "PS5",
    },
];


export type TGame = (typeof GAMES_DATA)[number]