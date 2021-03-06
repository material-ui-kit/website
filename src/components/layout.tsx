import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import openGraphEN from '../images/opengraph-en.png';
import openGraphPL from '../images/opengraph-pl.png';
import { useTranslation } from '../hooks';

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#1769aa',
      main: '#2196f3',
      light: '#4dabf5',
    },
    secondary: {
      dark: '#d81b60',
      main: '#e91e63',
      light: '#ec407a',
    },
    background: {
      default: '#fbfcfd',
    },
  },
});

const Layout: FC = ({ children }) => {
  const { t, locale } = useTranslation('layout');

  const openGraph = locale === 'pl' ? openGraphPL : openGraphEN;

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <meta property="og:title" content={t('og_title')} />
        <meta property="og:description" content={t('og_description')} />
        <meta property="og:image" content={openGraph} />
      </Helmet>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
