// components/about-app.tsx
'use client'
import { useLocale, useTranslations } from 'next-intl';
export default function AboutApp() {
    // const locale = useLocale();
    const t = useTranslations('Landing.aboutApp');
    return (
        <section id="AboutApp" className="scroll-mt-24">
         <div className="pb-10">
            <div className="container mx-auto max-w-5xl">
                <div className="mx-auto max-w-4xl rounded-3xl border bg-card p-8 shadow-sm lg:p-12">
                    <div className="mb-8">
            <span className="mb-3 inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              {t('badge')}
            </span>

                        <h2 className="text-3xl font-extrabold lg:text-4xl">
                            {t('title')}
                        </h2>
                    </div>

                    <div className="text-justify leading-9 text-muted-foreground">
                        <p>
                            {t('description')}
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}