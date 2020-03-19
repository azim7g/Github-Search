import React, {useContext} from 'react';
import Search from "../components/Search";
import Card from "../components/Card";
import {GithubContext} from "../context/github/githubContext";
import Loader from "../components/Loader";

const Home = (props) => {
    const {loading, users} = useContext(GithubContext);
    return (
        <>
            <Search/>
            <div className="row">
                {loading
                    ? <Loader/>
                    : users.map(user => (
                    <div className="col-sm-4 mb-4" key={user.id}>
                        <Card user={user} />
                    </div>
                ))}
            </div>
        </>
    )
};

export default Home;
