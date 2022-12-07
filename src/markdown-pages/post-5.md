---
path: "/redis-memory"
date: "2022-12-06"
title: "How Much of Your RAM Does Redis Use?"
keywords: "Redis, RAM, Memory"
---

**Excerpt:** So there you go... Redis actually gives you extra RAM! All these years I was just downloading RAM when I could have been running multiple Redis Servers instead..

<h2>Introduction</h2>

Redis is an in-memory database. This means that it operates and uses the RAM. There are rare cases where it uses disk, such as when swapping, but here we focus on trying to answer how much RAM a Redis Server takes up.

<h2>Attempt #1 - Using the free command</h2>

I was already familar with the free command. This command shows the ammount of free and used memory on your system. You can use the flag -b to specify bytes, `free -b` for example. 

<br>

| Running Process 	| used (bytes) 	| Delta (bytes) 	|
|-----------------	|--------------	|---------------	|
| Nothing         	| 6920323072   	|               	|
| Redis Server    	| 6918262784   	|  -2060288     	|

<br>

So there you go... Redis actually gives you extra RAM! All these years I was just downloading RAM when I could have been running multiple Redis Servers instead. 
Here `free` shows 2MB less used memory while Redis is running. I noticed that the memory shown by the `free` command fluctuates by a few MB. This is because it shows the memory used by the entire system. At the time I had many processes other than Redis running. Chrome, Gatsby, Visual Studio Code, just to name a few. If I really wanted to get to the bottom of how much RAM redis uses, I would need another tool.

<h2>Attempt #2 - Using the ps command</h2>

The `ps` command returns a snapshot of the current process. Importantly for us, it has a Resident Set Size column in the output, this is the amount of memory allocated to the Redis process.

Using `ps aux | grep redis` I found that Redis Server uses... 6052 bytes of your RAM!

<h2>Helpful Resources in this Investigation</h2>

[man page for free](https://man7.org/linux/man-pages/man1/free.1.html)

[man page for ps](https://man7.org/linux/man-pages/man1/ps.1.html)

[Using the ps aux Command in Linux](https://www.linode.com/docs/guides/use-the-ps-aux-command-in-linux/)

[Stack Overflow Discussion Resident Set Size vs Virtual Memory Size](https://stackoverflow.com/questions/7880784/what-is-rss-and-vsz-in-linux-memory-management#:~:text=RSS%20is%20Resident%20Set%20Size,behind%20it%20all%20right%20now)