import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-orange-200 w-screen h-screen overflow-hidden grid">
      <div className="place-content-center place-self-center place-items-center text-center">
        <Image 
          className="absolute left-[50%] top-10"
          src="public\Oxxo_Logo.svg" 
          alt="Logo de Oxxo" 
          width={300} 
          height={0} 
        />
        {children}
      </div>
    </div>
  );
}