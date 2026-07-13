export default function Hero (){
    return (
        <section className="flex flex-col items-start justify-center min-h-screen px-6">
            <p className="text-sm uppercase tracking-wide text-gray-500">
                Full Stack | Cloud Engineer
            </p>
            <h1 className="text-4xl md:text-6xl font-bold">
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
        </section>
    )
}