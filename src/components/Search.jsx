import React, {useContext, useState} from 'react';
import {AlertContext} from '../context/alert/alertContext'
import {GithubContext} from "../context/github/githubContext";

const Search = (props) => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const github = useContext(GithubContext);
    const onSubmit = e => {
        if (e.key !== 'Enter') return;
        github.clearUsers();
        if (value.trim()) {
            // делаю запрос на получение данных
            github.search(value.trim());
            alert.hide();
        } else alert.show('Введите имя пользователя')
    };

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Введите ник пользователя..."
                value={value}
                onChange={e => setValue(e.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    )
};

export default Search;
