import { css } from 'styled-components';

const colors = {
  primaryColor: '#3a3729',
  secondaryColor: '#fbfbfb',
  lightGrayColor: '#D8D8D8',
  accentColor: '#fff95a',
  accentSecondaryColor: '#898632',
};

const gradients = {
  light: `linear-gradient(rgba(255, 249, 90, 0.8), rgba(255, 249, 90, 0.8))`,
  dark: `linear-gradient(rgba(58, 55, 41, 0.8), rgba(58, 55, 41, 0.8))`,
};

const fonts = {
  primaryFont: `'Oswald', 'sans-serif'`,
};

const breakPoints = {
  phoneSmall: '400px',
  phoneMedium: '660px',
  phoneLarge: '760px',

  iPadMedium: '880px',
  iPadLarge: '980px',

  smallLaptop: '1080px',
  largeLaptop: '1200px',

  smallDesktop: '1400px',
  mediumDesktop: '1600px',
  largeDesktop: '1900px',
  extraLargeDesktop: '2000px',
  superExtraLargeDesktop: '2300px',
};

const backgroundGradients = {
  education: css`
    background: ${({ theme }) => theme.gradients.dark},
      url(./images/christian-ipanaque-education.jpg);
  `,
  achievements: css`
    background: ${({ theme }) => theme.gradients.light},
      url(./images/christian-ipanaque-achievements.jpg);
  `,
  projects: css`
    background: ${({ theme }) => theme.gradients.dark},
      url(./images/christian-ipanaque-projects.jpg);
  `,
  publications: css`
    background: ${({ theme }) => theme.gradients.light},
      url(./images/christian-ipanaque-publications.jpg);
  `,
  ethics: css`
    background: ${({ theme }) => theme.gradients.dark},
      url(./images/christian-ipanaque-ethics.jpg);
  `,
};

const sectionThemes = {
  light: {
    h2: css`
      color: ${({ theme }) => theme.colors.primaryColor};
    `,
    h3: css`
      color: ${({ theme }) => theme.colors.accentSecondaryColor};
    `,
    h4: css`
      color: ${({ theme }) => theme.colors.accentSecondaryColor};
    `,
    a: css`
      text-decoration: underline;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.primaryColor};
    `,
  },
  dark: {
    h2: css`
      color: ${({ theme }) => theme.colors.accentColor};
    `,
    h3: css`
      color: ${({ theme }) => theme.colors.secondaryColor};
    `,
    h4: css`
      color: ${({ theme }) => theme.colors.lightGrayColor};
    `,
    a: css`
      text-decoration: underline;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.accentColor};
    `,
  },
};

export default {
  backgroundGradients,
  breakPoints,
  colors,
  fonts,
  gradients,
  sectionThemes,
};
