interface IShinyText {
  text: string;
}

export default function ShinyText({ text }: IShinyText) {
  return (
    <div
      className={`inline-block bg-clip-text animate-shine`}
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgb(27 26 26 / 80%) 50%, rgba(255, 255, 255, 0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
      }}
    >
      {text}
    </div>
  );
}
