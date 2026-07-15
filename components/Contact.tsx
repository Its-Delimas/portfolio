"use client"

import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

import { useState } from "react"

export default function Contact(){
    const [form, setForm] = useState({name:"",email:"",message:""});

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({...form,[e.target.name]:e.target.value});
    };

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault;
        console.log(form);
    }

    return (
        <section id="contact" className="px-6 py-24 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Contact</h2>
            <p className="text-gray-600 mb-8">
                Have a project in mind or just want to connect? Send a message
            </p>
            <div className="border border-gray-900 rounded-xl p-8 shadow-sm">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-sm font-medium">Name | Organization </label>
                        <input
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="border border-gray-900 rounded-lg px-4 py-3 bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"                            required 
                            />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            className="border border-gray-900 rounded-lg px-4 py-3 bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"                            required
                            />
                    </div>
                </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <textarea 
                            id="message"
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            className="border border-gray-900 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                            required
                            />
                    </div>

                    <button type="submit" className="mt-2 bg-accent text-white rounded-md px-6 py-3 font-medium hover:opacity-90 transition">Send Message</button>

                    <div className="flex gap-6 flex flex-rows justify-center items-start ">
                        <a href="https://github.com/Its-delimas" target="_blank" className="hover:text-white hover:scale-150">
                            <FaSquareGithub /> 
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-blue-900 hover:scale-150">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:spencerdelimas@gmail.com" className="hover:text-red-900 hover:scale-150">
                            <IoMdMail />
                        </a>
                    </div>

                </form>
                </div>
        </section>
    )

}