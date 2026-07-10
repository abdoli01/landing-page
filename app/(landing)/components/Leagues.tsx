import { Trophy } from "lucide-react";


const leagues = [
    "لیگ برتر ایران",
    "لیگ آزادگان (دسته یک ایران)",
    "لیگ برتر امیدهای تهران",
    "لیگ برتر جوانان تهران",
    "لیگ برتر نوجوانان تهران",
    "لیگ برتر نونهالان تهران",
];


export default function Leagues() {
    return (
        <section className="pb-10">
            <div className="border rounded-3xl p-8">

                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        لیگ‌های تحت پوشش متریکا
                    </h2>

                    <p className="mt-4 text-muted-foreground">
                        عملکرد بازیکنان شاغل در لیگ‌های زیر توسط متریکا تحلیل می‌شود
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
                                bg-background
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
                                {league}
                            </span>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}