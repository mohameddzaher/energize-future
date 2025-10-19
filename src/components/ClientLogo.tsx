interface ClientLogoProps {
  src: string;
}

export default function ClientLogo({ src }: ClientLogoProps) {
  return (
    <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
      <img src={src} alt="Client Logo" className="max-h-16 object-contain" />
    </div>
  );
}