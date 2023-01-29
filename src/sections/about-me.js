/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Text, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaGithub, FaDribbble, FaLinkedin } from 'react-icons/fa';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';
import myPhoto from 'assets/team/photo.jpg';


const item = [
  {
    id: 1,
    imgSrc: myPhoto,
    altText: 'Mahmoud Attia',
    title: 'Mahmoud Attia',
    designation: '',
    socialProfile: [
      {
        id: 1,
        name: 'github',
        path: 'https://github.com/attia-mahmoud',
        icon: <FaGithub />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://linkedin.com/in/attiamahmoud',
        icon: <FaLinkedin />,
      },
      {
        id: 3,
        name: 'dribble',
        path: 'https://dribbble.com/attimoovy',
        icon: <FaDribbble />,
      },
    ],
  },
  
];

const description = "Since beginning my journey as a programmer, I began to dive deeper into frontend development and have fallen in love with it since. I've gained professional knowledge of HTML, CSS, and JavaScript, with a vast understanding of User Design with accessiblity in mind. Additionally, my interests lie in AI/ML, cybersecurity, and cloud computing as well. I'm always excited to learn, as the world of technology keeps evolving."

export default function AboutMe() {
  return (
    <section sx={styles.banner}>
      <Container>
        <SectionHeader
          slogan="Meet the Dev"
          title="Get to know more about me"
        />
        <Box sx={styles.wrapper}>
          <Text sx={styles.wrapper.subTitle}>{description}</Text>
        </Box>

        <Grid sx={styles.grid}>
          {item.map((item) => (
            <TeamCard
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />    
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    position: 'relative',
    zIndex: 2,
    overflow: 'hidden',
    '&::before': {
      display: ['none', 'none', 'none', 'none', 'none', 'block'],
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: -8,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      display: ['none', 'none', 'none', 'none', 'none', 'block'],
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: -6,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
  },
  
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    margin: [0, 'auto'],
    width: [null, null, null, '40%'],
  },

  wrapper: {
    margin: '0 auto',
    width: ['90%', null, '60%', null, '40%'],
    display: 'flex',
    flexDirection: 'column',
    textAlign: ['justify', null, 'center'],
    mt: '-35px',
    mb: '50px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
    },

    subTitle: {
      fontSize: [2, null, null, '16px', 2],
      fontWeight: 400,
      lineHeight: 1.9,
    },
  },
};
