import React from "react";
import { POST_COMMENT } from "../../api";

const FeedModalComments = ({id, comments}) => {
  const [comment, setComment] = React.useState()
  const [listComments, setListComments] = React.useState(() => comments)

  async function handleSubmmit(event){
    event.preventDefault();
		const { url, options } = POST_COMMENT(id, {comment})
		const response = await fetch(url, options);
		console.log(response);
		const responseBody = await response.json();
		console.log("COMENTARIO  ---> ", responseBody);
    if(response && responseBody && response.status === 200){
      setComment("")
      setListComments((listComments) => [...listComments, responseBody])
    }
  }

	return (
    <div>
      <ul>
        {listComments.map(comment => <li><strong>{comment.comment_content}</strong></li>)}
      </ul>
      <form onSubmit={handleSubmmit}>
        <textarea value={comment} onChange={({target}) => setComment(target.value)}></textarea>
        <button>Postar</button>
      </form>
    </div>
		
	);
};

export default FeedModalComments;
