
import React from 'react';

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.484 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const TelegramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 8.326l-3.321 12.352c-.179.664-.672.842-1.229.529l-4.593-3.418-2.227 2.144c-.244.234-.45.441-.758.441l.245-4.665 8.355-7.542c.358-.316.09-.498-.358-.178l-10.287 6.427-4.484-1.401c-.663-.208-.67-1.025.127-1.523l16.183-6.248c.553-.213 1.053.155.87.892z" />
    </svg>
);

const Contact: React.FC = () => {
    return (
        <footer id="contact" className="bg-gray-900 py-12">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">Get In Touch</h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
                </p>
                <div className="flex justify-center items-center space-x-6 mb-8">
                    <a href="mailto:yohanes.fikru@gmail.com" className="text-gray-400 hover:text-green-400 transition-colors" aria-label="Email">
                        <MailIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/YohanesFikru" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors" aria-label="LinkedIn">
                        <LinkedInIcon />
                    </a>
                    <a href="https://t.me/YohanesFikru" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors" aria-label="Telegram">
                        <TelegramIcon />
                    </a>
                </div>
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Yohanes Fikru Temam. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Contact;
