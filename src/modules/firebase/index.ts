import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { GithubAuthProvider } from 'firebase/auth';
import { FIREBASE_CONFIG } from 'src/constants';

export const app = initializeApp(FIREBASE_CONFIG);
export const analytics = getAnalytics(app);
export const gitHubAuthProvider = new GithubAuthProvider().addScope('repo');
