import React from "react";
import { CERTIFICATIONS } from "../constants";

const Certifications = () => {
  return (
    <div className="certifications-section w-full lg:w-1/2 mt-6">
      <h2 className="text-2xl font-bold mb-4">Certifications</h2>
      <ul className="list-disc pl-5">
        {CERTIFICATIONS.map((cert, index) => (
          <li key={index} className="mb-2">
            <strong>{cert.title}</strong> - {cert.organization} ({cert.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;