interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PageContainer({ children, ...props }: PageContainerProps) {
  return (
    <div className="container py-8 mt-[72px]" {...props}>
      {children}
    </div>
  );
}
