"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function Contact({ contact }: any) {
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
        text: "Your message has been sent.",
        icon: "success",
        confirmButtonColor: "#6cbdb5",
      });

      form.current?.reset();
    } catch (error) {
      console.error(error);
      MySwal.fire({
        title: "Failed",
        text: "Failed to send message. Please try again.",
        icon: "error",
        confirmButtonColor: "#e58e8e",
      });
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-4 flex flex-col justify-center items-center text-center relative bg-ghibliLeaf">
      <h2 className="text-4xl font-extrabold mb-6 text-ghibliBrown">
        Send a Message
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col gap-4 border border-ghibliForest/20">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 rounded-lg border border-ghibliForest/30 focus:outline-none focus:ring-2 focus:ring-ghibliLeaf transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 rounded-lg border border-ghibliForest/30 focus:outline-none focus:ring-2 focus:ring-ghibliLeaf transition"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          required
          className="p-3 rounded-lg border border-ghibliForest/30 focus:outline-none focus:ring-2 focus:ring-ghibliLeaf transition"
        />
        <input type="hidden" name="title" value="Message from website" />
        <input type="hidden" name="time" value={currentTime} />
        <button
          type="submit"
          className="bg-ghibliLeaf text-white font-semibold py-2 rounded-lg hover:bg-ghibliForest transition">
          Send Message
        </button>
      </form>

      <Image
        src="/sandri-contact.png"
        alt="Totoro"
        width={140}
        height={140}
        className="absolute bottom-0 right-2 z-10 "
      />
    </section>
  );
}
