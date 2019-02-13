import Link from "next/link";
import Header from "../components/header";
import React from "react";

export default () => (
    <main>
        <Header />
        <section>
            <Link href="/about">
                <a>Go to About Me</a>
            </Link>
        </section>
    </main>
);