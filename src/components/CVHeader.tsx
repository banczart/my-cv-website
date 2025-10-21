import { Phone, Mail, Linkedin, Globe } from "lucide-react";

export const CVHeader = () => {
  return (
    <header className="bg-card">
      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex items-start justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-primary flex items-center justify-center">
                <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[16px] border-b-white transform rotate-90" />
              </div>
              <h1 className="text-4xl font-bold text-foreground">ARTUR BANCZYK</h1>
            </div>
            <p className="text-lg font-medium text-primary mb-4">
              PRODUCT OWNER  •  ENGINEERING MANAGER  •  TEST MANAGER
            </p>
            
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+48 515 762 415</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>arturbanczyk@yhaoo.co.uk</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Linkedin className="w-4 h-4" />
                <a href="http://www.linkedin.com/in/artur-banczyk" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">artur-banczyk</a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Linkedin className="w-4 h-4" />
                <a href="https://www.linkedin.com/in/artur-banczyk/details/recommendations/?detailScreenTabIndex=0" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Recommendations</a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe className="w-4 h-4" />
                <a href="https://xyz.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">xyz.com</a>
              </div>
            </div>
          </div>
          
          <div className="w-32 h-32 bg-muted rounded-lg overflow-hidden flex-shrink-0">
            <img 
              src="https://media.licdn.com/dms/image/v2/C4E03AQF623MqSx3jMA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516289442840?e=1762387200&v=beta&t=IuGvxZOGpl8rO0Ch6x8l9CIS0GP3T9_x3gOrHJl5Cj8" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
