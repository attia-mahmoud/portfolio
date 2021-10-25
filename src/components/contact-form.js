import React, { useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Box, Label, Input, Textarea, Button } from 'theme-ui';
import emailjs from 'emailjs-com';

// And now we can use these
const ContactForm = () => {
    const form = useRef();

    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (form, e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_0727xkb', 'contact_form' , document.querySelector('form'), "user_jxoKeFvVEnrpP9WUuuM3W")
        .then((result) => {
            alert('Email Sent Successfully!');
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }

    return (
        <Box ref={form} as="form" onSubmit={handleSubmit(onSubmit)} sx={styles.contactWrapper}>
            <Controller
                name="user_name"
                id="firstName"
                control={control}
                rules={{ required: true }}
                
                defaultValue="John"
                render={({ field }) => (
                    <>
                    <Label htmlFor="firstName">First Name: </Label>
                    <Input {...field} />
                    {errors.user_name?.type === 'required' && "First name is required"}
                    </>
                )}
            />
            <Controller
                name="user_email"
                id="email"
                rules={{ required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ }}
                control={control}
                defaultValue="John@example.com"
                render={({ field }) => (
                    <>
                    <Label htmlFor="email">Email: </Label>
                    <Input {...field} />
                    {errors.user_email?.type === 'required' && "Email is required"}
                    {errors.user_email?.type === 'pattern' && "Enter a valid email address"}
                    </>
                )}
            />
            <Controller
                name="message"
                id="message"
                rules={{ required: true }}
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <>
                    <Label htmlFor="email">Message: </Label>
                    <Textarea {...field} rows={6} mb={3} />
                    {errors.message?.type === 'required' && "A message is required"}
                    </>
                )}
            />
            <Button>Submit</Button>
        </Box>
    )
};

const styles = {
    contactWrapper: {
        margin: '0 auto',
        width: ['95%', null, null, '50%'],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}

export default ContactForm;

