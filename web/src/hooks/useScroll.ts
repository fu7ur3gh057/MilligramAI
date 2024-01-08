import { useState, useEffect } from "react";

export function useScroll() {
    // storing this to get the scroll direction
    const [lastScrollTop, setLastScrollTop] = useState<number>(0);
    // the offset of the document.body
    const [bodyOffset, setBodyOffset] = useState<DOMRect>(
        document.body.getBoundingClientRect()
    );
    // the vertical direction
    const [scrollY, setScrollY] = useState<number>(bodyOffset.top);
    // the horizontal direction
    const [scrollX, setScrollX] = useState<number>(bodyOffset.left);
    // scroll direction would be either up or down
    const [scrollDirection, setScrollDirection] = useState<string>('up');

    const listener = (event: Event) => {
        setBodyOffset(document.body.getBoundingClientRect());
        setScrollY(prevState => -bodyOffset.top);
        setScrollX(prevState => bodyOffset.left);
        setScrollDirection(prevState => lastScrollTop > -bodyOffset.top ? "down" : "up");
        setLastScrollTop(-bodyOffset.top);
    };

    useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    });

    return {
        scrollY,
        scrollX,
        scrollDirection
    };
}