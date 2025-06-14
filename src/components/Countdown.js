"use client";

import { COUNTDOWN_DURATION, STORAGE_KEY } from "@/utils/constants";
import { useEffect, useState } from "react";

const Countdown = () => {
  const [remainingTime, setRemainingTime] = useState(COUNTDOWN_DURATION);

  useEffect(() => {
    const now = Date.now();
    const storedStart = localStorage.getItem(STORAGE_KEY);

    let startTime;

    if (storedStart) {
      startTime = parseInt(storedStart, 10);
    } else {
      startTime = now;
      localStorage.setItem(STORAGE_KEY, startTime.toString());
    }

    const updateRemainingTime = () => {
      const elapsed = Date.now() - startTime;
      const newRemaining = COUNTDOWN_DURATION - elapsed;

      if (newRemaining <= 0) {
        const newStartTime = Date.now();
        localStorage.setItem(STORAGE_KEY, newStartTime.toString());
        startTime = newStartTime;

        setRemainingTime(COUNTDOWN_DURATION);
      } else {
        setRemainingTime(newRemaining);
      }
    };

    updateRemainingTime();
    const interval = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(remainingTime / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-4 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span
            style={{ "--value": hours }}
            aria-label={`Hours: ${hours}`}
            aria-live="polite"
          >
            {hours}
          </span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-4 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span
            style={{ "--value": minutes }}
            aria-label={`Minutes: ${minutes}`}
            aria-live="polite"
          >
            {minutes}
          </span>
        </span>
        minutes
      </div>
      <div className="flex flex-col p-4 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span
            style={{ "--value": seconds }}
            aria-label={`Seconds: ${seconds}`}
            aria-live="polite"
          >
            {seconds}
          </span>
        </span>
        seconds
      </div>
    </div>
  );
};

export default Countdown;
