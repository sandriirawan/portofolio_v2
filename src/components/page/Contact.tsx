"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
interface ContactProps {
  contact: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
}

export default function Contact({ contact }: ContactProps) {
  const form = useRef<HTMLFormElement>(null);
  const [currentTime] = useState(() => new Date().toLocaleString());

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      await emailjs.sendForm(
        contact.serviceId,
        contact.templateId,
        form.current,
        contact.publicKey
      );

      await MySwal.fire({
        title: "Success!",
        text: "Your message has been sent ✨",
        icon: "success",
        confirmButtonColor: "#6cbdb5",
      });

      form.current?.reset();
    } catch (error) {
      console.error(error);
      MySwal.fire({
        title: "Oops...",
        text: "Something went wrong. Please try again!",
        icon: "error",
        confirmButtonColor: "#e58e8e",
      });
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-4 py-14 flex flex-col justify-center items-center text-center relative bg-gradient-to-br from-ghibliLeaf to-ghibliLeaf/40">
      <h2 className="text-4xl font-extrabold mb-8 text-ghibliBrown drop-shadow-md">
        Send a Message
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl p-6 flex flex-col gap-5 border border-ghibliForest/20 transition-all hover:shadow-2xl">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 rounded-lg border border-ghibliForest/30 focus:outline-none focus:ring-2 focus:ring-ghibliBrown placeholder-ghibliForest/60"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 rounded-lg border border-ghibliForest/30 focus:outline-none focus:ring-2 focus:ring-ghibliBrown placeholder-ghibliForest/60"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          required
          className="p-3 rounded-lg border border-ghibliForest/30 focus:outline-none focus:ring-2 focus:ring-ghibliBrown placeholder-ghibliForest/60"
        />
        <input type="hidden" name="title" value="Message from website" />
        <input type="hidden" name="time" value={currentTime} />
        <button
          type="submit"
          className="bg-ghibliBrown text-white font-semibold py-2 rounded-lg hover:bg-yellow-900 transition-all duration-300 active:scale-95 shadow-md">
          ✉️ Send Message
        </button>
      </form>

      <Image
        src="/sandri-contact.png"
        alt="Totoro"
        width={140}
        height={140}
        className="absolute bottom-0 right-4 z-10 animate-bounce-slow"
      />
    </section>
  );
}
