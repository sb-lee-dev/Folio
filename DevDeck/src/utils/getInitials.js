export const getInitials = (name) => {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
};
