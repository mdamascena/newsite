"use client";
import React from "react";
import Lottie from "lottie-react";
import Animation from '../../public/img/guru-animation-cor.json';

export default function AnimeGuru({ animation }) {
    return (
        <Lottie animationData={Animation} loop={true} />
    )
}