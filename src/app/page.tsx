"use client";

import React, { useEffect, useState } from 'react';
import './scrollbar.css';
import { TimelineDemo } from "@/app/(components)/TimelineDemo";
import { CardProjectso } from "@/app/(components)/CardProjects";
import About from "@/app/(components)/About";
import MainSection from "@/app/(components)/MainSection";
import { notFound } from 'next/navigation';

const index = () => {
    // const [isValid, setIsValid] = useState(true);
    //
    // useEffect(() => {
    //     const dataExists = false;
    //     setIsValid(dataExists);
    //
    //     if (!dataExists) {
    //         notFound();
    //     }
    // }, []);

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
