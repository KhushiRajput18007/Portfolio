import { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'a'
            );
        };

        window.addEventListener('mousemove', updatePosition);
        return () => window.removeEventListener('mousemove', updatePosition);
    }, []);

    return (
        <>
            <div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-50 transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) ${isPointer ? 'scale(1.5)' : 'scale(1)'}`,
                    left: 0,
                    top: 0
                }}
            />
            <div
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden md:block"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    left: 0,
                    top: 0
                }}
            />
        </>
    );
};

export default CustomCursor;
