import {
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useParams } from "react-router-dom";
import rehypeRaw from "rehype-raw";

import remarkGfm from "remark-gfm";
import { getIssue } from "../../api/api";
import Comments from "../../components/comment/comment.component";

import "./issue.page.styles.scss";

const Issue = () => {
  const [issue, setIssue] = useState({});

  const { number } = useParams();

  const fetchIssue = async (number) => {
    const response = await getIssue(number);
    setIssue(response);
  };

  useEffect(() => {
    fetchIssue(number);
  }, []);

  const { body, title, state, comments } = issue;

  return (
    <div className="issue-page-container">
      <div className="header">
        <h2 className="title">
          {title}
          <span className="issue">#{number}</span>
        </h2>
        <div className="sub-title">
          <span className="state">
            {state === "open" ? (
              <FontAwesomeIcon icon={faExclamationCircle} />
            ) : (
              <FontAwesomeIcon icon={faCheckCircle} />
            )}
          </span>
          <span className="user-name"></span>
          <span className="comments"> .{comments} comments</span>
        </div>
      </div>
      <ReactMarkdown
        children={body}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        className="body-container"
      />
      <ReactMarkdown className="comment-container" />
      <Comments number={number} />
    </div>
  );
};

export default Issue;
