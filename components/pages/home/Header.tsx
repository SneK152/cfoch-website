export function Header(props: { children: React.ReactNode }) {
  return (
    <h1 className="font-bold font-display text-center text-3xl">
      {props.children}
    </h1>
  );
}
