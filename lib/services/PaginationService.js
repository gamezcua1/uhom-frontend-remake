export const getTotalPages = (total_items, per_page) =>
  Math.ceil(total_items / per_page);
