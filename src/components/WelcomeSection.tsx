
import { useState } from 'react';
import { Heart, Pause, Play, Sparkles, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { playVideoById, pauseVideoById } from '@/utils/videoSettings';

const WelcomeSection = () => {

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <section className="bg-gradient-to-br from-primary via-primary/95 to-blue-800 text-white py-20 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/20 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-yellow-300/30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 rounded-full bg-pink-300/40 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Welcome Message */}
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 rounded-full p-2">
                <Heart className="h-6 w-6 text-red-300 animate-pulse" />
              </div>
              <span className="text-xl font-semibold text-blue-100">Bem-vindo(a) à família Perdomo!</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Onde cada doce conta uma
              <span className="text-transparent bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text"> história</span>
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
              Este é o seu portal interno, criado com carinho para manter nossa família
              Perdomo sempre conectada, informada e inspirada. Aqui você encontra tudo
              que precisa para fazer parte da nossa doce jornada.
            </p>

            <div 
            className="
              flex flex-col items-center space-y-4
              sm:space-x-4 sm:space-y-0 sm:flex-row pt-6"
            >
              <Button
                size="lg"
                onClick={() => document.getElementById('meu-alvo').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Explorar Portal
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-primary hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={!isPlaying ? (
                  () => playVideoById(setIsPlaying, "video")
                ) : (
                  () => pauseVideoById(setIsPlaying, "video")
                )
                }
              >
                {!isPlaying ? (
                  <Play className="h-5 w-5 mr-2" />
                ) : (
                  <Pause className="h-5 w-5 mr-2" />
                )}
                Mensagem da Diretoria
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">200+</div>
                <div className="text-blue-200 text-sm">Colaboradores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10</div>
                <div className="text-blue-200 text-sm">Anos de História</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-blue-200 text-sm">Receitas Únicas</div>
              </div>
            </div>
          </div>

          {/* Featured Video/Image */}
          <div className="relative animate-slide-up">
            <Card className="overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center relative group cursor-pointer hover:from-white/30 hover:to-white/10 transition-all duration-500">
                  <video src='/videos/tst.mov' id="video" poster='/images/thumbs.png' />
                {/* <div className="text-center space-y-6 p-8">
                  <div className="bg-white/20 rounded-full p-8 mx-auto w-fit group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <Play className="h-16 w-16 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-xl mb-2">
                      Mensagem da Diretoria
                    </p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      "Conheça a visão da nossa liderança para 2024 e os planos emocionantes que temos pela frente"
                    </p>
                  </div> 
                </div> */}

                {/* Play overlay */}
                <button
                  onClick={
                    isPlaying ? (() => pauseVideoById(setIsPlaying, "video")
                    ) : (
                      () => playVideoById(setIsPlaying, "video")
                    )
                  }
                  className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  {!isPlaying && (
                    <div className="bg-white/90 rounded-full p-4">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                  )}
                </button>
              </div>
            </Card>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-yellow-400 to-yellow-500 text-primary rounded-2xl p-4 animate-float shadow-xl">
              <Heart className="h-8 w-8" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-pink-400 to-pink-500 text-white rounded-2xl p-3 animate-float shadow-xl" style={{ animationDelay: '1s' }}>
              <Users className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
