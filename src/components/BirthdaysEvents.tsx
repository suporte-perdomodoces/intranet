
import '../style/styles.css';
import { Calendar, Gift, Cake, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const BirthdaysEvents = () => {
  const birthdays = [
    { name: 'Maria Silva', department: 'Produção', date: 'Hoje' },
    { name: 'João Victor', department: 'Vendas', date: 'Amanhã' },
    { name: 'Ana Costa', department: 'RH', date: '25/01' },
    { name: 'Pedro Paulo', department: 'TI', date: '30/01' },
    { name: 'Eduardo Kauan', department: 'TI', date: '22/11' },
    { name: 'Cassio', department: 'TI', date: '23/03' },
  ];

  const events = [
    {
      title: 'Reunião Geral de Resultados',
      date: '26/01',
      time: '14:00',
      type: 'Reunião',
      color: 'bg-blue-500'
    },
    {
      title: 'Workshop de Inovação',
      date: '28/01',
      time: '09:00',
      type: 'Treinamento',
      color: 'bg-purple-500'
    },
    {
      title: 'Confraternização Mensal',
      date: '30/01',
      time: '18:00',
      type: 'Social',
      color: 'bg-green-500'
    },
    {
      title: 'Confraternização Mensal',
      date: '30/01',
      time: '18:00',
      type: 'Social',
      color: 'bg-green-500'
    },
    {
      title: 'Confraternização Mensal',
      date: '30/01',
      time: '18:00',
      type: 'Social',
      color: 'bg-green-500'
    },
  ];

  return (
    <section className="py-8 px-6 bg-gradient-to-r from-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Birthdays */}
          <Card className="bg-gradient-to-br from-pink-500 to-pink-600 text-white border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-white/20 rounded-full p-3 mr-4">
                  <Cake className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Aniversariantes</h3>
                  <p className="text-pink-100">Celebre com a família Perdomo!</p>
                </div>
              </div>

              <div className="space-y-3 max-h-72 overflow-y-auto pr-2 scrollbar-thin-only">
                {birthdays.map((person, index) => (
                  <div 
                    key={index}
                    className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between hover:bg-white/30 transition-all cursor-pointer"
                  >
                    <div className="flex items-center">
                      <div className="bg-white/30 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                        <Gift className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold">{person.name}</div>
                        <div className="text-pink-100 text-sm">{person.department}</div>
                      </div>
                    </div>
                    <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      {person.date}
                    </Badge>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-center">
                <div className="text-pink-100 text-sm">
                  🎂 Que tal enviar uma mensagem especial?
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-white/20 rounded-full p-3 mr-4">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Próximos Eventos</h3>
                  <p className="text-blue-100">Não perca nada do que está por vir!</p>
                </div>
              </div>

              <div className="space-y-3 max-h-72 overflow-y-auto pr-2 scrollbar-thin-only">
                {events.map((event, index) => (
                  <div 
                    key={index}
                    className="bg-white/20 backdrop-blur-sm rounded-lg p-3 hover:bg-white/30 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-sm">{event.title}</h4>
                      <Badge className="bg-white/20 text-white border-white/30 text-xs">
                        {event.type}
                      </Badge>
                    </div>
                    <div className="flex items-center text-blue-100 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                      <Clock className="h-4 w-4 ml-4 mr-2" />
                      {event.time}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-center">
                <div className="text-blue-100 text-sm">
                  📅 Adicione eventos ao seu calendário pessoal
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BirthdaysEvents;
