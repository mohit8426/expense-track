"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "./ui/google";
import "./Home.css";

export function Home() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div className="home-container" ref={ref}>
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
      <section className="intro-section">
        <h1>Welcome to Your Expense Tracker</h1>
        <p>Track your expenses effortlessly and manage your finances with ease.</p>
      </section>
      <section className="features-section">
        <div className="feature">
          <h2>Manage Your Expenses</h2>
          <p>Easily categorize and manage all your expenses in one place.</p>
          <button className="feature-button">Add Expense</button>
        </div>
        <div className="feature">
          <h2>Splitwise Integration</h2>
          <p>Keep track of shared expenses and settle up with friends.</p>
          <button className="feature-button">Connect to Splitwise</button>
        </div>
        <div className="feature">
          <h2>Generate Reports</h2>
          <p>Get detailed reports on your spending habits and budget.</p>
          <button className="feature-button">View Reports</button>
        </div>
      </section>
    </div>
  );
}
