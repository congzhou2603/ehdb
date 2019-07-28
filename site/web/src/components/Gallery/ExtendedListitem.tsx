import React, { useState } from 'react';
import { IItemProp } from './IItemProp';
import Category, { CategoryMode } from '../Category';
import Tag from '../Tag';
import { Text } from 'office-ui-fabric-react/lib/Text';
import Timestamp from '../Timestamp';
import Space from '../Space';
import { Rating } from 'office-ui-fabric-react/lib/Rating';
import { ActionButton, Dialog, DialogFooter, PrimaryButton, DialogType } from 'office-ui-fabric-react';

export default function ExtendedListitem(prop: IItemProp) {
    const [hideDialog, setHideDialog] = useState(true);
    const { gallery } = prop;
    return (
        <div>
            <Dialog
                hidden={hideDialog}
                onDismiss={() => setHideDialog(true)}
                dialogContentProps={{
                    type: DialogType.normal,
                    title: 'Raw Detail',
                    subText: JSON.stringify(gallery)
                }}
            >
                <DialogFooter>
                    <PrimaryButton onClick={() => setHideDialog(true)} text="OK" />
                </DialogFooter>
            </Dialog>
            <ActionButton
                style={{
                    marginRight: '1.2em',
                    position: 'relative',
                    float: 'right'
                }}
                menuProps={{
                    items: [
                        {
                            key: 'raw',
                            text: 'Raw detail',
                            onClick: () => setHideDialog(false)
                        }
                    ]
                }}
                title="More"
                ariaLabel="More" />
            <div className="ms-Grid ms-depth-4" dir="ltr" style={{ margin: '1.2em', padding: '1.1em' }}>
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4 ms-xl3 ms-xxl2 ms-xxxl2">
                        <img src={gallery.thumb} />
                    </div>
                    <div className="ms-Grid-col ms-hiddenLgDown ms-sm12 ms-md12 ms-lg3 ms-xl2 ms-xxl2 ms-xxxl1" style={{textAlign: 'center'}}>
                        <div>
                            <Category mode={CategoryMode.Normal} type={gallery.category} />
                        </div>
                        <Space />
                        <div>
                            <Timestamp time={gallery.posted} />
                        </div>
                        <Space />
                        <Rating
                            min={1}
                            max={5}
                            readOnly={true}
                            rating={parseInt(gallery.rating)} />
                        <Space />
                        <div>
                            {gallery.uploader}
                        </div>
                        <Space />
                        <div>
                            {gallery.filecount} pages
                    </div>
                    </div>
                    <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg8 ms-xl7 ms-xxl8 ms-xxxl9" style={{ textAlign: 'left', display: 'contents' }}>
                        <div>
                            <div>
                                <Text variant="large">
                                    {gallery.title}
                                </Text>
                            </div>
                            <Space />
                            <div>
                                <Text variant="mediumPlus">
                                    {gallery.title_jpn}
                                </Text>
                            </div>
                        </div>
                        <div className="ms-hiddenXlUp">
                            <Space />
                            <div>
                                <Category mode={CategoryMode.Normal} type={gallery.category} />
                            </div>
                            <Space />
                            <div>
                                <Timestamp time={gallery.posted} />
                            </div>
                            <Space />
                            <Rating
                                min={1}
                                max={5}
                                readOnly={true}
                                rating={parseInt(gallery.rating)} />
                            <Space />
                            <div>
                                {gallery.uploader}
                            </div>
                            <Space />
                            <div>
                                {gallery.filecount} pages
                        </div>
                        </div>
                        <Space />
                        <div>
                            <Tag tags={gallery.tags} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}