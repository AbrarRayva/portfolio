import Button from "@/components/ui/Button";

/**
 * Hero section component displaying the introduction, main headings, and primary action buttons.
 */
export default function Hero() {
    return (
        <section id="home" className="md:h-screen mx-8 lg:mx-48 flex flex-col gap-12 border-r-1 border-l-1 border-gray/20">
            <div className="text-center flex flex-col gap-2 pt-32">
                <h1 className="font-instrument-sans font-semibold text-gray border-t-1 border-b-1 border-gray/20">
                    Muhammad Abrar Rayva
                </h1>
                <h2 className="font-instrument-sans leading-tight text-3xl sm:text-5xl md:text-7xl border-t-1 border-b-1 border-gray/20">
                    <span className="font-libre-baskerville">Design</span>, <span className="font-pixelify-sans">Code</span>, <span className="font-medium tracking-tighter">Cloud</span>
                </h2>
            </div>
            <div className="justify-center flex flex-col sm:flex-row gap-4 sm:gap-6 font-space-grotesk border-t-1 border-b-1 border-gray/20">
                <Button className="uppercase">Projects</Button>
                <Button className="uppercase">Contact</Button>
            </div>
        </section>
    );
}
