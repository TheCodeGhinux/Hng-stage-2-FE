import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='container-2xl flex  justify-center w-screen'>
        <div class="py-16 md:py-36 flex flex-col bg-white-500 text-center md:w-[720px] w-[343px] ">

            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-start text-gray-900 dark">Contact Me</h2>

            <h5 className='text-sm text-start font-normal' >Hi there, contact me to ask me about anything you have in mind.</h5>
            <div class=" flex flex-col content-start items-start mt-8 space-y-8 m-auto w-full md:flex ">
                <div class="flex flex-col gap-6 md:flex-row">
                    <span className="flex flex-col content-start items-start">
                        <label htmlFor="last__name">First Name</label>
                        <input type="name" id='first_name' className='input__con' />
                    </span>
                    
                    <span className="flex flex-col content-start items-start text-start">
                        <label htmlFor="last__name">Last Name</label>
                        <input type="name" id='last_name' className='input__con' />
                    </span>
                </div>
                <div class=" flex flex-col text-start w-full mt-8 md:mt-auto">
                    <label htmlFor='email'>Email </label>
                    <input aria-label="email" className=' input__con text-start' type="email" name="email" id="email" required />
                </div>
                <div class="w-full text-start">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Message</label>
                    <textarea aria-label="message"  className="input__con" type="" name="message" id="message" placeholder="Send me a message and I'll reply you as soon as possible..." ></textarea>

                </div>
                <div className=" flex space-x-4 content-center">
                    <input type="checkbox" id="child" name="age" value="child" />
                    <label >You agree to providing your data to CodeGhinux who may contact you.</label>
                </div>

            <button type="submit" class=" w-full  text-white" id='btn_submit'>
                Send message
            </button>
            </div>
        </div>
        {/* <div className="pt-24 lg:py-16 mx-auto max-w-[720px] flex flex-col content-start items-start">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark">Contact Me</h2>
            <p className="py-5 text-xl">Hi there, contact me to ask me about anything you have in mind.</p>

            <form action="#" class="space-y-8">
                <div id='name__row' className=" flex gap-y-6">
                    <div className=''>
                        <label for='first__name'>First name</label>
                        <input type="name" id="first__name" className="input__con" placeholder="Jack" required />

                    </div>
                    <div className="">
                        <label for='last__name'>First name</label>
                        <input type="name" id="last__name" className="input__con" placeholder="Sparrow" required />
                    </div>
                </div>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input type="email" id="email" className='input__con' placeholder="name@site.com" required />
                </div>
                
                <div>
                    <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                    <input type="text" id="subject" className="input__con" placeholder="Let us know how we can help you" required />
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Message</label>
                    <textarea id="message" rows="6" className="input__con" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
                </div>
                <div className=" flex space-x-4 content-center">
                    <input type="checkbox" id="child" name="age" value="child" />
                    <label >You agree to providing your data to CodeGhinux who may contact you.</label>
                </div>
               
            </form>
        </div> */}
        
    </div>
  )
}

export default Contact