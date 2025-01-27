"use client";
import React from 'react';
import emailjs from "@emailjs/browser";
import SendEmailPng from "../../assets/send-email.png";
import Image from 'next/image';

const ContactForm = () => {
    const [formData, setFormData]= React.useState({
        name : "",
        email : "",
        message : "",
    });
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name] : value,
        }));
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm();


        emailjs
        .sendForm(
            'service_9tbwxv5',
             'template_xze6tkh',
             e.target, 
            'RmrOcuxUKSn6VBIZ1',
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Email sent successfully!");
          },
          (error) => {
            console.log(error.text);
            alert("Failled to send email.");
          },
        );
        setFormData({
            name: "",
            email : "",
            message : "",
        });
    }
  return (
    <section className='bg-black text-white py-24'>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
            {/*form section */}
                <div className='flex justify-center items-center'>
                    <form onSubmit={handleSubmit} className='bg-primary/45 p-8 rounded-xl w-full max-w-lg'>
                        <h2>Get in touch</h2>
                        <div className='mb-4'>
                            <label htmlFor="" className='block text-white/30'>Name</label>
                            <input type="text" name='name' value={formData.name} onChange={handleChange} className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-opacity-50 ring-primary bg-black text-white' />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="" className='block text-white/30'>Email</label>
                            <input type="email" name='email' value={formData.email} onChange={handleChange} className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-opacity-50 ring-primary bg-black text-white' />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="" className='block text-white/30'>Message</label>
                            <textarea name='message' value={formData.message} onChange={handleChange} className='mt-1 block w-full px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-opacity-50 ring-primary bg-black text-white' />
                        </div>
                        <button type='submit' className='btn mt-4 px-8'>Send Email</button>
                    </form>
                </div>
            {/*form section */}
            <div className='hidden md:flex justify-center items-center'>
            <Image src={SendEmailPng} alt='send email' className='w-[300px] animate-rocket' />
            </div>
        </div>
    </section>
  )
}

export default ContactForm
