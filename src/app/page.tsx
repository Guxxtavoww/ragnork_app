import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <section className="relative w-full flex justify-center items-center h-auto min-h-svh">
      <video
        autoPlay
        muted
        src="/background-video.mp4"
        loop={true}
        className="w-full object-cover max-h-screen absolute top-0 left-0"
      />
      <div className="z-10 flex flex-col gap-4 items-center">
        <h2 className="text-5xl font-bold">Bem vindo ao Ragnrok!</h2>
        <p className="max-w-4xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          reiciendis at voluptates nemo molestiae aperiam dignissimos! Ratione
          omnis neque ea, minima veritatis quo nisi quibusdam fuga asperiores
          officiis nemo sint?
        </p>
      </div>
    </section>
  );
}
