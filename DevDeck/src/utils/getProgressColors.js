export const getProgressColors= (progress) => {
  const colors = {
    "Completed": {
      backgroundColor: "#eaf6df",
      color: "#285f13",
    },
    "In progress": {
      backgroundColor: "#f9ead4",
      color: "#6b3d00",
    },
    "Planning": {
      backgroundColor: "#eeeeeb",
      color: "#444",
    },
  };
  return colors[progress];
}
