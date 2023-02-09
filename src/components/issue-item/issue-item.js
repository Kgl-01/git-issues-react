import { Link, useParams } from "react-router-dom";
import Label from "../labels/labels.component";
import "./issue-item.scss";

export const issueOpenedOn = (created_at) => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const createdAt = new Date(created_at);
  const monthName = month[createdAt.getUTCMonth()].toString().slice(0, 3);
  const date = createdAt.getUTCDate().toString();
  const year = createdAt.getUTCFullYear().toString();

  return `${monthName} ${date},${year}`;
};

const IssueItem = ({ issue }) => {
  const { id, title, labels, number, user, created_at } = issue;

  return (
    <div className="issue-item-container">
      <li key={id}>
        <Link to={`/issues/${number}`}>
          <span className="title">{title}</span>
        </Link>
        <Label labels={labels} />
      </li>

      <div className="issue-info">
        <span key={user}>{`#${number} opened on ${issueOpenedOn(
          created_at
        )} by ${user.login} `}</span>
      </div>
    </div>
  );
};

export default IssueItem;
