import { uniqueId } from "lodash";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { getComments } from "../../api/api";
import "./comments.styles.scss";

const Comments = ({ number }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async (number) => {
      const response = await getComments(number);
      setComments(response);
    };
    fetchComments(number);
  }, []);

  return (
    <div className="comments-container">
      {comments.map((comment) => (
        <div key={uniqueId()} className="comment-item">
          <span className="replier-info">{comment.user.login} commented</span>
          <ReactMarkdown
            className="comment-body"
            children={comment.body}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          />
        </div>
      ))}
    </div>
  );
};

export default Comments;
