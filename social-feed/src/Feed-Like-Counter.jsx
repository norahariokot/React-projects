import React from "react";
import { useState } from "react";

function FeedLikeCounter() {
    const [likeCount, setCount] = useState(0);

    return (
        <div className="feed-like-btn-wrapper">
            <button onClick={() => setCount(likeCount + 1)}>
                <img src="/Images/like.png" alt="like icon"  />
            </button>
            <h3>{likeCount} likes</h3>
        </div>
    )
}

export default FeedLikeCounter