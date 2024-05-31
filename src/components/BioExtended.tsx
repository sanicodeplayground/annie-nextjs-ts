const BioExtended = () => {
  return (
    <section>
      <article className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md leading-loose [&>p]:mt-3 [&>ul]:mt-3">
        <h1 className="mb-4 text-4xl font-extrabold">About me</h1>
        <img
          src="./images/Annie.webp"
          alt="Annie"
          className="border-8 border-white bg-slate-300 size-full"
        />
        <p>
          Hello! My name is Annie, and I am an illustrator currently based in
          Bristol.
        </p>{" "}
        <p>
          You can usually find me scribbling away outdoors in frequented spots.
          I also love getting involved with our local flora and fauna directly,
          through both my work as an ornithologist and my time spent ringing
          birds.
        </p>
        <p>
          I normally use mixed media - paints, pens, pastels, collage and design
          software to create textural illustrations and murals in a unique
          style. I take time to understand the requirements of a brief, and I
          work with a balance of care and speed to project completion. I pride
          myself in my professional process - confidently getting things done,
          and turning my client’s ideas into reality.
        </p>
        <p>
          Following the receipt of my BA degree in Illustration from The
          University of West England, I have been working on getting the
          narratives of both prevailing and endangered species into the world. I
          do so through my art, creating stories and worlds through my
          illustrations which I hope will inspire my readers to learn more about
          the world around them.
        </p>
        <p>
          This website is a showcase of my work, both previous and current,
          including my illustrations and children&apos;s book designs. My focus
          is largely around natural history illustration, from both writing and
          designing fictional and non-fictional works. I love working with any
          analogue medium but I&apos; m particularly drawn to watercolour,
          graphite and ink work.
        </p>
        <h2 className="mt-10 mb-4 text-2xl font-extrabold text-gray-400">
          Awards
        </h2>
        <ul className="text-gray-400 list-disc list-inside">
          <li>Winner of the Batsford Prize people&apos;s choice award 2022</li>
          <li>Highly commended by Pan Macmillan Prize 2022</li>
          <li>
            Runner up in the Batsford Prize 2022 Children&apos;s Illustration.
          </li>
        </ul>
        <hr className="h-px my-8 bg-slate-400 border-0"></hr>
        <p>
          I’m always looking for new projects, whether it’s visual storytelling,
          field work or commissioned artworks. For anything book related please
          contact my agent at{" "}
          <a
            href="https://www.springliterary.com/"
            target="_blank"
            className="underline hover:text-custom-hover"
          >
            {" "}
            Spring Literary.
          </a>{" "}
        </p>
        <p>Anything else please don’t hesitate to get in touch!</p>
        <div className="flex flex-col items-center mt-10 md:flex-row">
          <img
            className="mb-10 border-8 border-white md:w-3/4 md:mr-5"
            src="./images/heroAnnie.webp"
            alt="Annie"
          />
          <a
            className="underline md:w-1/4 hover:text-custom-hover"
            href="https://www.instagram.com/anniebookerart/"
            target="_blank"
          >
            📸 @anniebookerart
          </a>
        </div>
      </article>
    </section>
  );
};

export default BioExtended;
