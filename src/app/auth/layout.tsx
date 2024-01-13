import Image from 'next/image';

export default function Layout({ children }: WithChildren) {
  return (
    <div className="w-full relative">
      <img
        src="/auth-background-image.png"
        alt="bg-image"
        className="absolute w-full min-h-svh -z-10 object-cover top-0 left-0"
      />
      <div className="w-full min-h-fit z-20">{children}</div>
    </div>
  );
}
