import SectionHeader from 'components/section-header';
import { Container} from 'theme-ui';

import ContactForm from 'components/contact-form';


export default function ContactSection() {
    return (
        <section id="contact" sx={{variant: 'section.pricing'}}>
            <Container>
                <SectionHeader
                    slogan="Lets get to know each other"
                    title="Contact Me"
                />
                <ContactForm />
            </Container>
        </section>
    )
}