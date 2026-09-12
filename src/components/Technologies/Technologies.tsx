import type { Technology } from "./TechType";
import TechCard from "./TechCard";

import { use, useState } from "react";

const technologiesPromise = async (): Promise<Technology[]> => {
    const res = await fetch('/technologies.json');
    const data = await res.json();
    return data;
};
const technologiesData = technologiesPromise();
const Technologies = () => {
    const technologies = use(technologiesData);

    const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);

    const handleAddToStack = (technology: Technology) => {
        const filteredTechnologies = selectedTechnologies.filter(
            (item) => item.category !== technology.category
        );

        setSelectedTechnologies([
            ...filteredTechnologies,
            technology
        ]);
    };


    return (
        <section>
            <div className="container mx-auto px-4">

                <h2 className="text-3xl font-bold">
                    Explore The <span className="text-pink-500">Technologies</span>
                </h2>

                <p className="text-gray-500 py-2">
                    Pick one technology per category to build your ideal stack.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                    {technologies.map((technology) => (
                        <TechCard
                            key={technology.id}
                            technology={technology}
                            handleAddToStack={handleAddToStack}
                        />
                    ))}
                </div>

                {selectedTechnologies.map((technology) => (
                    <p key={technology.id}>
                        {technology.name}
                    </p>
                ))}

            </div>
        </section>
    );
};

export default Technologies;