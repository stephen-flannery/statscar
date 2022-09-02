import { ReactNode, useEffect, useState } from 'react';

type Props = {
    children: ReactNode;
    maxWidth?:
        | 0
        | 'none'
        | 'xs'
        | 'sm'
        | 'md'
        | 'lg'
        | 'xl'
        | '2xl'
        | '3xl'
        | '4xl'
        | '5xl'
        | '6xl'
        | '7xl'
        | 'full'
        | 'min'
        | 'max'
        | 'fit'
        | 'prose'
        | 'screen-sm'
        | 'screen-md'
        | 'screen-lg'
        | 'screen-xl'
        | 'screen-2xl';
};

export default function Container({ children, maxWidth = 'xl' }: Props) {
    const [maxWidthClass, setMaxWidthClass] = useState('max-w-xl');

    useEffect(() => {
        switch (maxWidth) {
            case 0:
                setMaxWidthClass('max-w-0');
                break;
            case 'none':
                setMaxWidthClass('max-w-none');
                break;
            case 'xs':
                setMaxWidthClass('max-w-xs');
                break;
            case 'sm':
                setMaxWidthClass('max-w-sm');
                break;
            case 'md':
                setMaxWidthClass('max-w-md');
                break;
            case 'lg':
                setMaxWidthClass('max-w-lg');
                break;
            case 'xl':
                setMaxWidthClass('max-w-xl');
                break;
            case '2xl':
                setMaxWidthClass('max-w-2xl');
                break;
            case '3xl':
                setMaxWidthClass('max-w-3xl');
                break;
            case '4xl':
                setMaxWidthClass('max-w-4xl');
                break;
            case '5xl':
                setMaxWidthClass('max-w-5xl');
                break;
            case '6xl':
                setMaxWidthClass('max-w-6xl');
                break;
            case '7xl':
                setMaxWidthClass('max-w-7xl');
                break;
            case 'full':
                setMaxWidthClass('max-w-full');
                break;
            case 'min':
                setMaxWidthClass('max-w-min');
                break;
            case 'max':
                setMaxWidthClass('max-w-max');
                break;
            case 'fit':
                setMaxWidthClass('max-w-fit');
                break;
            case 'prose':
                setMaxWidthClass('max-w-prose');
                break;
            case 'screen-sm':
                setMaxWidthClass('max-w-screen-sm');
                break;
            case 'screen-md':
                setMaxWidthClass('max-w-screen-md');
                break;
            case 'screen-lg':
                setMaxWidthClass('max-w-screen-lg');
                break;
            case 'screen-xl':
                setMaxWidthClass('max-w-screen-xl');
                break;
            case 'screen-2xl':
                setMaxWidthClass('max-w-screen-2xl');
                break;
            default:
                setMaxWidthClass('max-w-xl');
                break;
        }
    }, [maxWidth]);

    return <div className={`${maxWidthClass} mx-auto`}>{children}</div>;
}
