
import React from 'react';
import { Clock, ArrowRight, Bookmark, Eye, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'Novo produto: Brigadeiro Gourmet de Pistache',
      excerpt: 'Conheça nossa mais nova criação que promete conquistar paladares exigentes com sabor único e apresentação especial. Uma receita desenvolvida com muito carinho pela nossa equipe.',
      category: 'Produtos',
      date: '2 horas atrás',
      readTime: '3 min',
      views: 245,
      comments: 12,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop',
      featured: true,
      author: 'Equipe Produto'
    },
    {
      id: 2,
      title: 'Programa de Reconhecimento - Colaboradores Destaque',
      excerpt: 'Celebramos os talentos que fazem a diferença na nossa equipe. Confira os homenageados deste mês e suas conquistas.',
      category: 'RH',
      date: '1 dia atrás',
      readTime: '2 min',
      views: 189,
      comments: 8,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
      featured: false,
      author: 'RH Perdomo'
    },
    {
      id: 3,
      title: 'Workshop: Técnicas Avançadas de Confeitaria',
      excerpt: 'Inscrições abertas para o workshop que acontecerá na próxima semana com chef renomado internacional.',
      category: 'Treinamento',
      date: '2 dias atrás',
      readTime: '4 min',
      views: 156,
      comments: 15,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      featured: false,
      author: 'Desenvolvimento'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Produtos': 'bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-green-200',
      'RH': 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-blue-200',
      'Treinamento': 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 border-purple-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              O que está acontecendo na Perdomo
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed">
              Fique por dentro das últimas novidades, projetos e conquistas da nossa família. 
              Transparência e comunicação que nos conectam.
            </p>
          </div>
          <Button className="hidden md:flex bg-primary hover:bg-primary/90 px-6 py-3 rounded-xl">
            Ver todas as notícias
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured News */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 bg-white">
              <div className="relative">
                <img 
                  src={news[0].image} 
                  alt={news[0].title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Badge className={`${getCategoryColor(news[0].category)} font-medium px-3 py-1`}>
                      {news[0].category}
                    </Badge>
                    <span className="text-white/80 text-sm">Por {news[0].author}</span>
                  </div>
                  
                  <h3 className="text-white text-2xl font-bold mb-3 leading-tight">
                    {news[0].title}
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed mb-4">
                    {news[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-white/80 text-sm">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {news[0].date}
                      </span>
                      {/* <span className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {news[0].views}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {news[0].comments}
                      </span> */}
                    </div>
                    {/* <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                      <Bookmark className="h-4 w-4" />
                    </Button> */}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Other News */}
          <div className="space-y-6">
            {news.slice(1).map((item) => (
              <Card key={item.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="relative flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-32 h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge className={`${getCategoryColor(item.category)} text-xs font-medium`}>
                          {item.category}
                        </Badge>
                        <span className="text-xs text-gray-500">• {item.readTime} leitura</span>
                      </div>
                      
                      <h4 className="font-bold text-base mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                        {item.title}
                      </h4>
                      
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                        {item.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-500 space-x-3">
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {item.date}
                          </span>
                          <span className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            {item.views}
                          </span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              📢 Tem uma notícia para compartilhar?
            </h3>
            <p className="text-gray-600 mb-6">
              Conte para toda a família Perdomo! Envie suas sugestões de conteúdo para nossa equipe de comunicação.
            </p>
            <Button className="bg-primary hover:bg-primary/90 px-6 py-3 rounded-xl">
              Enviar Sugestão
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default NewsSection;
