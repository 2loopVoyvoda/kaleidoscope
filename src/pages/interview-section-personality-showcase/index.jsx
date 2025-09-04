import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import InterviewHero from './components/InterviewHero';
import InterviewContent from './components/InterviewContent';
import InterviewArchive from './components/InterviewArchive';
import NewsletterSignup from './components/NewsletterSignup';

const InterviewSectionPersonalityShowcase = () => {
  // Featured Interview Mock Data
  const featuredInterview = {
    id: 1,
    name: "Мария Петрова",
    title: "Художничка и куратор",
    introduction: `Мария Петрова е една от най-влиятелните фигури в съвременното българско изкуство. Нейните инсталации изследват връзката между традицията и модерността, а като куратор тя е организирала над 50 изложби в България и чужбина. В този разговор споделя за творческия си процес, предизвикателствата пред българските художници и визията си за бъдещето на изкуството.`,
    portrait: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=750&fit=crop&crop=face",
    date: "15 февруари 2025",
    audioUrl: "/audio/maria-petrova-interview.mp3",
    audioDuration: "45 мин",
    socialLinks: [
      { platform: "Instagram", url: "https://instagram.com/mariapetrova_art" },
      { platform: "Facebook", url: "https://facebook.com/mariapetrova.artist" },
      { platform: "Globe", url: "https://mariapetrova.art" }
    ]
  };

  // Interview Q&A Mock Data
  const interviewData = {
    id: 1,
    name: "Мария Петрова",
    qna: [
      {
        id: 1,
        question: "Как започна твоето пътуване в изкуството?",
        answer: `Всичко започна в детството ми в Пловдив. Баба ми беше майстор на традиционни български шевици и винаги казваше, че всеки шев разказва история. Тази философия се превърна в основата на моето творчество - всеки цвят, всяка линия в работите ми носи смисъл и емоция. Първата ми изложба беше на 16 години в местната галерия, където показах серия картини, вдъхновени от народните мотиви на баба ми.`,
        pullQuote: "Изкуството не е само за красота - то е език, с който говорим за неща, които думите не могат да опишат.",
        audioExcerpt: true
      },
      {
        id: 2,
        question: "Как виждаш ролята на българския художник в съвременния свят?",
        answer: `Българският художник има уникална позиция - ние сме мост между Изтока и Запада, между традицията и модерността. Нашата история ни дава богатство от символи и разкази, които могат да говорят универсален език. Но важното е да не се затваряме в миналото, а да използваме това наследство като трамплин към бъдещето. Съвременният български художник трябва да бъде смел, да експериментира и да показва света, че малката България има какво да каже.`,
        audioExcerpt: true
      },
      {
        id: 3,
        question: "Какви са предизвикателствата пред младите творци днес?",
        answer: `Най-голямото предизвикателство е намирането на баланс между творческата свобода и комерсиалната реалност. Младите художници имат достъп до безкрайно количество информация и вдъхновение, но същевременно пазарът е изключително конкурентен. Важно е да се научат да разказват своите истории автентично, без да се поддават на модните тенденции. Също така, дигиталните платформи предлагат нови възможности, но изискват и нови умения за самопромоция и изграждане на аудитория.`,
        pullQuote: "Успехът в изкуството не се измерва само с продажби, а с това колко дълбоко докосваш душите на хората.",
        audioExcerpt: false
      }
    ],
    tags: ["изкуство", "култура", "традиции", "модерност", "творчество", "България", "галерии", "изложби"]
  };

  // Archive Interviews Mock Data
  const archiveInterviews = [
    {
      id: 2,
      name: "Георги Господинов",
      title: "Писател и поет",
      category: "култура",
      profession: "писатели",
      portrait: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face",
      date: "8 февруари 2025",
      excerpt: "Разговор за литературата като мост между поколенията и силата на разказването в съвременния свят.",
      hasAudio: true
    },
    {
      id: 3,
      name: "Анна Димитрова",
      title: "Основател на TechBG",
      category: "бизнес",
      profession: "предприемачи",
      portrait: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face",
      date: "1 февруари 2025",
      excerpt: "Как една българка изгради технологична империя и какви са предизвикателствата пред жените в бизнеса.",
      hasAudio: false
    },
    {
      id: 4,
      name: "Димитър Маринов",
      title: "Джаз музикант",
      category: "изкуство",
      profession: "музиканти",
      portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
      date: "25 януари 2025",
      excerpt: "За джаза като универсален език и как българската музикална традиция обогатява световната сцена.",
      hasAudio: true
    },
    {
      id: 5,
      name: "Елена Йорданова",
      title: "Театрална режисьорка",
      category: "изкуство",
      profession: "актьори",
      portrait: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop&crop=face",
      date: "18 януари 2025",
      excerpt: "Съвременният театър като огледало на обществото и силата на живото изкуство в дигиталната епоха.",
      hasAudio: true
    },
    {
      id: 6,
      name: "Проф. Иван Стоянов",
      title: "Археолог и историк",
      category: "наука",
      profession: "учени",
      portrait: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop&crop=face",
      date: "11 януари 2025",
      excerpt: "Новите археологически открития в България и как те променят разбирането ни за древната история.",
      hasAudio: false
    },
    {
      id: 7,
      name: "Мартин Петков",
      title: "Олимпийски шампион по гребане",
      category: "спорт",
      profession: "спортисти",
      portrait: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=300&fit=crop&crop=face",
      date: "4 януари 2025",
      excerpt: "Пътят към олимпийското злато и как спортът формира характера и дисциплината.",
      hasAudio: true
    },
    {
      id: 8,
      name: "Силвия Кръстева",
      title: "Шеф готвач и ресторантьор",
      category: "култура",
      profession: "готвачи",
      portrait: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=300&fit=crop&crop=face",
      date: "28 декември 2024",
      excerpt: "Българската кухня като културно наследство и как традиционните рецепти намират място в модерната гастрономия.",
      hasAudio: false
    },
    {
      id: 9,
      name: "Александър Николов",
      title: "Фотограф документалист",
      category: "изкуство",
      profession: "художници",
      portrait: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop&crop=face",
      date: "21 декември 2024",
      excerpt: "Фотографията като социален документ и силата на визуалното разказване в съвременния свят.",
      hasAudio: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Интервюта - Гласове на културата | Калейдоскоп</title>
        <meta 
          name="description" 
          content="Открий вдъхновяващи разговори с личности от културата, изкуството и обществото. Интервюта с аудио версии и ексклузивно съдържание." 
        />
        <meta name="keywords" content="интервюта, култура, изкуство, личности, България, аудио интервюта, културни фигури" />
        <meta property="og:title" content="Интервюта - Гласове на културата | Калейдоскоп" />
        <meta property="og:description" content="Вдъхновяващи разговори с личности от културата и изкуството" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <InterviewHero featuredInterview={featuredInterview} />
          <InterviewContent interview={interviewData} />
          <InterviewArchive interviews={archiveInterviews} />
          <NewsletterSignup />
        </main>
      </div>
    </>
  );
};

export default InterviewSectionPersonalityShowcase;