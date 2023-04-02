import React, {useMemo, useState}    from 'react';
import {data}                        from "./data";
import {IDataItem, ITransformedData} from "./interface";
import Search                        from "./components/searching/search";
import Card                          from "./components/card/card";
import styles                        from './app.module.scss';


const getTransformedData = (data: any): ITransformedData[] => {
    const items: IDataItem = data[0];
    const descriptions: IDataItem = data[1];
    const result: ITransformedData[] = [];

    Object.keys(items).forEach((item) => {
        result.push({
            name: item,
            translated: items[item],
            description: descriptions[item] || '',
            searchString: `${item} ${items[item]}`
        })
    });

    result.sort((a,b)=>a.name.localeCompare(b.name))

    return result;
}


function App() {
    const db = useMemo(() => getTransformedData(data), []);
    const [search, setSearch] = useState('');
    const filteredDB = db.filter(item => item.searchString.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <Search search={search} setSearch={setSearch}/>
            </div>
            <div>
                {filteredDB.map(item => <Card data={item} key={item.name}/>)}
            </div>
        </div>
    );
}

export default App;
