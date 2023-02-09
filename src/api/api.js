import { Octokit } from "octokit";

const gitHubToken = process.env.GITHUB_TOKEN;

const octokit = new Octokit({
  auth: gitHubToken,
});

export const fetchIssues = async () => {
  try {
    const response = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: "TheOdinProject",
      repo: "theodinproject",
    });
    const data = await response.data;
    const openIssues = data.filter(({ state }) => state === "open");
    return openIssues;
  } catch (error) {
    console.log(error);
  }
};

export const getIssue = async (number) => {
  const response = await octokit.request(
    `GET /repos/{owner}/{repo}/issues/${number}`,
    {
      owner: "TheOdinProject",
      repo: "theodinproject",
      issue_number: `${number}`,
    }
  );
  const data = await response.data;
  return data;
};

export const getComments = async (number) => {
  const response = await octokit.request(
    `GET /repos/TheOdinProject/theodinproject/issues/${number}/comments`,
    {
      owner: "TheOdinProject",
      repo: "theodinproject",
      issue_number: `${number}`,
    }
  );
  const data = await response.data;
  return data;
};
