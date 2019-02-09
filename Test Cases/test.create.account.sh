#!/bin/bash
RET=$(curl 'http://proj-309-rb-b-2.cs.iastate.edu:3000/create_account' -H 'Cookie: wd_pcp_auth=czoyMDA6ImJiMDM4ZDVlNWZmOTJjYTc1NGI0ZjBkYzliNWRiNmQ5N2Q1ODcwNTU0ZGNjNjhjOGQ1ZTYyYjk2ZjA4Yjg1ZjIwYTcxOWEzMmFjNjQ1NzY1OWZiY2NmNGZmZmI1Y2RmYWZiZjU4OGJjOTAwMzY4ZWU3MTVjZDgzNmI3MGU5OTRkYzFhNmYwMDM2ZDcwMzM4NTMzMmJmNjdjZTgxMDM5YThiOTA1ZjNhMjNiZGEyYWY0NDFkMzRmOGUwNDllYTc0YTYzYjEzNTRiIjs%3D; webauth_urelwww=oB8W7CTpUThNCcIVI7b2HTzHglidOxxaxXBfTCXPq8xA%2FfEwjvPAAfeJs%2FIEUNiyFWNfvD1J5C5IbWMXtkp1w8mIJ8XGl1XC3O47osKfUgH%2BDjSEgslfNxxm9qyUl%2Bhs; __unam=8d177e0-16005591f36-4f3cb35e-2; javascript=on; io=AjPBBrCYSMUveJzuAAAT' -H 'Origin: http://proj-309-rb-b-2.cs.iastate.edu:3000' -H 'Accept-Encoding: gzip, deflate' -H 'Accept-Language: en-US,en;q=0.9' -H 'Upgrade-Insecure-Requests: 1' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8' -H 'Cache-Control: max-age=0' -H 'Referer: http://proj-309-rb-b-2.cs.iastate.edu:3000/create_account' -H 'Connection: keep-alive' --data 'uname=automated&psw=auto&confirmPsw=auto' --compressed --silent)
if [ "$RET" = "Username already taken." ]
then 
	echo "Create Account ret taken. Passed."
else
	echo "Create Account Failed."
fi