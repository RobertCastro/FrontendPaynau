interface CardProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export function Card({ children, className = "" }: CardProps) {
    return (
      <div className={`bg-white rounded-lg border shadow-sm ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children, className = "" }: CardProps) {
    return (
      <div className={`p-6 ${className}`}>
        {children}
      </div>
    );
  }