import { Phone, Mail, Linkedin, Globe } from "lucide-react";

export const CVHeader = () => {
  return (
    <header className="bg-card">      
      <div className="mx-auto p-2">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8">
          <div className="flex-1 w-full">
            <div className="mb-2 relative">
              {/* Arrow on left border inline with name */}
              <div className="arrow-left-border" style={{ top: '50%', transform: 'translateY(-50%)' }}>
                <img 
                  src="/media/arrow-right.svg" 
                  alt="Arrow icon" 
                  className="w-full h-full"
                />
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-foreground">ARTUR BANCZYK</h1>
            </div>
            <p className="text-sm md:text-base font-medium text-primary mb-4">
              PRODUCT OWNER  •  ENGINEERING MANAGER  •  TEST MANAGER
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 text-xs md:text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+48 515 762 415</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>arturbanczyk@yahoo.co.uk</span>
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
                <a href="https://cvbanczyk.pl/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">cvbanczyk.pl</a>
              </div>
            </div>
          </div>
          
          <div className="w-24 h-24 md:w-32 md:h-32 bg-muted rounded-lg overflow-hidden flex-shrink-0">
            <img 
              src="/media/AB_profile_picture.jpeg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
