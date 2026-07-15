"use client"

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
            <h2 className="text-2xl font-bold mb-8">Contact</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <input
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                            required 
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
                            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                            required
                            />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <textarea 
                            id="message"
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                            required
                            />
                    </div>

                    <button type="submit" className="mt-2 bg-accent text-white rounded-md px-6 py-3 font-medium">Send Message</button>
                </form>
        </section>
    )

}