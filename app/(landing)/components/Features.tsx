import {
    Video,
    Clapperboard,
    ChartColumn,
    MessageSquareText,
} from "lucide-react";
import {useTranslations} from "next-intl";


const features = [
    {
        title: "features.items.videoPerformance",
        icon: Video,
    },
    {
        title: "features.items.videoClipCreation",
        icon: Clapperboard,
    },
    {
        title: "features.items.playerStatistics",
        icon: ChartColumn,
    },
    {
        title: "features.items.onlineConsultation",
        icon: MessageSquareText,
    },
];


export default function Features() {
    const t = useTranslations('Landing');
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
                                    w-full
                                    h-[240px]
                                    rounded-2xl
                                    cursor-pointer
                                    border
                                    bg-card
                                    p-6
                                    flex
                                    flex-col
                                    items-center
                                    justify-around

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
                                    {t(feature.title)}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}