
import React from 'react';
import { Heart, Star, ChefHat, Award, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'Anápolis',
      description: '',
      image: '/images/stores/anapolis.jpeg',
      category: 'Loja',
      rating: 5,
      story: '',
      highlight: '',
      ingredients: ['', '', '']
    },
    {
      id: 2,
      name: 'Prime',
      description: '',
      image: '/images/stores/prime.jpeg',
      category: 'Loja',
      rating: 5,
      story: '',
      highlight: '',
      ingredients: ['', '', '']
    },
    {
      id: 3,
      name: 'Conjunto Nacional',
      description: '',
      image: '/images/stores/conjunto.jpeg',
      category: 'Loja',
      rating: 5,
      story: '',
      highlight: '',
      ingredients: ['', '', '']
    },
    {
      id: 4,
      name: 'Mané',
      description: '',
      image: '/images/stores/mane.jpeg',
      category: '',
      rating: 5,
      story: '',
      highlight: '',
      ingredients: ['', '', '']
    },
    {
      id: 5,
      name: 'Loja Matriz',
      description: '',
      image: '/images/stores/mane.jpeg',
      category: '',
      rating: 5,
      story: '',
      highlight: '',
      ingredients: ['', '', '']
    },
    {
      id: 6,
      name: 'Drive Thru T4',
      description: '',
      image: '/images/stores/mane.jpeg',
      category: '',
      rating: 5,
      story: '',
      highlight: '',
      ingredients: ['', '', '']
    },
    {
      id: 7,
      name: 'Itinerante',
      description: '',
      image: '/images/stores/mane.jpeg',
      category: '',
      rating: 5,
      story: '',
      highlight: '',
      ingredients: ['', '', '']
    },
    {
      id: 8,
      name: 'Costa Águas Claras',
      description: '',
      image: '/images/stores/mane.jpeg',
      category: '',
      rating: 5,
      story: '',
      highlight: '',
      ingredients: ['', '', '']
    },
    {
      id: 9,
      name: 'Fábrica',
      description: '',
      image: '/images/stores/mane.jpeg',
      category: '',
      rating: 5,
      story: '',
      highlight: '',
      ingredients: ['', '', '']
    },
    {
      id: 10,
      name: 'Administrativo',
      description: '',
      image: '/images/stores/mane.jpeg',
      category: '',
      rating: 5,
      story: '',
      highlight: '',
      ingredients: ['', '', '']
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Clássicos': 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 border-yellow-200',
      'Premium': 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 border-purple-200',
      'Tradicionais': 'bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-green-200',
      'Especiais': 'bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 border-pink-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getHighlightColor = (highlight: string) => {
    const colors = {
      'Mais vendido': 'bg-gradient-to-r from-green-500 to-green-600',
      'Premium': 'bg-gradient-to-r from-purple-500 to-purple-600',
      'Tradicional': 'bg-gradient-to-r from-blue-500 to-blue-600',
      'Novo': 'bg-gradient-to-r from-orange-500 to-orange-600'
    };
    return colors[highlight as keyof typeof colors] || 'bg-gradient-to-r from-gray-500 to-gray-600';
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-perdomo-warm via-orange-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white rounded-full p-4 shadow-lg mr-4">
              <ChefHat className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Conheça Nossas Unidades
            </h2>
          </div>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Cada pedacinho da nossa história importa!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white border-0 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Badges */}
                  {/* <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    <Badge className={`${getCategoryColor(product.category)} font-medium shadow-md`}>
                      {product.category}
                    </Badge>
                    <div className={`${getHighlightColor(product.highlight)} text-white px-2 py-1 rounded-md text-xs font-bold shadow-md`}>
                      {product.highlight}
                    </div>
                  </div> */}

                  {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <Heart className="h-5 w-5 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                  </div> */}

                  {/* Hover content */}
                  {/* <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-xs text-gray-600 font-medium mb-1">Ingredientes principais:</div>
                      <div className="flex flex-wrap gap-1">
                        {product.ingredients.slice(0, 2).map((ingredient, i) => (
                          <span key={i} className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div> */}
                </div>

                <div className="p-6 space-y-4">
                  {/* <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Award className="h-5 w-5 text-primary" />
                  </div> */}

                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    {/* <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {product.description}
                    </p> */}
                  </div>

                  {/* <div className="border-t border-gray-100 pt-3">
                    <div className="flex items-center text-xs text-gray-500">
                      <Sparkles className="h-3 w-3 mr-1 text-primary" />
                      <span className="italic font-medium">{product.story}</span>
                    </div>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-10 shadow-xl inline-block max-w-2xl">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-full p-3 mr-3">
                <Heart className="h-8 w-8 text-red-500" />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                Você faz parte desta história!
              </span>
            </div>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Cada produto que criamos leva um pedacinho do seu trabalho, dedicação e amor.
              Juntos, construímos momentos especiais para milhares de famílias brasileiras.
            </p>
            <div className="flex flex-col items-center justify-center sm:space-x-6 text-primary font-bold text-lg sm:flex-row">
              <span className="flex items-center">
                <Sparkles className="h-5 w-5 mr-2" />
                #OrgulhoPerdomo
              </span>
              <span className="flex items-center">
                <Heart className="h-5 w-5 mr-2" />
                #FeitosComAmor
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
