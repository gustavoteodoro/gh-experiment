export const fadeIn = `
    opacity: 0;

    animation-name: fadeIn;
    animation-duration: .1s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    animation-delay: .5s;
    
    @keyframes fadeIn {
        0%   {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

export const fadeInDelay = `
    opacity: 0;

    animation-name: fadeIn;
    animation-duration: .1s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    animation-delay: 3s;

    @keyframes fadeIn {
        0%   {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

export const fadeInZoomIn = `
    opacity: 0;
    transform: scale(.5);

    animation-name: fadeInZoomIn;
    animation-duration: .4s;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    animation-delay: 1.6s;

    @keyframes fadeInZoomIn {
        0%   {
            opacity: 0;
            transform: scale(.5);
        }
        50% {
            opacity: 1;
            transform: scale(1.1);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
`

export function fromBottom(from, to) {
    return `
        bottom: ${from};

        animation-name: fromBottom;
        animation-duration: .3s;
        animation-iteration-count: 1;
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;
        animation-delay: .9s;

        @keyframes fromBottom {
            0%   {
                bottom: ${from};
            }
            100% {
                bottom: ${to};
            }
        }
    `;
}
