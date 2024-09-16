import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaSsu_YE6tRgBKGmfQ1UpxTctezWvtSUY",
  authDomain: "netflix-clone-dd928.firebaseapp.com",
  projectId: "netflix-clone-dd928",
  storageBucket: "netflix-clone-dd928.appspot.com",
  messagingSenderId: "534326656618",
  appId: "1:534326656618:web:b29b8e5d61c35f4d699413",
  measurementId: "G-JTEGTPB2ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Optionally initialize analytics
const Analytics = getAnalytics(app); // Remove if not used

// Signup function
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Store user data in Firestore
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });

    toast.success("Sign up successful!");
  } catch (error) {
    console.error("Signup error:", error.message); // Log the error message
    toast.error(parseFirebaseErrorCode(error.message)); // Display the error message
  }
}

// Login function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login successful!");
  } catch (error) {
    console.error("Login error:", error.message); // Log the error message
    toast.error(parseFirebaseErrorCode(error.code)); // Display parsed error message
  }
}

// Logout function
const logout = async () => {
  try {
    await signOut(auth);
    toast.success("Logout successful!");
  } catch (error) {
    console.error("Logout error:", error.message); // Log the error message
    toast.error(parseFirebaseErrorCode(error.code)); // Display parsed error message
  }
}

// Helper function to parse Firebase error codes
const parseFirebaseErrorCode = (code) => {
  return code.split('/')[1]?.replace(/-/g, ' ') || "An error occurred";
}

export { auth, db, login, signup, logout };
