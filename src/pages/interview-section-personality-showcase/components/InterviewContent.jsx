import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const InterviewContent = ({ interview }) => {
  const [currentAudio, setCurrentAudio] = useState(null);

  const playAudioExcerpt = (excerptId) => {
    setCurrentAudio(excerptId);
    // Audio playback logic would be implemented here
  };

  return (
    <section className="bg-background py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="space-y-12">
          {interview?.qna?.map((item, index) => (
            <div key={index} className="space-y-6">
              {/* Question */}
              <div className="space-y-3">
                <h3 className="font-playfair text-xl lg:text-2xl font-bold text-foreground">
                  {item?.question}
                </h3>
                {item?.audioExcerpt && (
                  <button
                    onClick={() => playAudioExcerpt(item?.id)}
                    className="inline-flex items-center space-x-2 text-sm text-accent hover:text-accent/80 transition-colors"
                  >
                    <Icon name={currentAudio === item?.id ? "Pause" : "Play"} size={16} />
                    <span>Слушай отговора</span>
                  </button>
                )}
              </div>

              {/* Answer */}
              <div className="prose prose-lg max-w-none">
                <div className="pl-6 border-l-2 border-muted">
                  <p className="text-foreground font-inter leading-relaxed text-lg">
                    {item?.answer}
                  </p>
                </div>
              </div>

              {/* Pull Quote */}
              {item?.pullQuote && (
                <div className="my-8">
                  <blockquote className="relative bg-muted rounded-lg p-8">
                    <div className="absolute top-4 left-4">
                      <Icon name="Quote" size={24} className="text-accent/30" />
                    </div>
                    <p className="font-playfair text-xl lg:text-2xl font-medium text-foreground italic leading-relaxed pl-8">
                      {item?.pullQuote}
                    </p>
                    <div className="flex items-center justify-between mt-6 pl-8">
                      <cite className="text-sm text-muted-foreground not-italic">
                        — {interview?.name}
                      </cite>
                      <button className="text-muted-foreground hover:text-foreground transition-colors">
                        <Icon name="Share" size={16} />
                      </button>
                    </div>
                  </blockquote>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Interview Tags */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="space-y-4">
            <h4 className="font-inter text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Теми в интервюто
            </h4>
            <div className="flex flex-wrap gap-2">
              {interview?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-inter text-lg font-medium text-foreground">
                Сподели интервюто
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                Разпространи вдъхновяващите думи
              </p>
            </div>
            <div className="flex items-center space-x-3">
              {['Facebook', 'Twitter', 'Linkedin', 'Link']?.map((platform) => (
                <button
                  key={platform}
                  className="w-10 h-10 bg-muted text-muted-foreground rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon name={platform} size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewContent;