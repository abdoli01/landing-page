import {
    Video,
    Clapperboard,
    ChartColumn,
    MessageSquareText,
} from "lucide-react";


const features = [
    {
        title: "ویدیو عملکرد فردی بازیکن در هر بازی",
        icon: Video,
    },
    {
        title: "ساخت سریع و آنلاین ویدیوکلیپ از عملکرد بازیکن",
        icon: Clapperboard,
    },
    {
        title: "آمار عملکرد بازیکن و مقایسه با هم‌پستی‌هایش در هر لیگ",
        icon: ChartColumn,
    },
    {
        title: "امکان مشاوره آنلاین و الصاق متن روی تصاویر عملکرد بازیکن",
        icon: MessageSquareText,
    },
];


export default function Features() {
    return (
        <section className="pb-10">
            <div className="w-full">

                <div
                    className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-4
                        gap-6
                        justify-items-center
                    "
                >

                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="
                                    w-[280px]
                                    h-[240px]
                                    rounded-2xl
                                    cursor-pointer
                                    border
                                    bg-card
                                    p-6
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    gap-6
                                    text-center
                                    transition-all
                                    duration-300
                                    ease-out
                                    hover:-translate-y-2
                                    hover:shadow-xl
                                    hover:border-primary
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-16
                                        w-16
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-primary/10
                                    "
                                >
                                    <Icon className="h-8 w-8 text-primary" />
                                </div>


                                <p
                                    className="
                                        text-sm
                                        font-semibold
                                        leading-7
                                    "
                                >
                                    {feature.title}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}