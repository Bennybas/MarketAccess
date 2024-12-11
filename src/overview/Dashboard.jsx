import React, { useState } from 'react';
import { 
  Home, 
  TrendingUp, 
  MapPin, 
  Users, 
  Search, 
  User 
} from 'lucide-react';
import HomeContent from '../Home/Home';

const Dashboard = () => {
  const [activePage, setActivePage] = useState('home');

  const menuItems = [
    { name: 'Overview', icon: Home, page: 'home' },
    { name: 'Competitive Analysis', icon: Users, page: 'competitive' },
    { name: 'Payer Analysis', icon: TrendingUp, page: 'payer' },
  ];

  const renderPage = () => {
    switch(activePage) {

      case 'home':
          return <div >
             <HomeContent />
          </div>

    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-y-hidden">
      {/* Top Navigation Bar */}
      <header className="bg-[#004567] text-white flex flex-col rounded-sm">
        {/* Logo Section */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-[#8295ae]">
          <img 
            src="/teams_bg_d7_1-removebg.png" 
            alt="Logo" 
            className="h-12 w-auto"
          />
          <div className="text-lg font-medium">
              Market Access Intelligence - Prostate Cancer
            </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
          
            <button 
              className="p-2 rounded-full hover:bg-[#8295ae]/50 transition-colors"
              aria-label="Search"
            >
              <Search className="text-white hover:text-[#c98b27]" />
            </button>

            <button 
              className="p-2 rounded-full hover:bg-[#8295ae]/50 transition-colors"
              aria-label="User Profile"
            >
              <User className="text-white hover:text-[#c98b27]" />
            </button>

            
          </div>
        </div>

        {/* Navigation Section */}
        <div className="flex items-center px-8 py-2 justify-center">
          {/* Menu Items */}
          <nav className="flex space-x-4">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActivePage(item.page)}
                className={`
                  flex items-center space-x-2 
                  px-3 py-2 rounded-md 
                  transition-colors duration-300
                  ${activePage === item.page 
                    ? 'bg-[#8295ae] text-white' 
                    : 'hover:bg-[#8295ae]/50 text-gray-200'
                  }
                `}
              >
                <item.icon size={18} className="text-[#c98b27]" />
                <span className="text-sm font-medium">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main 
        className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 px-2 pt-2 overflow-auto"
      >
        {renderPage()}
      </main>
    </div>
  );
};

export default Dashboard;