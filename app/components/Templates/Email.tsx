import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Tailwind,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  import LogoSkyCam from '@/app/images/LogoSkyCam.png'
  
  interface EmailTemplateProps {
    username: string;
    phone?: number;
    country: string;
    email: string;
    message: string;
    findus: string;
  }
  
  
  export const EmailTemplate = ({
    username,
    phone,
    country,
    email,
    message,
    findus
  }: EmailTemplateProps) => {
  
    return (
      <Html>
        <Head />
        <Preview>A new person or company wants to contact you!</Preview>
        <Tailwind>
          <Body className="bg-white my-auto mx-auto font-sans">
            <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
              <Section className="mt-[32px] object-fit">
                <Img
                  src='https://drive.google.com/uc?export=download&id=1arsfTYl9D87y1wkQaGtY3fnXDt_Z9CJs'
                  width="250"
                  height="65"
                  alt="LOGO SKYCAM"
                  className="my-0 mx-auto object-fit"
                />
              </Section>
              <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              A <strong>new person or company</strong> that met you from <strong>{findus}</strong> wants to contact you!
              </Heading>
              <Text className="text-black text-[14px] leading-[24px]">
                Hello Sky-Cam Admin,
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                The following customer <strong>{username}</strong> (
                <Link
                  href={`mailto:${email}`}
                  className="text-blue-600 no-underline"
                >
                  {email}          
                </Link>     
                ) +1 {phone} from {country} is interested regarding the <strong>possible rental</strong> of a surveillance trailer
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                And has the next message for you:{" "}
                  {message}
                  {" "}
              </Text>
              <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
              <Text className="text-[#666666] text-[12px] leading-[24px]">
              This email template was made by the Sky-cam team to make it easier to read new contacts that arrive. You can ignore this email if you are not interested in a new project or if it is spam.
              </Text>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
  
  export default EmailTemplate;