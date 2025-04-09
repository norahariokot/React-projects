import React from "react";
import FeedLikeCounter from "./Feed-Like-Counter";

function Feed({feedPics}) {
    return(
        <div>
            {feedPics.map(({imageUrl}, index) => 
                <div key={index}>
                    <figure>
                        <img src={imageUrl} alt="picture" />
                    </figure>
                    <FeedLikeCounter />
                </div>
            )}                  
        </div>
    )
}

export default Feed;