
import React from 'react';
import { Lightbulb, Users, Target, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Programa Bem-Estar',
      description: 'Iniciativas focadas na qualidade de vida e saúde mental dos colaboradores',
      progress: 75,
      status: 'Em andamento',
      team: ['RH', 'Liderança'],
      deadline: 'Março 2024',
      category: 'Cultura',
      icon: Users,
      color: 'bg-green-500'
    },
    {
      id: 2,
      title: 'Modernização da Cozinha',
      description: 'Atualização de equipamentos e melhoria dos processos produtivos',
      progress: 45,
      status: 'Em andamento',
      team: ['Operação', 'TI'],
      deadline: 'Abril 2024',
      category: 'Infraestrutura',
      icon: Target,
      color: 'bg-blue-500'
    },
    {
      id: 3,
      title: 'Academia Perdomo',
      description: 'Plataforma de treinamentos online para desenvolvimento contínuo',
      progress: 90,
      status: 'Finalização',
      team: ['RH', 'TI'],
      deadline: 'Janeiro 2024',
      category: 'Educação',
      icon: Lightbulb,
      color: 'bg-purple-500'
    },
    {
      id: 4,
      title: 'Sustentabilidade Verde',
      description: 'Implementação de práticas sustentáveis na produção e embalagens',
      progress: 30,
      status: 'Iniciando',
      team: ['Produção', 'Qualidade'],
      deadline: 'Junho 2024',
      category: 'Meio Ambiente',
      icon: Target,
      color: 'bg-emerald-500'
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      'Em andamento': 'bg-blue-100 text-blue-800',
      'Finalização': 'bg-green-100 text-green-800',
      'Iniciando': 'bg-yellow-100 text-yellow-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Lightbulb className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Projetos em Andamento
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transparência total! Acompanhe as iniciativas que estão transformando 
            nossa empresa e criando um futuro ainda melhor para todos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`${project.color} rounded-lg p-3`}>
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge className={getStatusColor(project.status) + ' mt-1'}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  {project.description}
                </p>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Progresso</span>
                    <span className="font-medium text-gray-900">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <Users className="h-4 w-4 mr-1" />
                      Equipes
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.team.map((team, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {team}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <Clock className="h-4 w-4 mr-1" />
                      Prazo
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {project.deadline}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-primary text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-4">
              💡 Tem uma ideia para melhorar a Perdomo?
            </h3>
            <p className="text-blue-100 mb-6">
              Sua opinião é fundamental! Contribua com sugestões e participe 
              ativamente da evolução da nossa empresa.
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-semibold"
            >
              Enviar Sugestão
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
