import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    navigation: [
      { name: 'Начало', path: '/' },
      { name: 'Пътувания', path: '/patuvania' },
      { name: 'Култура', path: '/kultura' },
      { name: 'Интервюта', path: '/intervyuta' },
      { name: 'Търсене', path: '/tarsene' }
    ],
    legal: [
      { name: 'Политика за поверителност', path: '#' },
      { name: 'Условия за ползване', path: '#' },
      { name: 'Бисквитки', path: '#' },
      { name: 'Авторски права', path: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', url: '#' },
    { name: 'Instagram', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'LinkedIn', url: '#' }
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-playfair text-3xl font-bold mb-4">
                Калейдоскоп
              </h3>
              <p className="font-inter text-gray-300 leading-relaxed">
                Открий необикновеното в познатото. Вашият пътеводител в света на културата, пътуванията и любопитните истории.
              </p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-sm"
                  aria-label={social?.name}
                >
                  {social?.name?.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-playfair text-lg font-bold mb-6">Навигация</h4>
                <ul className="space-y-3">
                  {footerLinks?.navigation?.map((link) => (
                    <li key={link?.path}>
                      <Link
                        to={link?.path}
                        className="font-inter text-gray-300 hover:text-white transition-colors"
                      >
                        {link?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-playfair text-lg font-bold mb-6">Правна информация</h4>
                <ul className="space-y-3">
                  {footerLinks?.legal?.map((link) => (
                    <li key={link?.path}>
                      <a
                        href={link?.path}
                        className="font-inter text-gray-300 hover:text-white transition-colors"
                      >
                        {link?.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="font-playfair text-xl font-bold mb-2">
                Останете в течение
              </h4>
              <p className="font-inter text-gray-300">
                Получавайте най-новите статии директно в пощенската си кутия
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <input
                type="email"
                placeholder="Вашият имейл"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40"
              />
              <button className="bg-white text-foreground px-6 py-2 rounded-lg font-inter font-medium hover:bg-gray-100 transition-colors">
                Абонирай се
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="font-inter text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Калейдоскоп. Всички права запазени.
            </p>
            
            <div className="flex items-center space-x-6">
              <span className="font-inter text-gray-400 text-sm">
                Направено с ❤️ в България
              </span>
              <div className="flex items-center space-x-2">
                <span className="font-inter text-gray-400 text-sm">🌍</span>
                <span className="font-inter text-gray-400 text-sm">Български</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;