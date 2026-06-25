export const getApiErrorMessage = (err: any) => {
  return (
    err?.response?.data?.message ||
    err?.message ||
    "Something went wrong"
  );
};