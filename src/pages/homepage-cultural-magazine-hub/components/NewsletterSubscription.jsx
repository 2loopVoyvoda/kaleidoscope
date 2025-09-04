import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e?.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <section className="py-20 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <Icon name="CheckCircle" size={32} className="text-white" />
            </div>
            <h2 className="font-playfair text-3xl font-bold mb-4">
              Добре дошли в общността!
            </h2>
            <p className="font-inter text-lg opacity-90">
              Благодарим ви, че се присъединихте към Калейдоскоп. Очаквайте първия ни бюлетин скоро.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-accent text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold mb-4">
            Присъединете се към общността на любознателните
          </h2>
          <p className="font-inter text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Получавайте седмично подбрани истории, ексклузивни интервюта и първи достъп до нашите специални материали.
          </p>
        </div>

        <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Въведете вашия имейл"
                value={email}
                onChange={(e) => setEmail(e?.target?.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white focus:ring-white"
              />
            </div>
            <Button
              type="submit"
              variant="secondary"
              loading={isLoading}
              disabled={!email || isLoading}
              className="bg-white text-accent hover:bg-white/90 font-medium"
            >
              {isLoading ? 'Записване...' : 'Абонирай се'}
            </Button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="font-inter text-sm opacity-75">
            Без спам. Отписване по всяко време. Прочетете нашата{' '}
            <a href="#" className="underline hover:no-underline">
              политика за поверителност
            </a>
            .
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Icon name="Mail" size={24} />
            </div>
            <h3 className="font-playfair text-lg font-bold mb-2">Седмичен бюлетин</h3>
            <p className="font-inter text-sm opacity-80">
              Подбрани статии и нови публикации всяка неделя
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Icon name="Star" size={24} />
            </div>
            <h3 className="font-playfair text-lg font-bold mb-2">Ексклузивно съдържание</h3>
            <p className="font-inter text-sm opacity-80">
              Специални материали само за абонати
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Icon name="Users" size={24} />
            </div>
            <h3 className="font-playfair text-lg font-bold mb-2">Общност</h3>
            <p className="font-inter text-sm opacity-80">
              Присъединете се към 5000+ любознателни читатели
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;