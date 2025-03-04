import React from 'react';

const classes = {
  wrapper: 'p-8 relative max-w-screen-xl xs:p-24 w-full',
  outerWrapper: 'relative',
  //svg: 'hidden fixed transform right-0 top-5 z-0 xl:block',
};

const Layout = ({ children }) => {
  return (
    <div className={classes.outerWrapper} style={{backgroundColor: '#ffffff', display: 'flex', justifyContent: 'center'}}>
     
      <div className={classes.wrapper} style={{width:"900px"}}>{children}</div>
    </div>
  );
};

export default Layout;
