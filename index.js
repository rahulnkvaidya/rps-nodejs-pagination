var rps = {
  pageLimitToForm: function (page, limit) {
    var page = page;
    var limit = limit;
    if (_.isUndefined(page)) {
      page = 1;
    } else if (page === "undefined") {
      page = 1;
    } else if (_.isEmpty(page)) {
      page = 1;
    } else {
      page = page;
    }
    var from = page * limit - limit;
    var final = {
      page: page,
      from: from
    };
    return final;
  },
  getPager: function (totalItems, currentPage, pageSize, callback) {
    //  console.log(totalItems + "/" + currentPage + "/" + pageSize);
    // calculate total pages
    var totalItems = parseInt(totalItems);
    let totalPages = Math.ceil(totalItems / pageSize);

    // ensure current page isn't out of range
    if (currentPage < 1) {
      currentPage = 1;
      const curPage = currentPage;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
      const curPage = currentPage;
    }

    let startPage, endPage;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    let previousIndex = 0;
    if (startIndex === 0) {
      previousIndex = 0;
    } else {
      previousIndex = Math.min(startIndex - pageSize);
      console.log('previous id' + previousIndex)
    }
    let nextIndex = endIndex + 1;
    // if (startIndex === 0) {
    //   nextIndex = 0;
    // } else {
    //   nextIndex = Math.min(startIndex - pageSize);
    //   console.log('previous id'+ nextIndex)
    // }
    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
      (i) => startPage + i
    );
    // Next Page
    currentPage = parseInt(currentPage);
    var next = currentPage + 1;
    if (next <= totalPages) {
      // less than 10 total pages so show all
      next = next;
    } else {
      next = null;
    }
    var previousPage = currentPage - 1;
    if (previousPage >= 1) {
      // less than 10 total pages so show all
      previousPage = previousPage;
    } else {
      previousPage = null;
    }
    return callback({
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      nextPage: next,
      previousPage: previousPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      previousIndex: previousIndex,
      nextIndex: nextIndex,
      pages: pages
    });
  }
}
module.exports = rps