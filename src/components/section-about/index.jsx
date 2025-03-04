import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me">
      <div className="mb-6 font-normal">
        {about.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </Section>
  );
};

export default SectionAbout;
