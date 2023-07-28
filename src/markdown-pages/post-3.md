---
path: "/async-await"
date: "2021-02-21"
title: "I Solemly Swear to return a promise"
keywords: "JavaScript, promises, async, await"
---
`async`
I recently found out that `async` functions will return a promise implicitly. I've been returning promises explicitly for as long as I can remember and I've never had a linter complain. So I read the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) and this is what I learned.

<h2>Wait, Don't await!</h2>

`async` functions wrap the return value in a promise. This means both functions below are equivalent.

```javascript
// both functions return a promise
async myFunc(){ return await someAsyncFunc()};
async ourFunc(){ return someAsyncFunc()}
```

<h2>async/await under the hood</h2>

As someone who worked with promise chains because my node environment did not support `async/await`, I am ecstatic whenever I don't have to use chains. While reading the documentation, I realized that async functions are still building these promise chains under the hood!

A nice way to think about async/await as written in the [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) is **Code after each await expression can be thought of as existing in a .then callback.**

Understanding exactly how async/await works and how it relates to the previous methods for handling promises will make our lives as developers easier when we need to debug some failed async function.
