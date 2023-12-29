import React from "react";
import CustomButton from "./CustomButton";

const SocialSignInButton = () => {
  const onSignInWithFb = () => {
    console.warn('SignIn with FB')
  };
  const onSignInWithGoogle = () => {
    console.warn('SignIn with Google')
  };
  const onSignInWithApple = () => {
    console.warn('SignIn with Apple')
  };
  return (
    <>
      <CustomButton
        title="Sign In with Facebook"
        onPress={onSignInWithFb}
        type="Primary"
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        title="Sign In with Google"
        onPress={onSignInWithGoogle}
        type="Primary"
        bgColor="#fae9ea"
        fgColor="#dd4d44"
      />
      <CustomButton
        title="Sign In with Apple"
        onPress={onSignInWithApple}
        type="Primary"
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButton;
