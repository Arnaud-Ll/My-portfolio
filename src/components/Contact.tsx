import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    captcha: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateCaptcha = () => {
    return formData.captcha === '42';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateCaptcha()) {
      alert('Captcha incorrect ! Merci de réessayer.');
      return;
    }

    setIsSubmitting(true);

    emailjs
      .send(
        'service_x8d2a4i', // Your EmailJS service ID
        'template_o0n0hrg', // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '1f_LnI8N68ddJMyty' // Your EmailJS user ID
      )
      .then(
        () => {
          alert('Message bien envoyé !');
          setFormData({ name: '', email: '', message: '', captcha: '' });
        },
        (error) => {
          console.error('Le message n\'a pas été envoyé', error);
          alert(
            "Impossible d'envoyer votre message, veuillez vérifier les informations saisies ou réessayez ultérieurement"
          );
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-pink-500 dark:text-blue-500">
          Un projet, une question, contactez-moi !
        </h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-xl shadow-xl"
        >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Entrez votre nom"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Adresse e-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Entrez votre adresse e-mail"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Votre message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Écrivez votre message ici..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 h-40"
              required
            ></textarea>
          </div>

          {/* Captcha Field */}
          <div>
            <label htmlFor="captcha" className="block text-sm font-medium mb-2">
              Quelle est la réponse à la vie, l'univers et tout le reste ?
            </label>
            <input
              type="text"
              id="captcha"
              name="captcha"
              value={formData.captcha}
              onChange={handleChange}
              placeholder="Entrez votre réponse"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-pink-500 dark:bg-blue-500 text-white rounded-lg hover:bg-pink-600 dark:hover:bg-blue-600 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              <Send className="w-5 h-5" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
