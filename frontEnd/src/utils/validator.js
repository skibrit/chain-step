export const checkStatus = (status) => {
  return status === "completed";
};

export const getStatus = (status) => {
  return status ? "completed" : "pending";
};
