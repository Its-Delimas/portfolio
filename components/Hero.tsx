import Image from "next/image"

export default function Hero (){
    return (
        <section className="flex flex-row md:flex:-row items-center justify-between min-h-screen px-6 gap-12">
            <div className="flex-1">
                <p className="text-sm uppercase tracking-wide text-gray-500">
                    Full Stack | Cloud Engineer
                </p>

                <h1 className="text-4xl md:text-6xl font-bold text-balance">
                    Building reliable systems - from full-stack apps to cloud infrastructure
                </h1>

                <p className="mt-4 text-lg text-gray-600 max-w-xl">
                    Currently Deep in cloud architecture and distributed systems. Always chasing the 'why' behind the 'how'
                </p>

                <div className="mt-6 flex gap-4">
                    <a href="#projects" className="px-6 py-3 bg-accent text-white rounded-md font-medium">
                        View Projects
                    </a>
                    <a href="#contact" className="px-6 py-3 border border-gray-300 text-foreground rounded-md font-medium">
                        Contact
                    </a>
                </div>
            </div>

            <div className="flex-1 relative">
                <div className="relative w-full h-[400px] md:h-[500px] md:-mr-12 lg:-mr-24">
                <Image
                    src="/Hero.png"
                    width={600}
                    height={400}
                    alt="Hero section IDE image"
               
                    className="object-cover rounded-md shadow-2xl shadow-green-900/50"
                />
                </div>
            </div>
        </section>
    )
}