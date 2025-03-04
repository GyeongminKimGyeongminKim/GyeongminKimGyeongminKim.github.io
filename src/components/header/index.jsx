import { Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const classes = {
  wrapper: 'block mb-6 md:flex',
  imageWrapper: 'w-full max-w-150',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20',
  name: 'text-5xl text-gray-900 font-bold leading-tight hover:text-black',
  description: 'text-gray-600',
  list: 'mt-6 tracking-wider',
  item: 'inline list-none pr-4 uppercase',
  link: 'inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black',
};

const Header = ({ metadata = {}, noBlog = false }) => {
  const twitter = get(metadata, 'author', false);
  const github = get(metadata, 'github', false);
  const linkedin = get(metadata, 'linkedin', false);

  return (
    <div className={classes.wrapper}style={{borderBottom: "8px solid rgba(179, 189, 68, 0.43)", }}>
      <div className={classes.imageWrapper}>
        <Link to="/">
          <StaticImage
            className={classes.image}
            src="../../images/android_icon.png"
            alt={metadata.name}
            placeholder="dominantColor"
            layout="fullWidth"
          />
        </Link>
      </div>
      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link to="/">{metadata.name}</Link>
        </h1>
        <p className={classes.description}>{metadata.description}</p>
        <ul className={classes.list}>
          {/* {twitter && (
            <li className={classes.item}>
              <a
                className={classes.link}
                href={`https://twitter.com/${twitter}`}
              >
                Twitter
              </a>
            </li>
          )} */}
          {github && (
            <li className={classes.item}>
              <a className={classes.link} href={github}>
                GitHub
              </a>
            </li>
          )}
          {linkedin && (
            <li className={classes.item}>
              <a className={classes.link} href={linkedin}>
                LinkedIn
              </a>
            </li>
          )}
          {/* {!noBlog && (
            <li className={classes.item}>
              <Link className={classes.link} to="/blog">
                Blog
              </Link>
            </li>
          )} */}
          <li className={`${classes.item} lowercase`}>
            <a className={classes.link}>
              kiddevill@naver.com
            </a>
          </li>
          <li className={classes.item}>
            <a className={classes.link}>
              010-4165-0810
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
