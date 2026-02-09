import {useEffect, useMemo, useState} from "react";
import ModalShell from "./ModalShell";
import ModalCarousel from "./ModalCarousel";
import ModalInfoBox from "./ModalInfoBox";

export default function ModelModal() {
    const [models, setModels] = useState([]);
    const [openSlug, setOpenSlug] = useState(null);
    const [index, setIndex] = useState(0);

    const current = useMemo(
        () => models.find((m) => m.slug === openSlug), 
        [models, openSlug]
    );

    const images = useMemo(
        () => {
            if(!current) return [];
            return [current.coverImage, ...(current.galleryImages ?? [])];
        }, [current] 
    );

    useEffect(() => {
        fetch("/api/models.json").then((r)=> r.json()).then(setModels);
    }, []);

    if(!current) return null;

    return(
        <ModalShell onClose={() => setOpenSlug(null)}>
            <ModalCarousel 
                images={images}
                index={index}
                setIndex={setIndex}/>
            <ModalInfoBox model={current} />
        </ModalShell>
    )
}