import React, { useState, useEffect } from 'react';
import { SearchBox } from 'office-ui-fabric-react';
import Category, { CategoryMode } from '../Category';
import "./index.css";
import catConfig from '../../config/cat.json';

export interface SearchParameter {
    cat: string[];
    search: string;
}

export interface ISearchProps {
    cats?: string[];
    onSearch?: (parameter: SearchParameter) => void;
    query?: string;
    onChange?: (event?: React.ChangeEvent<HTMLInputElement>, newValue?: string) => void;
}

export default function Search(props: ISearchProps) {

    const [doujinshiEnabled, setDoujinshiEnabled] = useState(true);
    const [mangaEnabled, setMangaEnabled] = useState(true);
    const [artistCGEnabled, setArtistCGEnabled] = useState(true);
    const [gameCGEnabled, setGameCGEnabled] = useState(true);
    const [westernEnabled, setWesternEnabled] = useState(true);
    const [nonhEnabled, setNonhEnabled] = useState(true);
    const [imageSetEnabled, setImageSetEnabled] = useState(true);
    const [cosplayEnabled, setCosplayEnabled] = useState(true);
    const [asianPornEnabled, setAsianPornEnabled] = useState(true);
    const [miscEnabled, setMiscEnabled] = useState(true);

    function search(value: string): void {
        if (props.onSearch) {
            props.onSearch({
                search: value,
                cat: buildCats()
            })
        }
    }

    function buildCats(): string[] {
        const cats: string[] = [];
        if (doujinshiEnabled &&
            mangaEnabled &&
            artistCGEnabled &&
            gameCGEnabled &&
            westernEnabled &&
            nonhEnabled &&
            imageSetEnabled &&
            cosplayEnabled &&
            asianPornEnabled &&
            miscEnabled) {
            return cats;
        }
        if (doujinshiEnabled) {
            cats.push('ct2')
        }
        if (mangaEnabled) {
            cats.push('ct3')
        }
        if (artistCGEnabled) {
            cats.push('ct4')
        }
        if (gameCGEnabled) {
            cats.push('ct5')
        }
        if (westernEnabled) {
            cats.push('cta')
        }
        if (nonhEnabled) {
            cats.push('ct9')
        }
        if (imageSetEnabled) {
            cats.push('ct6')
        }
        if (cosplayEnabled) {
            cats.push('ct7')
        }
        if (asianPornEnabled) {
            cats.push('ct8')
        }
        if (miscEnabled) {
            cats.push('ct1')
        }

        return cats;
    }

    useEffect(() => {
        if (props.cats && props.cats.length > 0) {
            setMiscEnabled(props.cats.includes("ct1")) 
            setDoujinshiEnabled(props.cats.includes("ct2")) 
            setMangaEnabled(props.cats.includes("ct3")) 
            setArtistCGEnabled(props.cats.includes("ct4")) 
            setGameCGEnabled(props.cats.includes("ct5")) 
            setImageSetEnabled(props.cats.includes("ct6")) 
            setCosplayEnabled(props.cats.includes("ct7")) 
            setAsianPornEnabled(props.cats.includes("ct8")) 
            setNonhEnabled(props.cats.includes("ct9")) 
            setWesternEnabled(props.cats.includes("cta")) 
        }
    }, [props]);

    return (
        <div>
            <div className="search-category-list">
                <div className="ms-Grid" dir="ltr">
                    <div className="ms-Grid-row">
                        <Category mode={CategoryMode.Compat} onClick={() => setDoujinshiEnabled(!doujinshiEnabled)} enable={doujinshiEnabled} type={'Doujinshi'} />
                        <Category mode={CategoryMode.Compat} onClick={() => setMangaEnabled(!mangaEnabled)} enable={mangaEnabled} type={'Manga'} />
                        <Category mode={CategoryMode.Compat} onClick={() => setArtistCGEnabled(!artistCGEnabled)} enable={artistCGEnabled} type={'Artist CG'} />
                        <Category mode={CategoryMode.Compat} onClick={() => setGameCGEnabled(!gameCGEnabled)} enable={gameCGEnabled} type={'Game CG'} />
                        <Category mode={CategoryMode.Compat} onClick={() => setWesternEnabled(!westernEnabled)} enable={westernEnabled} type={'Western'} />
                    </div>
                    <div className="ms-Grid-row">
                        <Category mode={CategoryMode.Compat} onClick={() => setNonhEnabled(!nonhEnabled)} enable={nonhEnabled} type={'Non-H'} />
                        <Category mode={CategoryMode.Compat} onClick={() => setImageSetEnabled(!imageSetEnabled)} enable={imageSetEnabled} type={'Image Set'} />
                        <Category mode={CategoryMode.Compat} onClick={() => setCosplayEnabled(!cosplayEnabled)} enable={cosplayEnabled} type={'Cosplay'} />
                        <Category mode={CategoryMode.Compat} onClick={() => setAsianPornEnabled(!asianPornEnabled)} enable={asianPornEnabled} type={'Asian Porn'} />
                        <Category mode={CategoryMode.Compat} onClick={() => setMiscEnabled(!miscEnabled)} enable={miscEnabled} type={'Misc'} />
                    </div>
                </div>
            </div>
            <SearchBox
                value={props.query}
                onChange={props.onChange}
                onSearch={(value: string) => search(value)}
                placeholder="For we shall win through. No matter the cost." />
        </div>
    );

}