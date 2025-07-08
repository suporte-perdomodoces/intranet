
import React from 'react';
import { Bell, User, Settings, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/80 px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-br from-primary to-primary/80 text-white px-5 py-2.5 rounded-xl font-bold text-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            Perdomo
          </div>
          <div className="hidden md:block">
            <span className="text-gray-700 font-semibold text-lg">Portal Interno</span>
            <div className="text-xs text-gray-500 font-medium">Família de Doces Artesanais</div>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl mx-8 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              placeholder="Busque por treinamentos, benefícios, pessoas..." 
              className="pl-12 pr-4 py-3 bg-gray-50/80 border-0 focus:bg-white focus:ring-2 focus:ring-primary/20 rounded-xl text-gray-700 placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="relative hover:bg-primary/10 rounded-xl">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium shadow-md animate-pulse">
              3
            </span>
          </Button>
          
          <Button variant="ghost" size="icon" className="hover:bg-primary/10 rounded-xl">
            <Settings className="h-5 w-5 text-gray-600" />
          </Button>
          
          <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-200">
            <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-full h-10 w-10 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <User className="h-5 w-5" />
            </div>
            <div className="text-sm hidden lg:block">
              <div className="font-semibold text-gray-900">João Silva</div>
              <div className="text-gray-500 font-medium">Operação</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
