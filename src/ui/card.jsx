import React from "react";

export const Card = ({ children, className, ...props }) => (
  <div
    className={`rounded-lg shadow-md border p-4 bg-white ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const CardHeader = ({ title, subtitle, className, ...props }) => (
  <div className={`mb-2 ${className}`} {...props}>
    <h2 className="text-lg font-bold">{title}</h2>
    {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
  </div>
);

export const CardContent = ({ children, className, ...props }) => (
  <div className={`text-sm ${className}`} {...props}>
    {children}
  </div>
);

// Add CardTitle component
export const CardTitle = ({ children, className, ...props }) => (
  <h3 className={`text-md font-medium ${className}`} {...props}>
    {children}
  </h3>
);
