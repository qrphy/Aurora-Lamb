import React from 'react';

export default function Accordion({ children }: { children: React.ReactNode }) {
  return <div className="accordion">{children}</div>;
}
