import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const InterviewArchive = ({ interviews }) => {
  const [selectedCategory, setSelectedCategory] = useState('всички');
  const [selectedProfession, setSelectedProfession] = useState('всички');

  const categories = ['всички', 'култура', 'бизнес', 'изкуство', 'наука', 'спорт'];
  const professions = ['всички', 'художници', 'предприемачи', 'писатели', 'музиканти', 'актьори'];

  const filteredInterviews = interviews?.filter(interview => {
    const categoryMatch = selectedCategory === 'всички' || interview?.category === selectedCategory;
    const professionMatch = selectedProfession === 'всички' || interview?.profession === selectedProfession;
    return categoryMatch && professionMatch;
  });

  return (
    <section className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Архив "Гласове"
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Открий разговори с вдъхновяващи личности от различни сфери на културата и обществото
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category Filter */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-foreground">
                Категория
              </label>
              <div className="flex flex-wrap gap-2">
                {categories?.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-background text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {category?.charAt(0)?.toUpperCase() + category?.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Profession Filter */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-foreground">
                Професия
              </label>
              <div className="flex flex-wrap gap-2">
                {professions?.map((profession) => (
                  <button
                    key={profession}
                    onClick={() => setSelectedProfession(profession)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedProfession === profession
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-background text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {profession?.charAt(0)?.toUpperCase() + profession?.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-sm text-muted-foreground">
            Показани {filteredInterviews?.length} от {interviews?.length} интервюта
          </p>
        </div>

        {/* Interview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInterviews?.map((interview) => (
            <article
              key={interview?.id}
              className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            >
              {/* Portrait */}
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={interview?.portrait}
                  alt={`Портрет на ${interview?.name}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded">
                      {interview?.category?.toUpperCase()}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {interview?.date}
                    </span>
                  </div>
                  
                  <h3 className="font-playfair text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {interview?.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {interview?.title}
                  </p>
                </div>

                <p className="text-sm text-foreground line-clamp-3">
                  {interview?.excerpt}
                </p>

                {/* Audio Indicator */}
                {interview?.hasAudio && (
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Icon name="Volume2" size={14} />
                    <span>Аудио версия</span>
                  </div>
                )}

                {/* Read More */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-medium text-accent group-hover:text-accent/80 transition-colors">
                    Прочети интервюто
                  </span>
                  <Icon 
                    name="ArrowRight" 
                    size={16} 
                    className="text-accent group-hover:translate-x-1 transition-transform" 
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        {filteredInterviews?.length >= 9 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors">
              Зареди още интервюта
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default InterviewArchive;