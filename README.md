# NPM Package for Powerfull Pagination
Javascript (Nodejs Pagination)
Pagination for Nodejs & Mongodb
getPager (For Pagination)

### How To Use
> npm install rpspagination

#import
> var rpspagination = require("rpspagination");

>var limit = 20;
>var nav = rpspagination.pageLimitToForm(page, limit);
>var skip = nav["from"];
>var page = nav["page"];

##======
>rpspagination.getPager(count, page, limit, function(pagination) {
>   console.log(pagination)
>});

##====== Output (demo)
totalItems: 200,
currentPage: 1,
pageSize: 10,
totalPages: 20,
startPage: 1,
nextPage: 2,
previousPage: null,
endPage: 20,
startIndex: 1,
endIndex: 20,
previousIndex: previousIndex,
nextIndex:nextIndex,
pages: 20

###License
MIT