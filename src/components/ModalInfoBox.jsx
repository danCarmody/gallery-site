export default function ModalInfoBox({model}) {
    return (
        <div className="absolute left-4 right-4 bottom-4 md:left-6 md:right-auto md:bottom-6 md:w-105
            rounded-x1 border border-zinc-700 bg-zinc-950/65 backdrop-blur px-4 py-3">
                <div className="text-lg font-semibold text-zinc-100">
                    {model.title}
                </div>

                <div className="mt-1 text-sm text-zinc-300">
                    {[model.system, model.faction].filter(Boolean).join(" . ")}
                </div>

                {model.date && (
                    <div className="mt-2 text-xs text-zinc-400">
                        Created {new Date(model.date).toLocaleDateString()}
                    </div>
                )}
            </div>
    );
}