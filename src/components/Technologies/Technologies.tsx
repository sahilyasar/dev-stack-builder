import type { Technology } from "./TechType";

import { use } from "react";

const technologiesPromise = async (): Promise<Technology[]> => {
    const res = await fetch('/technologies.json');
    const data = await res.json();
    return data;
};
 const technologiesData = technologiesPromise();
const Technologies = () => {
    const technologies = use(technologiesData);

    console.log(technologies);
    return (
        <section>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold">
                    Explore The <span className="text-pink-500">Technologies</span>
                </h2>

                <p className="text-gray-500 py-2">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="mt-5">

            </div>

        </section>
    );
};

export default Technologies;