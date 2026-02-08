export default function({images, index, setIndex}) {
    if(!images.length) return null;

    const canNav = images.length > 1;
    return (
        <div className="relative">
            <img 
                src={images[index]}
                alt=" "
                className="w-full max-h-[75vh] object-contain bg-black"
            />

            {canNav && (
                <>
                    <button 
                        onClick={() => setIndex((i) => (i - 1 + images.length ) % images.length)}
                        className="absolute left-3  top-1/2  -translate-y-1/2 z-20 rounded-full bg-zinc-950/70 border border-zinc-700 px-3 py-2"
                    >
                        <-
                    </button>

                    <button 
                        onClick={() => setIndex((i) => (i - 1 + images.length ) % images.length)}
                        className="absolute right-3  top-1/2  -translate-y-1/2 z-20 rounded-full bg-zinc-950/70 border border-zinc-700 px-3 py-2"
                    > 
                        ->
                    </button>
                </>
            )}
        </div>
    );
}