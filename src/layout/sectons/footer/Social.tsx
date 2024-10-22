import React from 'react';
import {Icon} from "../../../components/icon/Icon";

type SocialPropsType = {
    iconId: string
}

export const Social = (props: SocialPropsType) => {
    return (
        <li>
            <a href=""><Icon iconId={props.iconId} width={'24'} height={'24'}></Icon></a>
        </li>
    );
};