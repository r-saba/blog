---
path: "/blog-performance"
date: "2020-12-29"
title: "Fonts are Fat!"
keywords: "fonts, http, performance"
---

Revamping my blog was relatively straight forward. I just took the existing logic, added some CSS, a few new fonts and boom... my website was slower than my first program which had 4 nested inner loops...

<h2>My (current) Solution</h2>

I was using the `gatsby-plugin-web-font-loader` which would fetch my google fonts asynchronously. The home section font is used only once. I realized it would be more efficient to deploy the app with the font locally. Especially since it's the first font that needs to be loaded. This resolved the issue. Now the page is loaded with the correct font. Unlike previously where, while the font was being fetched, the page would load with some default browser font.
