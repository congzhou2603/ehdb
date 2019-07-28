import React from 'react';
import { IRectangle } from '@uifabric/utilities';
import { GalleryModel } from '../../model/gallery';
import ExtendedListitem from './ExtendedListitem';

export enum DisplayMode {
    Grid,
    List,
    ExtendedList
}

export interface IGalleryProps {
    items: GalleryModel[];
    displayMode: DisplayMode
}

const ROWS_PER_PAGE = 3;
const MAX_ROW_HEIGHT = 250;

export default function Gallery(props: IGalleryProps) {
    let columnCount = 0;
    let columnWidth = 0;
    let rowHeight = 0;
    let listProps: any = {};
    if (props.displayMode === DisplayMode.Grid) {
        listProps.getItemCountForPage = (itemIndex?: number, surfaceRect?: IRectangle): number => {
            if (itemIndex === 0) {
                columnCount = Math.ceil(surfaceRect!.width / MAX_ROW_HEIGHT);
                columnWidth = Math.floor(surfaceRect!.width / columnCount);
                rowHeight = columnWidth;
            }
            return columnCount * ROWS_PER_PAGE;
        }
        listProps.getPageHeight = (): number => {
            return rowHeight * ROWS_PER_PAGE;
        }
    }
    return (
        <div>
            {props.items.map((it, index) => (
                <ExtendedListitem key={index} gallery={it}/>
            ))}
        </div>
    );
}