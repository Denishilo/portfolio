import React, {FC} from 'react';
import sprite from '../../images/IconSprite.svg'

export const Icon: FC<Props> = ({iconId, width, height, viewBox}) => {
    return (
        <svg width={width || '120'} height={height || '119'} viewBox={viewBox || "0 0 120 119"} fill="none"
             xmlns="http://www.w3.org/2000/svg">
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