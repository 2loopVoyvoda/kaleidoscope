import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-success text-success-foreground rounded-full flex items-center justify-center mx-auto">
              <Icon name="Check" size={24} />
            </div>
            <h2 className="font-playfair text-3xl font-bold text-accent-foreground">
              Добре дошъл в общността!
            </h2>
            <p className="text-lg text-accent-foreground/80">
              Ще получаваш най-новите интервюта и ексклузивен достъп до аудио съдържание.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-accent py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-accent-foreground">
              Следи новите интервюта
            </h2>
            <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto">
              Получавай уведомления за нови разговори с вдъхновяващи личности и ексклузивен достъп до аудио съдържание.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: 'Bell',
                title: 'Първи научавай',
                description: 'Нови интервюта директно в пощата ти'
              },
              {
                icon: 'Headphones',
                title: 'Аудио достъп',
                description: 'Слушай интервютата където и да си'
              },
              {
                icon: 'Users',
                title: 'Ексклузивна общност',
                description: 'Присъедини се към любителите на културата'
              }
            ]?.map((benefit, index) => (
              <div key={index} className="space-y-3">
                <div className="w-12 h-12 bg-accent-foreground/10 text-accent-foreground rounded-lg flex items-center justify-center mx-auto">
                  <Icon name={benefit?.icon} size={20} />
                </div>
                <h3 className="font-inter text-lg font-semibold text-accent-foreground">
                  {benefit?.title}
                </h3>
                <p className="text-sm text-accent-foreground/70">
                  {benefit?.description}
                </p>
              </div>
            ))}
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Твоят имейл адрес"
                value={email}
                onChange={(e) => setEmail(e?.target?.value)}
                required
                className="bg-accent-foreground/10 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/60"
              />
              <Button
                type="submit"
                variant="secondary"
                fullWidth
                loading={isLoading}
                disabled={!email}
                className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
              >
                Абонирай се безплатно
              </Button>
            </div>
            <p className="text-xs text-accent-foreground/60 mt-3">
              Няма спам. Отписване по всяко време.
            </p>
          </form>

          {/* Social Proof */}
          <div className="pt-8 border-t border-accent-foreground/20">
            <div className="flex items-center justify-center space-x-6 text-accent-foreground/70">
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} />
                <span className="text-sm">2,500+ читатели</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={16} />
                <span className="text-sm">4.9/5 рейтинг</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span className="text-sm">Без спам</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;