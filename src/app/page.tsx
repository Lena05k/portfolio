"use client";

import React from 'react';
import './scrollbar.css';
import { TimelineDemo } from "@/app/(components)/TimelineDemo";
import { CardProjectso } from "@/app/(components)/CardProjects";
import About from "@/app/(components)/About";
import MainSection from "@/app/(components)/MainSection";

const index = () => {
    return (
        <>
            <MainSection />
            <About />
            <TimelineDemo/>
            <CardProjectso/>
        </>
    );
}

export default index;
