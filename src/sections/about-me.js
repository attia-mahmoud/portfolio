/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Text, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaGithub, FaDribbble, FaLinkedin } from 'react-icons/fa';

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
        path: 'https://github.com/attimoovy',
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

const description = "Since beginning my journey as a programmer, I began to dive deeper into frontend development and have fallen in love with it since. I've gained skilled knowledge of HTML, CSS, and JavaScript, with a vast understanding of User Design with accessiblity in mind. I'm always excited to learn, as the world of Front-End Development keeps evolving."

export default function AboutMe() {
  return (
    <section>
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
    textAlign: ['left', null, 'center'],
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
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9,
    },
  },
};
