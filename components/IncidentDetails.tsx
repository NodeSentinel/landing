"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Validator {
  id: string;
  link: string;
}

interface IncidentProps {
  incident: {
    date: string;
    inactiveValidators: number;
    resolved: boolean;
    startTime: string;
    validators: Validator[];
  };
}

export default function IncidentDetails({ incident }: IncidentProps) {
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const start = new Date(incident.startTime).getTime();
      const now = new Date().getTime();
      setDuration(Math.floor((now - start) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, [incident.startTime]);

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-4xl font-bold mb-8 text-primary">Incident Details</h1>
      <div className="space-y-4">
        <p>
          <span className="font-bold text-primary">Date:</span>{" "}
          {new Date(incident.date).toLocaleString()}
        </p>
        <p>
          <span className="font-bold text-primary">Inactive Validators:</span>{" "}
          {incident.inactiveValidators}
        </p>
        <p>
          <span className="font-bold text-primary">Status:</span>{" "}
          {incident.resolved ? "Resolved" : "Ongoing"}
        </p>
        <p>
          <span className="font-bold text-primary">Duration:</span> {duration}{" "}
          seconds
        </p>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Inactive Validators
          </h2>
          <ul className="space-y-2">
            {incident.validators.map((validator) => (
              <li key={validator.id}>
                <Link
                  href={validator.link}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Validator {validator.id}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
