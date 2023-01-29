/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button, Flex } from 'theme-ui';
import BannerImg from 'assets/bannerImg.png';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';
import { Link } from 'react-scroll';
import SectionHeader from 'components/section-header';
import ScrollAnimation from 'react-animate-on-scroll';
import Typist from 'react-typist';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
      {/* <ScrollAnimation animateIn="animate__pulse"> */}
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
        <Typist>
            Hi, I'm Mahmoud Attia
        </Typist>
          </Heading>
          <Text as="p" variant="heroSecondary">
            I'm a software developer with a high passion for combining logic with design. 
            My interests lie in web development, cybersecurity and cloud computing.  
          </Text>
          <Link
            to="projects"
            smooth={true}
            offset={-70}
            duration={500}
            spy={true}
          >
          <ScrollAnimation animateIn="animate__pulse">
            <Button variant="primary">
              View My Projects
            </Button>
          </ScrollAnimation>
          </Link>
          {/* <Flex sx={{gap: '1rem', alignItems:"center", justifyContent: 'center'}} >
            <Link target="_blank" rel="noreferrer" href={'https://github.com/attia-mahmoud'}>
              <FaGithub size={48} />
            </Link>
            <Link target="_blank" rel="noreferrer" href={'https://linkedin.com/in/attiamahmoud'}>
              <FaLinkedin />
            </Link>
          </Flex> */}
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    // mb: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      display: ['none', 'none', 'none', 'none',  'block'],
      position: 'absolute',
      content: '""',
      bottom: 0,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      display: ['none', 'none', 'none', 'none', 'block'],
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
      canvas: {
        width: '100vw',
      }
    },
    feature : {
      display: ['none', 'none', 'none', 'block']
    }
  },
  images: {
    banner: {
      width: 1200,
      borderRadius: 15,
    }
  }
};
