import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Comments from "./components/comment/comment.component";
import Issue from "./pages/issue-page/issue.page";
import IssuesListPage from "./pages/issues-list-page/issues-list.page";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<IssuesListPage />} />
      </Route>
      <Route path="/issues/:number" element={<Issue />} />
      <Route path="/hello" element={<Comments />} />
    </Routes>
  );
};

export default App;
