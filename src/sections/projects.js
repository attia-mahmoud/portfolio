/** @jsx jsx */
import {useState} from 'react'
import { Flex, jsx, Container, Heading, Text, Box, Image, Button, Badge } from 'theme-ui';
import SectionHeader from 'components/section-header';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';

import Project1 from '../assets/projects/bannerImg.png';
import Project2 from '../assets/projects/covidImg.png';
import Project3 from '../assets/projects/workoutImg.png';
import Project4 from '../assets/projects/tripImg.png';
import Project5 from '../assets/projects/sleepImg.png';
import Project6 from '../assets/projects/asmeImg.png';
import Project7 from '../assets/projects/fevrierImg.png';
import Project8 from '../assets/projects/mantaImg.png';
import Project9 from '../assets/projects/lamplighterImg.png';

const data = [
  {
    title: 'Lamplighter Puzzle Game',
    description: "As part of a research project, this web game is designed to assess the player's personality through gameplay by leveraging the popular Five-Factor Model of personality and statistical analysis.",
    image: Project9,
    url: 'https://lamplighter-project.vercel.app',
    video: '',
    code: '',
    tags: ['React', 'NextJS', 'TypeScript', 'Mantine UI', 'Firebase']
  },
  {
    title: 'KFUPM ASME',
    description: 'This website is part of the ASME (American Society of Mechanical Engineers) Student Section initiative at KFUPM and is the go-to hub for all members of the club and for those who wish to learn more about and even join the club as a member or take part in the various programs and events.',
    image: Project6,
    url: 'https://kfupm-asme.com',
    video: '',
    code: '',
    tags: ['React', 'NextJS', 'TypeScript', 'Mantine UI', 'Firebase']
  },
  {
    title: 'Fevrier',
    description: '',
    image: Project7,
    url: 'https://fevrier.vercel.app',
    video: '',
    code: 'https://github.com/attia-mahmoud/fevrier',
    tags: ['React', 'NextJS', 'TypeScript', 'Mantine UI']
  },
  {
    title: 'Manta',
    description: '',
    image: Project8,
    url: 'https://mantasite.vercel.app',
    video: '',
    code: 'https://github.com/attia-mahmoud/manta',
    tags: ['React', 'NextJS', 'TypeScript', 'Mantine UI']
  },
  {
    title: 'Road Trip Planner',
    description:  
      'This website communicates with multiple APIs to provide users with everything they need to know about their upcoming road trip. It comes with an interactive map and incorporates persistent client-side data storage.',
    image: Project4,
    url: 'https://road-trip-planner.netlify.app/',
    video: '',
    code: 'https://github.com/attimoovy/road-trip-planner',
    tags: ['React', 'JavaScript', 'Chakra UI', 'React Leaflet']
  },
  {
    title: 'Sleep.io',
    description:  
      'A fully responsive web app which aims to help users track their sleep and improve their lives. Users can view various statistics about their sleep patterns and visualize it all with the help of tables and graphs. Comes with Google User Authentication and persistent database storage with Firebase.',
    image: Project5,
    url: 'https://sleepio.netlify.app/',
    video: '',
    code: 'https://github.com/attimoovy/sleep_tracker',
    tags: ['React', 'JavaScript', 'Chakra UI', 'Firebase', 'React Vis']
  },
  {
    title: 'Edushare.com',
    description:  
      'A platform, mainly targeted towards college and university level students, where users can gain help and knowledge as well as provide other students with the same through asking questions, sharing content, or simply expressing their opinions.',
    image: Project1,
    url: '',
    video: 'https://www.youtube.com/watch?v=_V2gIL7cn20',
    code: 'https://github.com/attimoovy/edushare',
    tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django', 'Jinja']
  },
  {
    title: 'Covid-19 Awareness Site',
    description:  
    'An informative site tailored to providing complete information about COVID-19. Utilizes a JSON API to fetch global data about the pandemic in real-time. Designed the frontend and enhanced its user experience with JavaScript and Bootstrap.',
    image: Project2,
    url: '',
    video: 'https://www.youtube.com/watch?v=D6Azj88995s',
    code: 'https://github.com/attimoovy/covid',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Python', 'Django', 'Jinja']
  },
  {
    title: 'Workout Tracker',
    description:  
      'A web application that can easily help you track all your workouts in an organized manner, and stores it by date and workout type for future reference, all while being presented with a user friendly interface and a dynamic homepage.',
    image: Project3,
    url: '',
    video: 'https://www.youtube.com/watch?v=pv5st7R_jBk',
    code: 'https://github.com/attimoovy/workout_tracker',
    tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django', 'Jinja']
  },
  
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const carouselParams = {
  additionalTransfrom:0,
  arrows:false,
  autoPlaySpeed:3000,
  centerMode:false,
  className:"",
  containerClass:"carousel-container",
  customButtonGroup:<ButtonGroup />,
  dotListClass:"",
  draggable: true,
  focusOnSelect:false,
  infinite:true,
  itemClass:"",
  keyBoardControl: true,
  minimumTouchDrag:80,
  renderButtonGroupOutside: true,
  renderDotsOutside:false,
  responsive:responsive,
  showDots:true,
  sliderClass:"",
  slidesToSlide:1,
}

const ReadMore = (props) => {
  const text = props.children;
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Text {...props}>
    {
      text.length < 150 ? text : (
      <>
        {!isExpanded ? text.slice(0, 150) + '...' : text}
        <span onClick={toggleReadMore}>
          {!isExpanded ? " read more" : " show less"}
        </span>
      </>
      )
    }
    </Text>
  );
};

export default function Projects() {
  return (
   <section id="projects" sx={{variant: 'section.testimonial'}}>
    <Container css={{ textAlign: 'center'}}>
      <SectionHeader
        slogan="See What I'm All About"
        title="My Personal Projects"
      />
    </Container>

    <Box sx={styles.carouselWrapper}>
      <Carousel {...carouselParams}>
        {data.map((item) => (
          <Box sx={styles.reviewCard} key={item.title} >
            <Heading as="h3" sx={styles.title}>
              {item.title}
            </Heading>
            <ReadMore sx={styles.description}>
              {item.description}
            </ReadMore>
            <Flex mt={2} sx={{ flexWrap: 'wrap', rowGap: '10px' }}>
            {
              item.tags?.map(tag => (
              <Badge variant="outline" ml={1}>{tag}</Badge>
              ))
            }
            </Flex>
            <Box sx={styles.thumbnail}>
              <Image src={item.image} alt={item.title} />
            </Box>
            <div className="card-footer"> 

            {item.url && <a
              href={item.url}
              target='_blank'
              rel="noreferrer"
            >   
                <Button sx={{variant: 'buttons.primary'}}>
                  Live Site
                </Button>
            </a>}

            {item.video && <a
              href={item.video}
              target='_blank'
              rel="noreferrer"
            >  
                <Button sx={{variant: 'buttons.secondary'}}>
                  Video Demo
                </Button>
            </a>}

            {item.code && <a
              href={item.code}
              target='_blank'
              rel="noreferrer"
            >  
                <Button sx={{variant: 'buttons.secondary'}}>
                  Source Code
                </Button>
            </a>}
            </div>
          </Box>
        ))}
      </Carousel>
    </Box>

   </section>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, null],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '1',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'primary',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  thumbnail: {
    mr: ['auto', null, null, 0],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: ['auto', 'auto'],
      mt: [2, null, null, 5],
      borderRadius: '2%',
      border: '1px solid black',
    },
  },
  title: {
    fontSize: [3, 6],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
    '> span': {
      color: 'red',
      cursor: 'pointer'
    }
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    
  }
};
