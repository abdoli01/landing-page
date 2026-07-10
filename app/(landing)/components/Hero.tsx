import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="pb-10">
            <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* Right Content */}
                <div className="order-2 text-center lg:order-1 lg:text-right">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            اپلیکیشن تخصصی فوتبال
          </span>

                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                        اپلیکیشن <span className="text-primary">متریکا</span>
                    </h1>

                    <p className="mt-4 text-xl font-medium text-muted-foreground">
                        برای بازیکنان شاغل در فوتبال ایران
                    </p>

                    <p className="mt-8 max-w-xl leading-8 text-muted-foreground">
                        دسترسی سریع به ویدیوهای عملکرد فردی، آمار تخصصی، ساخت کلیپ،
                        تحلیل مسابقات و امکان دریافت مشاوره آنلاین؛ همه در یک اپلیکیشن.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                        <Button size="lg">
                            دانلود اپلیکیشن
                        </Button>

                        <Button variant="outline" size="lg">
                            مشاهده امکانات
                        </Button>
                    </div>
                </div>

                {/* Left Image */}
                <div className="order-1 flex justify-center lg:order-2">
                    <div className="relative h-[300px] w-full max-w-[550px] overflow-hidden rounded-3xl shadow-2xl md:h-[450px]">
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
    );
}