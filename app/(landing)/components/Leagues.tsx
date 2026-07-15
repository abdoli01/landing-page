import { Trophy } from "lucide-react";
import {useTranslations} from "next-intl";


const leagues = [
   "iranPremierLeague",
   "azadeganLeague",
   "tehranU21PremierLeague",
   "tehranYouthPremierLeague",
   "tehranU17PremierLeague",
   "tehranU15PremierLeague",
];


export default function Leagues() {
    const t = useTranslations('Landing');
    return (
        <section className="pb-10">
            <div className="border rounded-3xl p-8 bg-card">

                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        {t("leagues.title")}
                    </h2>

                    <p className="mt-4 text-muted-foreground">
                        {t("leagues.description")}
                    </p>
                </div>


                <div
                    className="
                        flex
                        flex-wrap
                        justify-center
                        gap-4
                    "
                >

                    {leagues.map((league) => (
                        <div
                            key={league}
                            className="
                                flex
                                items-center
                                gap-3
                                rounded-full
                                border
                                px-6
                                py-3
                                text-sm
                                font-semibold
                                transition-all
                                duration-300
                                hover:border-primary
                                hover:shadow-md
                                cursor-pointer
                            "
                        >

                            <Trophy
                                className="
                                    h-5
                                    w-5
                                    text-foreground
                                "
                            />

                            <span className="text-foreground">
                                {t(`leagues.items.${league}`)}
                            </span>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}