// Firebase web config for the Beat Relay (ctw-beat-relay project).
// The apiKey is a PUBLIC client identifier — safe to publish/commit.
// Real security is enforced by Firestore rules (firestore.rules) + Auth.
export const firebaseConfig = {
  apiKey: "AIzaSyDuDt0OWCocCCpsbNK4Yn4hXHtJY2owV64",
  authDomain: "ctw-beat-relay.firebaseapp.com",
  projectId: "ctw-beat-relay",
  storageBucket: "ctw-beat-relay.firebasestorage.app",
  messagingSenderId: "119823925922",
  appId: "1:119823925922:web:010e32482a0ddd76434dfb"
};
// Only this signed-in Google account can read the roster/emails + all groups.
export const MODERATOR_EMAIL = "calharrisinc@gmail.com";
