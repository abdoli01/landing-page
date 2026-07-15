'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {useLocale,useTranslations} from "next-intl";

export default function Hero() {
    const t = useTranslations('Landing');
    const locale = useLocale();
    const isRtl = locale === "fa";
    return (
        <section className={`text-center ${isRtl ? 'lg:text-right' : 'lg:text-left'} pb-10`}>
            <div className="grid items-center gap-12 lg:grid-cols-2 border rounded-3xl p-8 bg-card">
                {/* Right Content */}
                <div
                    className="order-2 lg:order-1">
                <span
                    className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                        {t('hero.badge')}
                      </span>

                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                        {t('hero.app')} <span className="text-primary">{t('hero.metrica')}</span>
                    </h1>

                    <p className="mt-4 text-xl font-medium text-muted-foreground">
                        {t('hero.subtitle')}
                    </p>

                    <p className="mt-8 leading-8 text-muted-foreground">
                        {t('hero.description')}
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                        <Button size="lg">
                            {t('hero.downloadButton')}
                        </Button>
                        <Button variant="outline" size="lg"
                                onClick={() => {
                                    document
                                        .getElementById("AboutApp")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                        >
                            {t('hero.featuresButton')}
                        </Button>
                    </div>
                </div>

                {/* Left Image */}
                <div className="order-1 flex justify-center lg:justify-end lg:order-2">
                    <div
                        className="relative h-[300px] w-full max-w-[550px] overflow-hidden rounded-3xl shadow-2xl md:h-[450px]">
                        <Image
                            src="/images/header.jpg"
                            alt="اپلیکیشن متریکا"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
        ;
}