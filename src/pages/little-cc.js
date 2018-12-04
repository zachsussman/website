import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import Heading from '../components/heading';
import ProjectHeader from '../components/project-header';
import ProjectFooter from '../components/project-footer';

let LittleCC = () => (
    <Layout>
        <ProjectHeader name="Little-CC" />

        <p>
            I decided to write a self-hosting compiler. Since I was in 15-122 at Carnegie Mellon (which is taught in C), and since C fits in that sweet spot in the intersection of possible to write code in and possible to compile, I decided to write it in C. (Alternatively, some might say that C sits in the sweet spot of unwritable and unreadable, in which case I doomed myself to failure.)
        </p>

        <p>
            I was inspired by Noam Nisan and Shimon Schocken's fantastic <a href="http://www.nand2tetris.org/">The Elements of Computing Systems</a>, which takes you all the way from a NAND gate to programming Tetris and includes four chapters on simple compilers, and Jack Crenshaw's <a href="http://compilers.iecc.com/crenshaw/">Let's Build a Compiler series</a>, partially building a Pascal self-compiler using the KISS principle.
        </p>

        <Heading title="Technical Notes" />
        <p>
            I chose the smallest subset of C that I wouldn't go crazy writing in.  I mean, could you imagine writing a compiler without structs or typing?
        </p>

        <p>
            The compiler comes in three units, as is typical: a tokenizer, a parser, and a code generator.  The tokenizer produces a stream of tokens.  The parser parses this stream into an internal AST representation, which the code generator then walks down to directly produce x86-64 assembler, leading to correct but inefficient code.
        </p>

        <p>
            Everything works on 64-bit Mac OS X, but I'm not sure how the C calling conventions change across operating systems and machines.  At least on my computer, I can call out to libc, etc.
        </p>

        <ProjectFooter 
            links={{"Github": "https://github.com/zachsussman/little-cc"}}
            time="November - December 2016" />
    </Layout>
)

export default LittleCC;