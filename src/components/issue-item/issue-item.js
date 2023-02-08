import "./issue-item.scss";

const IssueItem = ({ issue }) => {
  const { id, title, labels, number, user } = issue;

  return (
    <div className="issue-item-container">
      <li key={id}>
        {title}
        {labels.map((label) => (
          <span key={label.id}>{label.name}</span>
        ))}
        <div className="issue-info">
          <span key={user}>{`${number} opened by ${user.login} `}</span>
        </div>
      </li>
    </div>
  );
};

export default IssueItem;
