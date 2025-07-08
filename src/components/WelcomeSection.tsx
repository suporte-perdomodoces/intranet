
import React from 'react';
import { Heart, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const WelcomeSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Welcome Message */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-red-300 animate-pulse" />
              <span className="text-lg font-medium">Bem-vindo(a) à família Perdomo!</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Onde cada doce conta uma 
              <span className="text-yellow-300"> história</span>
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              Este é o seu portal interno, criado com carinho para manter nossa família 
              Perdomo sempre conectada, informada e inspirada. Aqui você encontra tudo 
              que precisa para fazer parte da nossa doce jornada.
            </p>

            <div className="flex items-center space-x-4 pt-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-6"
              >
                Explorar Portal
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Play className="h-4 w-4 mr-2" />
                Assistir Apresentação
              </Button>
            </div>
          </div>

          {/* Featured Video/Image */}
          <div className="relative animate-slide-up">
            <Card className="overflow-hidden bg-white/10 backdrop-blur-sm border-white/20">
              <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="bg-white/20 rounded-full p-6 mx-auto w-fit">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <p className="text-white/90 font-medium">
                    Mensagem da Diretoria
                  </p>
                  <p className="text-white/70 text-sm">
                    Conheça a visão da nossa liderança para 2024
                  </p>
                </div>
              </div>
            </Card>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-primary rounded-full p-3 animate-float">
              <Heart className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-pink-400 text-white rounded-full p-2 animate-float" style={{ animationDelay: '1s' }}>
              ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
