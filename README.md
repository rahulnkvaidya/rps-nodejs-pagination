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
> pagination: {<br />
>   totalItems: 7741,<br />
>   currentPage: 1,<br />
>   pageSize: 10,<br />
>   totalPages: 775,<br />
>   startPage: 1,<br />
>   nextPage: 2,<br />
>   previousPage: null,<br />
>   endPage: 10,<br />
>   startIndex: 0,<br />
>   endIndex: 9,<br />
>   previousIndex: 0,<br />
>   nextIndex: 10,<br />
>   pages: [<br />
>        1,<br />
>        2,<br />
>        3,<br />
>        4,<br />
>        5,<br />
>        6,<br />
>        7,<br />
>        8,<br />
>        9,<br />
>        10<br />
>   ]<br />
> }<br />

###License
MIT