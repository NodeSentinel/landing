interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PageContainer({ children, ...props }: PageContainerProps) {
  return (
    <div className="container px-2 md:px-4 py-8 mt-[72px]" {...props}>
      {children}
    </div>
  );
}
