import ProjectCard from '../(components)/ProjectCard';

export default function Projects() {
    return (
        <section className="py-16 bg-gradient-to-r from-gradientStart to-gradientEnd min-h-screen text-white">
            <h2 className="text-center text-4xl font-bold mb-12">Projects</h2>
            <div className="container mx-auto px-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                <ProjectCard
                    title="Project One"
                    description="A cool project I worked on that showcases my skills."
                    link="https://example.com"
                />
                <ProjectCard
                    title="Project Two"
                    description="Another project that highlights my experience with React and TypeScript."
                    link="https://example.com"
                />
                {/* Add more ProjectCards as needed */}
            </div>

        </section>
    );
}
