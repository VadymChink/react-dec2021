import React, {useEffect, useState} from 'react';
import {Outlet, useSearchParams} from "react-router-dom";

import {postsService} from "../../services";
import {Post} from "../../components";

export const PostsPage = () => {

    const [posts, setPosts] = useState(null);

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        postsService.getAll(query.get('page'), 15).then(({data}) => setPosts(data))
    }, [query])

    const nextPage = () => {
        // let page = query.get('page');
        // page = +page + 1
        // setQuery({page: page.toString()})

        const queryObj = Object.fromEntries(query.entries());
        queryObj.page++;
        setQuery(queryObj)
    }

    const previousPage = () => {
        // let page = query.get('page');
        // page = +page - 1
        // setQuery({page: page.toString()})

        const queryObj = Object.fromEntries(query.entries());
        queryObj.page--;
        setQuery(queryObj)
    }

    return (
        <div style={{display: "flex"}}>
            <div>

                <button disabled={query.get('page') === '1'} onClick={() => {
                    previousPage()
                }}>
                    Prev Page
                </button>

                <button disabled={query.get('page') === '7'} onClick={() => {
                    nextPage()
                }}>
                    Next Page
                </button>


                {posts && posts.map((post) => <Post key={post.id} post={post}/>)}

            </div>
            <div><Outlet/></div>
        </div>
    );
};