import React from "react";
import Article from "./Article"

function ArticleList( {posts} ) {
    console.log(posts)

    const artArr = posts.map((e)=>{
        return <Article key = {e.id} title = {e.title} date = {e.date} preview = {e.preview} />
    })

    console.log(artArr)

    return (
        <main className="ArticleList">
            {artArr}
        </main>
    );
}

export default ArticleList;