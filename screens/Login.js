import React, { useState, useRef, useEffect } from "react";
import AuthContent from "../components/Auth/AuthContent";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { auth, firebaseConfig } from "../fireBase.config";
import { useNavigation } from "@react-navigation/native";
import OtpScreen from "./OtpScreen";
import { useSelector, useDispatch } from "react-redux";
import { verified } from "../store/redux/authReducer";

const Login = () => {
  const authState = useSelector((state) => state.auth);
  const recaptchaVerifier = useRef(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [verificationId, setVerificationID] = useState("");
  const attemptInvisibleVerification = false;

  const handleSendVerificationCode = async ({ phone }) => {
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      const verificationIdCOde = await phoneProvider.verifyPhoneNumber(
        phone,
        recaptchaVerifier.current
      );
      setVerificationID(verificationIdCOde);
      navigation.navigate("OtpScreen");
    } catch (error) {
      console.log(`Error : ${error.message}`);
    }
  };

  const handleVerifyVerificationCode = async () => {
    const verificationCode = authState.verifyCode;
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await signInWithCredential(auth, credential);
      console.log("Success: Phone authentication successful");
      dispatch(verified());
      navigation.navigate("CoffeeOverwiev");
    } catch (error) {
      console.log(`Error : ${error.message}`);
    }
  };

  if (authState.verifyCode) {
    handleVerifyVerificationCode();
  }

  return (
    <>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        attemptInvisibleVerification
      />

      {
        // show the phone number input field when verification id is not set.
        !verificationId && (
          <AuthContent isLogin onAuth={handleSendVerificationCode} />
        )
      }

      {
        // if verification id exists show the confirm code input field.
        verificationId && (
          <OtpScreen
            resendCode={() => {}}
            handleVerifyVerificationCode={handleVerifyVerificationCode}
          />
        )
      }

      {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
    </>
  );
};

export default Login;
