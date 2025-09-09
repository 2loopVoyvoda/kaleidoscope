import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-accent to-accent/90 rounded-lg p-6 text-accent-foreground">
      <div className="flex items-center gap-3 mb-4">
        <Icon name="Mail" size={24} />
        <h3 className="font-playfair text-lg font-bold">
          Културен бюлетин
        </h3>
      </div>
      <p className="text-accent-foreground/80 text-sm mb-4 leading-relaxed">
        Получавайте най-новите културни анализи, интервюта и препоръки директно в пощенската си кутия.
      </p>
      {isSubscribed ? (
        <div className="flex items-center gap-2 p-3 bg-success/20 rounded-lg">
          <Icon name="CheckCircle" size={20} className="text-success" />
          <span className="text-sm font-medium">
            Успешно се абонирахте!
          </span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Въведете вашия имейл"
            value={email}
            onChange={(e) => setEmail(e?.target?.value)}
            required
            className="bg-white/10 border-white/20 text-accent-foreground placeholder:text-accent-foreground/60"
          />
          <Button 
            type="submit"
            variant="secondary"
            fullWidth
            className="bg-white text-accent hover:bg-white/90"
          >
            Абонирай се
          </Button>
        </form>
      )}
      <p className="text-xs text-accent-foreground/60 mt-3">
        Изпращаме само качествено съдържание. Без спам.
      </p>
    </div>
  );
};

export default NewsletterSubscription;