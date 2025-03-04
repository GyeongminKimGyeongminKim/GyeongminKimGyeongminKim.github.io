import React from 'react';

const classes = {
  wrapper: 'block pt-12 md:flex',
  title: 'pb-6 md:w-full md:max-w-150 md:p-0',
  heading:
    'font-xs font-semibold tracking-widest leading-none text-xl text-gray-600 uppercase',
  content: 'flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20',
};

const Section = ({ title, children }) => {
  return (
    <div className={classes.wrapper} style={{borderBottom: "1px solid rgb(232, 232, 232)"}}>
      <div className={classes.title}>
        <div style={{display: 'flex', flexDirection: 'row', alignContent: 'flex-start'}}>
          <h2 style={{color: '#000000',}} className={classes.heading}>{title}</h2><span style={{color:"rgb(118, 180, 52)", fontWeight: "900", fontSize: "34px", lineHeight: "0.4"}}>.</span>
        </div>
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Section;
