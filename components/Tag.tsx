export function Tag({ text }: { text: string }) {
  return (
    <span className="text-xs font-mono bg-secondary text-primary border border-primary/20 px-2 py-0.5 rounded">
      {text}
    </span>
  );
}
