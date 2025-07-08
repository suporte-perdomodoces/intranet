import React from 'react';
import { Clock, ArrowRight, Bookmark } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'Novo produto: Brigadeiro Gourmet de Pistache',
      excerpt: 'Conheça nossa mais nova criação que promete conquistar paladares exigentes com sabor único e apresentação especial.',
      category: 'Produtos',
      date: '2 horas atrás',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=250&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Programa de Reconhecimento - Colaboradores Destaque',
      excerpt: 'Celebramos os talentos que fazem a diferença na nossa equipe. Confira os homenageados deste mês.',
      category: 'RH',
      date: '1 dia atrás',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'Workshop: Técnicas Avançadas de Confeitaria',
      excerpt: 'Inscrições abertas para o workshop que acontecerá na próxima semana com chef renomado.',
      category: 'Treinamento',
      date: '2 dias atrás',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop',
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Produtos': 'bg-green-100 text-green-800',
      'RH': 'bg-blue-100 text-blue-800',
      'Treinamento': 'bg-purple-100 text-purple-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O que está acontecendo na Perdomo
            </h2>
            <p className="text-gray-600 text-lg">
              Fique por dentro das últimas novidades, projetos e conquistas da nossa família
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            Ver todas as notícias
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured News */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img 
                  src={news[0].image} 
                  alt={news[0].title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className={getCategoryColor(news[0].category) + ' mb-2'}>
                    {news[0].category}
                  </Badge>
                  <h3 className="text-white text-xl font-bold mb-2">
                    {news[0].title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {news[0].excerpt}
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {news[0].date}
                  </div>
                  <Button variant="ghost" size="sm">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Other News */}
          <div className="space-y-6">
            {news.slice(1).map((item) => (
              <Card key={item.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-24 h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4 flex-1">
                      <Badge className={getCategoryColor(item.category) + ' mb-2 text-xs'}>
                        {item.category}
                      </Badge>
                      <h4 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {item.date}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
