import { Search as SearchIcon }       from '@material-ui/icons';
import CN                             from 'classnames';
import React, { useEffect, useState } from 'react';
import styles                         from './search.module.scss';
import useTimeout                     from "../../hooks/useTimeout";
import UiInput                        from "../input";

interface SearchProps {
    search: string,
    setSearch?: React.Dispatch<React.SetStateAction<string>>,
    returnSearch?: (search: string) => void,
    testId?: string,
    offsetTime?: number,
    disabled?: boolean,
    label?: string
    width?: boolean
    noStyle?: boolean
}

const Search: React.FC<SearchProps> = ({
                                           search,
                                           setSearch,
                                           testId,
                                           returnSearch,
                                           offsetTime,
                                           disabled,
                                           label,
                                           width,
                                           noStyle
                                       }) => {
    const [currentSearch, setCurrentSearch] = useState('');
    const [firstTime, setFirsTime] = useState(true);
    const timeout = useTimeout(offsetTime);

    useEffect(() => {
        if (firstTime && !!search.trim().length) {
            setCurrentSearch(search);
            setFirsTime(false);
        }
        if (!firstTime && search == '') {
            setCurrentSearch('');
        }
    }, [search]);

    const handleSearch = (value: string) => {
        setCurrentSearch(value);

        if (offsetTime === 0) {
            setSearch && setSearch(value);
            returnSearch && returnSearch(value);
        } else {
            timeout(() => {
                    setSearch && setSearch(value);
                    returnSearch && returnSearch(value);
                }
            );
        }
    }

    return (
        <UiInput
            className={CN('tms-search', styles.search, {[styles.noStyle]: [noStyle]})}
            id="standard-basic"
            variant="outlined"
            placeholder="Поиск"
            value={currentSearch}
            data-testid={testId ? testId : 'input-search'}
            onChange={(e) => handleSearch(e.target.value)}
            InputProps={{
                endAdornment: <SearchIcon/>
            }}
            disabled={disabled}
            label={label}
        />
    )
}

export default Search;
