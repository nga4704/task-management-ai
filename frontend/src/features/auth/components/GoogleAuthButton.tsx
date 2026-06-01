import {
  GoogleLogin,
} from "@react-oauth/google";

interface Props {
  onSuccess: (
    credentialResponse: any
  ) => void;

  onError: () => void;
}

function GoogleAuthButton({
  onSuccess,
  onError,
}: Props) {
  return (
    <GoogleLogin
      onSuccess={onSuccess}
      onError={onError}
      theme="outline"
      size="large"
      text="continue_with"
      shape="pill"
    />
  );
}

export default GoogleAuthButton;