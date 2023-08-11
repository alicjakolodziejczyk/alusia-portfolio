import React from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  React.useEffect(() => emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string), []);
  const form = React.useRef<HTMLFormElement>(null);
  const [data, setData] = React.useState({ name: '', email: '', message: '' });
  const [error, setError] = React.useState({ name: '', email: '', message: '' });
  const [finalMessage, setFinalMessage] = React.useState('');
  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => {
    const { id, value } = e.currentTarget;
    if (id === 'name') {
      if (value === '') {
        setError({ ...error, name: 'Name is required' });
      } else {
        setError({ ...error, name: '' });
        setData({ ...data, name: value });
      }
    } else if (id === 'email') {
      if (value === '') {
        setError({ ...error, email: 'Email is required' });
      } else if (!validateEmail(value)) {
        setError({ ...error, email: 'Please enter a valid email' });
      } else {
        setError({ ...error, email: '' });
        setData({ ...data, email: value });
      }
    } else if (id === 'message') {
      if (value === '') {
        setError({ ...error, message: 'Message is required' });
      } else {
        setError({ ...error, message: '' });
        setData({ ...data, message: value });
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission

    if (
      error.name === '' &&
      error.email === '' &&
      error.message === '') {
      await emailjs
        .send(process.env.REACT_APP_EMAILJS_SERVICE as string, process.env.REACT_APP_EMAILJS_TEMPLATE as string, data)
        .then(
          (result: any) => {
            console.log(result.text);
            setFinalMessage('Thank you for your message!');
            setData({ name: '', email: '', message: '' });
            setError({ name: '', email: '', message: '' });
            form.current?.reset();
          },
          (err: any) => {
            console.log(err.text);
            setFinalMessage('Sorry, an error occurred. Please try again later.');
          }
        );
    }
  };
  
  return (
    <div className='text-white landscape:w-[45vw] portrait:w-full py-4 m-auto' style={{backdropFilter: 'blur(5px)'}}>
      <form id='contactForm' className='flex flex-col space-y-6' ref={form} onSubmit={handleSubmit}>
        {error.name !== '' && <span className='text-red-500'>{error.name}</span>}
        <div className="relative h-10 w-full min-w-[200px]">
          <input type='text' id='name' name='name' onChange={handleChange} className='peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' />
          <label htmlFor='name' className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-sm font-normal leading-none text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-sm peer-focus:leading-none peer-focus:text-pink-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">Name</label>
        </div>
        {error.email !== '' && <span className='text-red-500'>{error.email}</span>}
        <div className="relative h-10 w-full min-w-[200px]">
          <input type='email' id='email' name='email' onChange={handleChange} className='peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' />
          <label htmlFor='email' className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-sm font-normal leading-none text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-sm peer-focus:leading-none peer-focus:text-pink-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">Email</label>
        </div>
        {error.message !== '' && <span className='text-red-500'>{error.message}</span>}  
        <div className="relative w-full min-w-[200px]">
          <textarea id='message' name='message' onChange={handleChange} className='peer w-full h-32 rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' />
          <label htmlFor='message' className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-sm font-normal leading-none text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-sm peer-focus:leading-none peer-focus:text-pink-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">Message</label>
        </div>    
        <input type='submit' value='Send' className='bg-pink-700 hover:bg-pink-800 text-white font-bold rounded-md p-2'/>
      </form>
      {finalMessage !== '' && <span className='text-gray-500'>{finalMessage}</span>}
    </div>
  )
}

export default ContactForm