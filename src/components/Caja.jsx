export default function Caja({
  children,
  color = "",
  letra = "",
  columnas = "grid-cols-2",
}) {
  return (
    <div
      className={`grid ${columnas} gap-2 ${color} p-1 text-center rounded-md ${letra}`}
    >
      {children}
    </div>
  );
}
