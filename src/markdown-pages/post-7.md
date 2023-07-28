---
path: "/compiling-java-in-c"
date: "2023-07-23"
title: " Using the C++ compiler to compile my java file written in C into machine code"
keywords: "Compiler, gcc, g++"
---
TLDR: Using the following command I was able to compile my **java** file written in **C** with the **C++** compiler into runnable machine code.
```bash
g++ -x c -o fake_hello fake_hello_world.java
```
<h2>gcc versus g++</h2>

This is a very simplified and not entirely accurate statement, but for the sake of this blog I will assume that gcc is a “C compiler” while g++ is a C++ compiler. While `gcc` is a general-purpose compiler that can compile code written in multiple programming languages, it is often used as a C compiler. On the other hand, `g++`is a compiler specifically designed to compile C++ code.
<br>
<br>
What’s important to know is that gcc and g++ share the same backend. The g++ compiler is a superset of the gcc compiler. This got me wondering if I could compile my C code using g++ instead of gcc.
<br>
<br>
I tried, here’s the result

```bash
ragith|⇒ g++ hello_world.c
clang: warning: treating 'c' input as 'c++' when in C++ mode, this behavior is deprecated [-Wdeprecated]
```
So it seems like at one point this would have been possible but now we need to explicitly tell the compiler to compile in C instead of C++.

<h2>The -x Compiler Option</h2>
This flag has the following description: “Specify explicitly the language
for the following input files (rather than letting the compiler choose a default based on the file name suffix)”. The part that intrigued me was that this flag allows us to ignore file extensions and tell the compiler directly what language the file is written in. So I thought hey, if I write my C program in a .java file and use this flag, technically I am compiling my java file written in C using the C++ compiler!
<br>
<br>
Well… that’s exactly what happened. Take a look.

```bash
ragith|⇒ g++ -x c -o fake_java_hello fake_java_hello_world.java
ragith|⇒ ./fake_java_hello                              
Hello, world in C not Java! :D
```

<h2>New word, Cross-Compiling</h2>

So I had no idea there was a word for what I was doing, it’s called cross-compiling. Here I demonstrated cross-compiling my Java program using the g++ compiler. 

<h2>Closing Remarks and clarifications</h2>

The title is catchy but not fully accurate. Technically the “java file” I am talking about is just a C program written in a file with the `.java` extension. Since the code in this file is C, it’s fair to say that this is not a Java file. A suffix of a file does not necessarily describe the contents of that file. But, I wanted to prove that regardless of the file extension, I could tell the compiler what compilation strategy to use and that’s why I chose to have a suffix other than `.c`
<br>
<br>
<br>
Hope you learned something cool as well, thanks for reading.
<br>
Ragith