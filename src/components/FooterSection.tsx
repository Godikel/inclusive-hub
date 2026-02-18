import biiLogo from "@/assets/bii-logo.png";
import betterplaceLogo from "@/assets/betterplace-logo.png";

const FooterSection = () => (
  <footer className="py-10 border-t border-border">
    <div className="container text-center">
      <div className="flex items-center justify-center gap-6 mb-4">
        <img src={betterplaceLogo} alt="BetterPlace" className="h-8" />
        <span className="text-muted-foreground text-xl font-light">×</span>
        <img src={biiLogo} alt="British International Investment" className="h-8" />
      </div>
      <p className="text-muted-foreground text-sm">
        A joint initiative by <strong className="text-foreground">BetterPlace</strong> & <strong className="text-foreground">British International Investment</strong>
      </p>
      <p className="text-muted-foreground text-xs mt-2">
        Contact: contact@betterplace.co.in · www.betterplace.co.in
      </p>
    </div>
  </footer>
);

export default FooterSection;
