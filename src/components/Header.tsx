
import React from 'react';
import { Bell, User, Settings, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-xl">
            Perdomo
          </div>
          <span className="text-gray-600 font-medium">Portal Interno</span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Buscar no portal..." 
              className="pl-10 bg-gray-50 border-0 focus:bg-white"
            />
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200">
            <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
            <div className="text-sm">
              <div className="font-medium">João Silva</div>
              <div className="text-gray-500">Operação</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
