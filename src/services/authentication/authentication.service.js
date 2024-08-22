import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../App";

export const loginRequest = async (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerRequest = async (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
