import type { Technology } from "./TechType";
import TechCard from "./TechCard";
import { toast } from "react-toastify";

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

    const handleRemoveFromStack = (id: string) => {
        const removedTechnology = selectedTechnologies.find((technology) => technology.id === id);
        if (!removedTechnology) return;

        setSelectedTechnologies(
            selectedTechnologies.filter((technology) => technology.id !== id)
        );
        toast.info(`${removedTechnology.name} is removed from the stack`);
    };

    const handleRemoveAll = () => {
        setSelectedTechnologies([]);
        toast.info("Stack cleared");
    };

    const handleAddToStack = (technology: Technology) => {
        const filteredTechnologies = selectedTechnologies.filter(
            (item) => item.name !== technology.name
        );

        setSelectedTechnologies([
            ...filteredTechnologies,
            technology
        ]);
        toast.success("✓ Added to Stack");
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
                <div className="grid lg:grid-cols-[3fr_1fr] gap-8 mt-5">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                        {technologies.map((technology) => {
                            const isSelected = selectedTechnologies.some(
                                (item) => item.id === technology.id
                            );

                            return (
                                <TechCard
                                    key={technology.id}
                                    technology={technology}
                                    handleAddToStack={handleAddToStack}
                                    isSelected={isSelected}

                                />
                            );
                        })}
                    </div>

                    <div className="self-start border border-gray-200 rounded-2xl p-6 mt-5">

                        <h3 className="text-xl font-bold mb-1">
                            Your Stack
                        </h3>



                        {selectedTechnologies.length === 0 ? (
                            <>
                                <p className="text-sm text-gray-500 mb-5">
                                    No technologies selected yet.
                                </p>

                                <div className="border border-dashed border-gray-200 rounded-xl p-8 text-center">
                                    <p className="text-sm text-gray-400">
                                        Your stack is empty.
                                    </p>
                                </div>
                            </>
                        ) : (
                            <div className="space-y-3 mt-4">

                                <p className="text-sm text-gray-400">
                                    {selectedTechnologies.length} Technology Selected
                                </p>

                                {selectedTechnologies.map((technology) => (
                                    <div
                                        key={technology.id}
                                        className="flex justify-between items-center border border-gray-200 rounded-xl p-3"
                                    >
                                        <div className="flex items-center gap-2">

                                            <img
                                                src={technology.icon}
                                                alt={technology.name}
                                                className="w-8 h-8"
                                            />

                                            <div>
                                                <p className="font-semibold">
                                                    {technology.name}
                                                </p>

                                                <p className="text-xs text-gray-500">
                                                    {technology.category}
                                                </p>
                                            </div>

                                        </div>

                                        <button
                                            onClick={() => handleRemoveFromStack(technology.id)}
                                            className="text-gray-500 btn"
                                        >
                                            ✕
                                        </button>

                                    </div>
                                ))}

                            </div>
                        )}

                        {selectedTechnologies.length > 0 && (
                            <button
                                type="button"
                                onClick={() => handleRemoveAll()}
                                className="btn btn-outline btn-error btn-sm mt-10 w-full rounded-lg py-5"
                            >
                                Remove All
                            </button>
                        )}

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Technologies;
