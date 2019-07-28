import React, { MouseEventHandler } from 'react';
import "./index.css";
import catConfig from '../../config/cat.json';

export enum CategoryMode {
    Normal,
    Compat,
    Large
}

function getKeyByValue(object: any, value: any) {
    return Object.keys(object).find(key => object[key] === value);
}

export default function Category(prop: { type: string, mode: CategoryMode, enable?: boolean, onClick?: MouseEventHandler<HTMLDivElement> }) {
    let mode = "cn";
    let type = getKeyByValue(catConfig, prop.type);
    switch (prop.mode) {
        case CategoryMode.Large:
            mode = "cw"
            break;
        case CategoryMode.Normal:
            mode = "cn"
            break;
        case CategoryMode.Compat:
            mode = "cs"
            break;
        default:
            break;
    }
    return (
        <div onClick={prop.onClick} data-disabled={prop.enable === false || undefined} className={`${mode} ${type}`}>
            {prop.type}
        </div>
    )
}