import React, {FC} from 'react';
import sprite from 'images/sprite.svg'

export const Icon: FC<Props> = ({iconId, width, height, viewBox}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width || '100px'} height={height || '100px'}>
            <use xlinkHref={`${sprite}#${iconId}`}/>
        </svg>
    );
};

type Props = {
    iconId: string
    width?: string,
    height?: string,
    viewBox?: string,
}