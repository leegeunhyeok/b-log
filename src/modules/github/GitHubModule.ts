import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { gitHubAuthProvider } from '../firebase';

class GitHubModule {
  static async login () {
    const auth = getAuth();
    const result = await signInWithPopup(auth, gitHubAuthProvider);
    const credential = GithubAuthProvider.credentialFromResult(result);

    if (credential === null) {
      throw new Error('credential is empty');
    }

    const token = credential.accessToken;
    const user = result.user;
    return { token, user };
  }
}

export default GitHubModule;
