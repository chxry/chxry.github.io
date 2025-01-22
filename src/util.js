export const formatDate = (date) =>
  // date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`;
