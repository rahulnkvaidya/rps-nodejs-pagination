# NPM Package for Powerfull Pagination
Javascript (Nodejs Pagination)<br />
Pagination for Nodejs & Mongodb<br />
getPager (For Pagination)<br />

### How To Use
> npm install rpspagination<br />

#import
> var rpspagination = require("rpspagination");<br />

>var limit = 20;<br />
>var nav = rpspagination.pageLimitToForm(page, limit);<br />
>var skip = nav["from"];<br />
>var page = nav["page"];<br />

##======
>rpspagination.getPager(count, page, limit, function(pagination) {<br />
>   console.log(pagination)<br />
>});<br />

##====== Output (demo)
totalItems: 200,<br />
currentPage: 1,<br />
pageSize: 10,<br />
totalPages: 20,<br />
startPage: 1,<br />
nextPage: 2,<br />
previousPage: null,<br />
endPage: 20,<br />
startIndex: 1,<br />
endIndex: 20,<br />
previousIndex: previousIndex,<br />
nextIndex:nextIndex,<br />
pages: 20<br />

###License
MIT