import React from 'react';
import { IItemProp } from './IItemProp';
import { HoverCard } from 'office-ui-fabric-react/lib/HoverCard';
import { GalleryModel } from '../../model/gallery';

export default function ListItem(prop: IItemProp) {
    const { gallery } = prop;
    return (
        <HoverCard
            expandingCardProps={{
                onRenderCompactCard: (item: GalleryModel) => (
                    <div>
                        <img src={item.thumb} />
                    </div>
                ),
                onRenderExpandedCard: (item: GalleryModel) => (
                    <div>
                        {item.title_jpn}
                    </div>
                ),
                renderData: gallery
            }}

            expandedCardOpenDelay={500}
            instantOpenOnClick={true}>
            <div className="ms-Grid">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                        {gallery.category}
                    </div>
                    <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                        {gallery.posted}
                    </div>
                    <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg4">
                        {gallery.title}
                    </div>
                    <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                        {gallery.rating}
                    </div>
                    <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                        {gallery.uploader}
                    </div>
                </div>
            </div>
        </HoverCard>
    )
}