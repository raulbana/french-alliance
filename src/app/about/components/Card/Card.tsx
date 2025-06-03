const Card: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="flex-1 rounded-2xl border-2 border-french-red bg-white p-6 shadow text-center flex flex-col items-center justify-center min-w-[220px]">
    <h3 className="text-lg font-bold mb-2 text-french-red">{title}</h3>
    <div className="text-base text-french-blue whitespace-pre-line">
      {children}
    </div>
  </div>
);
export default Card;
