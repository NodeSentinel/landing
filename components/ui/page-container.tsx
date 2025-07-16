interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PageContainer({ children, ...props }: PageContainerProps) {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30"
      {...props}
    >
      {children}
    </div>
  );
}
