/**
 *
 */
class GitHubClient {
  user: string;
  repo: string;

  public constructor(user: string, repo: string) {
    this.user = user;
    this.repo = repo;
  }

  public fetchFiles(): { [key: string]: string } {
    return {};
  }
}

export default GitHubClient;
