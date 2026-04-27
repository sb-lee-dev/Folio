export const sortRoadmap = (roadmap) => {
  const progressOrder = {
    "not-started": 1,
    learning: 2,
    done: 3,
  };

  return [...roadmap].sort(
    (a, b) => progressOrder[a.progress] - progressOrder[b.progress],
  );
};
