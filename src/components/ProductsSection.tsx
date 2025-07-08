
import React from 'react';
import { Heart, Star, ChefHat } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'Brigadeiro Tradicional',
      description: 'O clássico que conquistou corações há gerações',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop',
      category: 'Clássicos',
      rating: 5,
      story: 'Receita da vovó, feita com amor desde 1985'
    },
    {
      id: 2,
      name: 'Trufa de Chocolate Belga',
      description: 'Sofisticação em cada mordida',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=300&h=300&fit=crop',
      category: 'Premium',
      rating: 5,
      story: 'Chocolate importado, técnica artesanal'
    },
    {
      id: 3,
      name: 'Beijinho de Coco',
      description: 'Doce tradicional com toque especial',
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=300&fit=crop',
      category: 'Tradicionais',
      rating: 5,
      story: 'Coco fresco, preparado diariamente'
    },
    {
      id: 4,
      name: 'Brownie de Nozes',
      description: 'Cremoso, denso e irresistível',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=300&fit=crop',
      category: 'Especiais',
      rating: 5,
      story: 'Receita exclusiva da nossa confeitaria'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Clássicos': 'bg-yellow-100 text-yellow-800',
      'Premium': 'bg-purple-100 text-purple-800',
      'Tradicionais': 'bg-green-100 text-green-800',
      'Especiais': 'bg-pink-100 text-pink-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-16 px-6 bg-perdomo-warm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <ChefHat className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Conheça Nossos Produtos
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Cada doce conta uma história de tradição, carinho e qualidade. 
            Orgulhe-se de fazer parte da criação dessas delícias!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(product.category)}>
                      {product.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="h-4 w-4 text-red-500" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3">
                    {product.description}
                  </p>
                  
                  <div className="border-t pt-3">
                    <p className="text-xs text-gray-500 italic">
                      💫 {product.story}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-red-500 mr-2" />
              <span className="text-lg font-semibold text-gray-900">
                Você faz parte desta história!
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Cada produto que criamos leva um pedacinho do seu trabalho e dedicação.
            </p>
            <div className="text-primary font-medium">
              #OrgulhoPerdomo #FeitosComAmor
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
