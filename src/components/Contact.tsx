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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.captcha !== '42') {
      alert('Captcha incorrect ! Merci de réessayer.');
      return;
    }

    setIsSubmitting(true);

    emailjs
      .send(
        'service_x8d2a4i', // Replace with your EmailJS service ID
        'template_o0n0hrg', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '1f_LnI8N68ddJMyty' // Replace with your EmailJS user ID
      )
      .then(
        () => {
          alert('Message bien envoyé !');
          setFormData({ name: '', email: '', message: '', captcha: '' });
        },
        (error) => {
          console.error('Le message n\'a pas été envoyé', error);
          alert('Impossible d\'envoyer votre message, veuillez vérifier les informations saisies ou réessayez ultérieurement');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="max-w-4xl mx-auto relative">
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
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Votre nom
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-pink-500 dark:focus:border-blue-500 focus:ring-1 focus:ring-pink-500 dark:focus:ring-blue-500 transition-colors"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Votre email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-pink-500 dark:focus:border-blue-500 focus:ring-1 focus:ring-pink-500 dark:focus:ring-blue-500 transition-colors"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Votre message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-pink-500 dark:focus:border-blue-500 focus:ring-1 focus:ring-pink-500 dark:focus:ring-blue-500 transition-colors"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="captcha" className="block text-sm font-medium mb-2">
              Combien font 4 + 38 ? (Anti-spam)
            </label>
            <input
              type="text"
              id="captcha"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-pink-500 dark:focus:border-blue-500 focus:ring-1 focus:ring-pink-500 dark:focus:ring-blue-500 transition-colors"
              value={formData.captcha}
              onChange={(e) => setFormData({ ...formData, captcha: e.target.value })}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 dark:from-blue-500 dark:to-blue-600 rounded-lg text-white font-semibold flex items-center justify-center gap-2 hover:from-pink-600 hover:to-pink-700 dark:hover:from-blue-600 dark:hover:to-blue-700 transition-colors shadow-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyez votre message'}
            <Send className="w-4 h-4" />
          </motion.button>
        </motion.form>

        <div className="absolute -z-10 inset-0 blur-3xl opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 dark:from-blue-500 dark:to-purple-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
