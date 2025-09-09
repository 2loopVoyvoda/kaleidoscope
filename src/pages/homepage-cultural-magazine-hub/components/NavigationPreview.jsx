import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const NavigationPreview = () => {
  const categories = [
    {
      name: 'Пътувания',
      path: '/patuvania',
      description: 'Регионални открития и скрити съкровища',
      icon: 'MapPin',
      color: 'text-blue-600'
    },
    {
      name: 'Култура',
      path: '/kultura',
      description: 'Дълбочинен културен анализ и коментар',
      icon: 'Palette',
      color: 'text-purple-600'
    },
    {
      name: 'Интервюта',
      path: '/intervyuta',
      description: 'Разговори с интересни личности',
      icon: 'MessageCircle',
      color: 'text-green-600'
    },
    {
      name: 'Търсене',
      path: '/tarsene',
      description: 'Открий съдържание по твой вкус',
      icon: 'Search',
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
            Изследвай света на културата
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Всяка категория разкрива нови перспективи и вдъхновяващи истории
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories?.map((category) => (
            <Link
              key={category?.path}
              to={category?.path}
              className="group bg-background rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full bg-gray-100 ${category?.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={category?.icon} size={24} />
                </div>
              </div>
              
              <h3 className="font-playfair text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                {category?.name}
              </h3>
              
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                {category?.description}
              </p>
              
              <div className="mt-4 flex items-center text-accent group-hover:translate-x-1 transition-transform duration-300">
                <span className="font-inter text-sm font-medium">Разгледай</span>
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigationPreview;