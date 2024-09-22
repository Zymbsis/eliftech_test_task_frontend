export const createPagination = (totalPages, currentPage, buttonsCount) => {
  if (totalPages < buttonsCount) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const paginationNav = Array.from({ length: buttonsCount }, (_, i) => i);
  const navLength = paginationNav.length;

  if (currentPage >= totalPages - (navLength - 1)) {
    return paginationNav.map((_, i) => totalPages - i).reverse();
  }

  return paginationNav.map((_, i) => {
    if (i === navLength - 1) {
      return totalPages;
    } else if (i === navLength - 2) {
      return totalPages - 1;
    } else if (i === navLength - 3) {
      return '...';
    } else {
      return i + currentPage;
    }
  });
};
