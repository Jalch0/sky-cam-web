"use server";

import { Resend } from "resend";
import { validateString } from "@/app/libs/utils";
import { getErrorMessage } from "@/app/libs/utils";
import EmailTemplate from "@/app/components/Templates/Email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const name = formData.get("name");
  const phone = formData.get("phone");
  const country = formData.get("country");
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");
  const findus = formData.get("findus");

  // Simple server-side validation
  if (!validateString(name, 500)) {
    return {
      error: "Invalid name (Min 500)",
    };
  }
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!(phone === null || phone === '')) {
    if (!validateString(phone, 11)) {
      return {
        error: "Invalid Number Phone",
      };
    }
  }

  if (!validateString(country, 500)) {
    return {
      error: "Invalid country name (Min 500)",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message (Max 5000)",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Contact Form<onboarding@resend.dev>",
      to: "jlabradorchacon@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: EmailTemplate({
        //@ts-expect-error
        username: name,
        //@ts-expect-error
        phone: phone,
        //@ts-expect-error
        country: country,
        //@ts-expect-error
        email: senderEmail,
        //@ts-expect-error
        message: message,
        //@ts-expect-error
        findus: findus,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};

//test resend -----
// resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: "youremail",
//     subject: "Message from contact form",
//     text: "Hello world!"
// })
