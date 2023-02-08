import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import "./App.scss";
import IssueItem from "./components/issue-item/issue-item";

const App = () => {
  const [issues, setIssues] = useState([]);

  const octokit = new Octokit({
    auth: "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",
  });

  const fetchData = async () => {
    const response = await octokit.request(
      "GET /repos/TheOdinProject/theodinproject/issues",
      {
        owner: "TheOdinProject",
        repo: "theodinproject",
      }
    );
    const data = response.data;
    setIssues(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="issues-container">
      {issues.map((issue) => (
        <IssueItem issue={issue} />
      ))}
    </div>
  );
};

export default App;
