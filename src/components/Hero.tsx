import Image from "next/image";

export default function Hero() {
    return (
        <section className="w-full md:h-screen py-8 px-4 sm:px-8 lg:py-64 lg:px-48 flex flex-col gap-8 md:justify-center">
            <div className="text-center sm:text-start">
                <h1 className="font-libre-baskerville text-[clamp(1rem,2vw,8rem)]">Hello, I'm</h1>
                <h1 className="font-inter font-bold leading-tight tracking-tighter text-[clamp(1.5rem,3.5vw,16rem)]">
                    Muhammad Abrar Rayva
                </h1>
            </div>
            <div className="relative w-full aspect-video sm:aspect-547/217">
                <Image
                    src="/abrarrayva.jpg"
                    alt="Muhammad Abrar Rayva"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </section>
    );
}
