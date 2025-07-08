
import React from 'react';
import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Users, 
  Target, 
  Award, 
  Facebook, 
  Instagram, 
  Linkedin,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const quickLinks = [
    'Manual do Colaborador',
    'Políticas Internas', 
    'Formulários RH',
    'Benefícios',
    'Treinamentos',
    'Central de Ajuda'
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' }
  ];

  return (
    <footer className="bg-gradient-to-b from-primary to-blue-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-white/20"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-yellow-300/30"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-pink-300/40"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-white text-primary px-4 py-3 rounded-xl font-bold text-xl shadow-lg">
                  Perdomo
                </div>
                <Heart className="h-6 w-6 text-pink-300 animate-pulse" />
              </div>
              <p className="text-blue-100 leading-relaxed text-base">
                Criando momentos doces e especiais desde 1985. 
                Somos uma família que acredita no poder dos afetos 
                e na qualidade artesanal que conecta pessoas.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <Button 
                    key={index}
                    size="sm" 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 rounded-lg"
                  >
                    <social.icon className="h-4 w-4 mr-2" />
                    {social.name}
                  </Button>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">39</div>
                  <div className="text-blue-200 text-xs">Anos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">150+</div>
                  <div className="text-blue-200 text-xs">Família</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-300">500+</div>
                  <div className="text-blue-200 text-xs">Receitas</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-xl mb-6 text-white flex items-center">
                <ExternalLink className="h-5 w-5 mr-2" />
                Links Úteis
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm flex items-center group"
                    >
                      <span className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-xl mb-6 text-white flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Suporte Interno
              </h4>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center text-blue-100 text-sm mb-2">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="font-medium">Telefones</span>
                  </div>
                  <div className="space-y-1 text-white">
                    <div className="font-medium">TI: (11) 3000-1000</div>
                    <div className="font-medium">RH: (11) 3000-2000</div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center text-blue-100 text-sm mb-2">
                    <Mail className="h-4 w-4 mr-2" />
                    <span className="font-medium">E-mails</span>
                  </div>
                  <div className="space-y-1 text-white text-sm">
                    <div>ti@perdomo.com.br</div>
                    <div>rh@perdomo.com.br</div>
                  </div>
                </div>
                
                <div className="flex items-start text-blue-100 text-sm">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <div className="text-white">
                    <div className="font-medium">Matriz</div>
                    <div>Rua dos Doces, 123</div>
                    <div>São Paulo - SP</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div>
              <h4 className="font-bold text-xl mb-6 text-white flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Nossa Essência
              </h4>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-start">
                    <Target className="h-6 w-6 mr-3 mt-1 text-yellow-300 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white mb-2">Missão</div>
                      <div className="text-blue-100 text-sm leading-relaxed">
                        Criar experiências doces que conectam pessoas e despertam sorrisos genuínos
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-start">
                    <Heart className="h-6 w-6 mr-3 mt-1 text-pink-300 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white mb-2">Valores</div>
                      <div className="text-blue-100 text-sm leading-relaxed">
                        Família, qualidade artesanal, tradição e inovação constante
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-blue-100 text-sm flex items-center">
                <Heart className="h-4 w-4 mr-2 text-pink-300" />
                © 2024 Perdomo Doces. Feito com 💙 para nossa família interna.
              </div>
              <div className="flex items-center space-x-6 text-blue-100 text-sm">
                <a href="#" className="hover:text-white transition-colors">
                  Privacidade
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Termos de Uso
                </a>
                <div className="flex items-center bg-white/10 px-3 py-1 rounded-full">
                  <Users className="h-4 w-4 mr-1" />
                  <span>Portal v2.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
