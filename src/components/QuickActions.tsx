
import React from 'react';
import { 
  BookOpen, 
  Gift, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  Calendar,
  FileText,
  Coffee
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const QuickActions = () => {
  const actions = [
    {
      icon: BookOpen,
      title: 'Treinamentos',
      description: 'Cursos e capacitações',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      icon: Gift,
      title: 'Benefícios',
      description: 'Vantagens e descontos',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      icon: MessageSquare,
      title: 'Comunicados',
      description: 'Notícias e atualizações',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Projetos',
      description: 'Iniciativas em andamento',
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600'
    },
    {
      icon: Users,
      title: 'Equipe',
      description: 'Diretório e contatos',
      color: 'bg-pink-500',
      hoverColor: 'hover:bg-pink-600'
    },
    {
      icon: Calendar,
      title: 'Eventos',
      description: 'Agenda e comemorações',
      color: 'bg-indigo-500',
      hoverColor: 'hover:bg-indigo-600'
    },
    {
      icon: FileText,
      title: 'Documentos',
      description: 'Políticas e formulários',
      color: 'bg-teal-500',
      hoverColor: 'hover:bg-teal-600'
    },
    {
      icon: Coffee,
      title: 'Suporte',
      description: 'TI e RH',
      color: 'bg-amber-500',
      hoverColor: 'hover:bg-amber-600'
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Acesso Rápido
          </h2>
          <p className="text-gray-600 text-lg">
            Tudo que você precisa, na palma da sua mão
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {actions.map((action, index) => (
            <Card 
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 bg-white"
            >
              <CardContent className="p-6 text-center">
                <div className={`${action.color} ${action.hoverColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 group-hover:scale-110 transform`}>
                  <action.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {action.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {action.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
