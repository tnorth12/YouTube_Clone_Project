import React, { useState } from 'react';

const LikeButton = () => {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>
          Like {count}      
        </button>  
        <button onClick={() => setCount(count - 1)}>
          Dislike {count}
        </button>
      </div>
    );
  }

export default LikeButton;