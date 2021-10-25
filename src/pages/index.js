import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import FeaturedProject from '../sections/featured-project';
import Stack from '../sections/stack';
import Projects from '../sections/projects';
import AboutMe from '../sections/about-me';
import ContactSection from '../sections/contact';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Mahmoud Attia" />
          <Banner />
          <FeaturedProject />
          <Stack />
          <Projects />
          <AboutMe />
          <ContactSection />
        </Layout>
    </ThemeProvider>
  );
}
