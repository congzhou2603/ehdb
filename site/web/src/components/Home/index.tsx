import React, { useState, useEffect } from 'react';
import './index.css';
import Gallery, { DisplayMode } from '../Gallery';
import Search, { SearchParameter } from '../Search';
import axios from 'axios';
import serverConfig from '../../config/server.json'
import { ProgressIndicator, DefaultButton, SpinButton, TextField } from 'office-ui-fabric-react';
import queryString from 'query-string';


export default function Home(props: any) {
    const [galleryList, setGalleryList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [enabledCat, setEnabledCat] = useState([])
    const [hasPrev, setHasPrev] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const fetchData = async (query?: any) => {
        setIsLoading(true);
        let params: any = {};
        if (query) {
            params = query;
        } else {
            params = queryString.parse(props.location.search);
        }
        if (params.search) {
            setQuery(params.search as string)
        }
        setEnabledCat(params.cat)
        const response = await axios.get(serverConfig.baseurl, {
            params: params
        });
        setCurrentPage(parseInt(response.data.currentPage))
        setHasPrev(response.data.currentPage > 0);
        setGalleryList(response.data.items);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    function doSearch(search: SearchParameter) {
        props.history.push({
            search: `?${queryString.stringify(search)}`
        });
        fetchData(search);
    }

    function toNext() {
        toPage(currentPage + 1)
    }

    function toPrev() {
        if (hasPrev) {
            toPage(currentPage - 1)
        }
    }

    function toPage(page: number) {
        const params = Object.assign(queryString.parse(props.location.search), {
            page
        })
        props.history.push({
            search: `?${queryString.stringify(params)}`
        });
        fetchData(params);
    }

    return (
        <div className="App">
            <div className="search-content">
                <Search cats={enabledCat} onChange={(it: any) => setQuery(it.target.value)} query={query} onSearch={(search) => doSearch(search)} />
            </div>
            {!isLoading &&
                <div className="paging-container">
                    {hasPrev && <DefaultButton text="<" onClick={toPrev} />}
                    <TextField type="number" value={currentPage.toString()} onChange={(it: any) => setCurrentPage(parseInt(it.target.value))} className="paging-input" />
                    <DefaultButton text="GO!" onClick={() => toPage(currentPage)} />
                    <DefaultButton text=">" onClick={toNext} />
                </div>
            }
            <div className="gallery-content">
                {isLoading && <ProgressIndicator />}
                {!isLoading && <Gallery displayMode={DisplayMode.ExtendedList} items={galleryList} />}
            </div>
            {!isLoading &&
                <div className="paging-container">
                    {hasPrev && <DefaultButton text="<" onClick={toPrev} />}
                    <TextField type="number" value={currentPage.toString()} onChange={(it: any) => setCurrentPage(parseInt(it.target.value))} className="paging-input" />
                    <DefaultButton text="GO!" onClick={() => toPage(currentPage)} />
                    <DefaultButton text=">" onClick={toNext} />
                </div>
            }
        </div>
    );
}

