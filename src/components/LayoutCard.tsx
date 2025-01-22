import * as motion from 'motion/react-client';

interface ILayoutCard {
  children: React.ReactNode;
  className?: string;
}

export default function LayoutCard({ children, className }: ILayoutCard) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`relative overflow-hidden rounded-[30px] border border-dark bg-base p-8 ${className ?? ''}`}
    >
      <span className='pointer-events-none absolute inset-0 z-10 rounded-[30px] bg-gradient-to-br from-white/30 to-white/5 opacity-25'></span>
      <span className='from-white/12 to-white/1 absolute inset-0 -z-10 -m-[1px] rounded-[30px] bg-gradient-to-br'></span>

      <div className='relative z-20 flex h-full flex-col justify-between gap-8'>{children}</div>
    </motion.div>
  );
}
