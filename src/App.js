import { Route, Routes } from "react-router-dom";
import Issue from "./pages/issue-page/issue.page";
import IssuesListPage from "./pages/issues-list-page/issues-list.page";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<IssuesListPage />} />
        <Route path="issues/:number" element={<Issue />} />
      </Route>
    </Routes>
  );
};

export default App;
