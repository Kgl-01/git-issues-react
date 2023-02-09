import { uniqueId } from "lodash";
import { useEffect, useState } from "react";
import { fetchIssues } from "../../api/api";
import IssueItem from "../../components/issue-item/issue-item";
import Pagination from "../../components/Paginate/pagination.component";
import { paginate } from "../../utils/paginate.utils";
import "./issues-list.page.scss";

const IssuesListPage = () => {
  const [issues, setIssues] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(8);

  const getIssues = async () => {
    const issues = await fetchIssues();

    const totalCount = await issues.length;
    setTotalCount(totalCount);
    const issuesList = await paginate(issues, currentPage, pageSize);
    setIssues(issuesList);
  };

  useEffect(() => {
    getIssues();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    issues && (
      <div className="issues-page">
        <h2 className="homepage-title">Github Issues list Simplified View</h2>
        <div className="issues-container">
          {issues.map((issue) => (
            <IssueItem key={uniqueId()} issue={issue} />
          ))}
        </div>
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    )
  );
};

export default IssuesListPage;
