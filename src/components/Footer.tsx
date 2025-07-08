
import React from 'react';
import { Heart, Phone, Mail, MapPin, Users, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white text-primary px-3 py-2 rounded-lg font-bold text-lg">
                Perdomo
              </div>
              <Heart className="h-5 w-5 text-pink-300" />
            </div>
            <p className="text-blue-100 leading-relaxed">
              Criando momentos doces e especiais desde 1985. 
              Somos uma família que acredita no poder dos afetos 
              e na qualidade artesanal.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary">
                Facebook
              </Button>
              <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary">
                Instagram
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              {[
                'Manual do Colaborador',
                'Políticas Internas', 
                'Formulários RH',
                'Benefícios',
                'Treinamentos',
                'Central de Ajuda'
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Suporte Interno</h4>
            <div className="space-y-3">
              <div className="flex items-center text-blue-100 text-sm">
                <Phone className="h-4 w-4 mr-2" />
                <div>
                  <div>TI: (11) 3000-1000</div>
                  <div>RH: (11) 3000-2000</div>
                </div>
              </div>
              <div className="flex items-center text-blue-100 text-sm">
                <Mail className="h-4 w-4 mr-2" />
                <div>
                  <div>ti@perdomo.com.br</div>
                  <div>rh@perdomo.com.br</div>
                </div>
              </div>
              <div className="flex items-start text-blue-100 text-sm">
                <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                <div>
                  Rua dos Doces, 123<br />
                  São Paulo - SP
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Nossa Essência</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Target className="h-5 w-5 mr-3 mt-1 text-yellow-300" />
                <div>
                  <div className="font-medium text-sm">Missão</div>
                  <div className="text-blue-100 text-xs">
                    Criar experiências doces que conectam pessoas e despertam sorrisos
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="h-5 w-5 mr-3 mt-1 text-green-300" />
                <div>
                  <div className="font-medium text-sm">Valores</div>
                  <div className="text-blue-100 text-xs">
                    Família, qualidade, tradição e inovação
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-blue-100 text-sm mb-4 md:mb-0">
              © 2024 Perdomo Doces. Feito com 💙 para nossa família interna.
            </div>
            <div className="flex items-center space-x-6 text-blue-100 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>Portal v2.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
