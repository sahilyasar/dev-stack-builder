import type { Technology } from "./TechType";

const TechCard = ({ technology, handleAddToStack }: { technology: Technology; handleAddToStack: (technology: Technology) => void }) => {
    return (
        <div className="card bg-base-100 border border-gray-200 shadow-sm">
            <div className="card-body p-5">

                <div className="flex justify-between items-start">
                    <img
                        src={technology.icon}
                        alt={technology.name}
                        className="w-10 h-10 object-contain"
                    />

                    <span className="badge border-0 bg-pink-50 text-pink-500">
                        {technology.badge}
                    </span>
                </div>

                <h3 className="text-lg font-bold">
                    {technology.name}
                </h3>

                <p className="text-sm text-gray-500">
                    {technology.description}
                </p>

                <div className="flex justify-between items-center mt-3 text-sm">

                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md font-semibold">
                        {technology.category}
                    </span>

                    <span className="text-gray-">
                        {technology.difficulty}
                    </span>

                    <span className="font-medium">
                        ★ {technology.rating}
                    </span>

                </div>
                <button
                    onClick={() => handleAddToStack(technology)}
                    className="btn w-full bg-slate-950 text-white border-0 mt-4 rounded-2xl">
                    Add to Stack
                </button>


            </div>
        </div>
    );
};

export default TechCard;