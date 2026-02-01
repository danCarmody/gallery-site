export default function ModalShell({ onClose, Children}) {
    return (
        <div className = "fixed inset-0 z-50" role="dialog" aria-modal="true">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70" onClick={onClose}/>
            {/* Content */}
            <div className="absolute inset-0 p-4 md:p-10 flex items-center justify-center">
                <div className="relative w-full max-w-5x1 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
                    {Children}
                </div>
            </div>
        </div>
    );
}