import { jsx, Box, Container, Image, Text } from 'theme-ui';
import { Link } from 'components/link';
import data from './footer.data';
import FooterLogo from 'assets/mylogo.svg';
import { FaGithubAlt, FaDribbble, FaLinkedin } from 'react-icons/fa';


const social = [
  {
    name: 'LinkedIn',
    path: 'https://linkedin.com/in/attiamahmoud',
    icon: <FaLinkedin />,
  },
  {
    name: 'GitHub',
    path: 'https://github.com/attia-mahmoud',
    icon: <FaGithubAlt />,
  },
  {
    name: 'Dribble',
    path: 'https://dribbble.com/attimoovy',
    icon: <FaDribbble />,
  },
];

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Link path="/">
            <Image sx={{width: 195}} src={FooterLogo} alt="logo" />
          </Link>
          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map((item, i) => (
                <Link
                  path={item.path}
                  key={i}
                  label={item.label}
                  sx={styles.footer.link}
                />
              ))}
              <Box sx={styles.footer.social}>
                {social.map((socialItem, i) => (
                  <Box as="span" key={i} sx={styles.footer.social.icon}>
                    <a href={socialItem.path} target="_blank" rel="noreferrer" ariaLabel={socialItem.name}>{socialItem.icon}</a>
                  </Box>
                ))}
              </Box>
            </nav>
          </Box>
          <Text sx={styles.footer.copyright}>
            &#169; {new Date().getFullYear()} Mahmoud Attia
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      mt: [7, null, 8],
      textAlign: 'center',
      flexDirection: 'column',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },
    social: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  
      icon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'text',
        fontSize: 25,
        mr: '40px',
        transition: 'all 0.25s',
        cursor: 'pointer',
        ':last-child': {
          mr: '0',
        },
        '&:hover': {
          color: 'primary',
        },
      },
    },
    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
  },
};
