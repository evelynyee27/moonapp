"use client";

// small circle stars
const Sky = ({ numberOfStars }: { numberOfStars: number }) => {
  const smallStars = Array.from({ length: numberOfStars }).map((_, index) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    return (
      <div
        key={index}
        className="size-px bg-white rounded-full absolute top-1/2 left-1/2"
        style={{
          top: `${top}%`,
          left: `${left}%`
        }}
      />
    );
  });

  // five pointed star, top and left can be entered to position
  const bigStar = ( 
    width: number,
    top: number, 
    left: number
  ) => {
    return (
      <img
        className="absolute animate-spin-and-slide drop-shadow-lg-black border-b-black"
        src="/star.png"
        style={{
          width: `${width}%`,
          top: `${top}%`,
          left: `${left}%`
        }}
      />
    );
  }

  return (
    <div className="absolute h-full w-full">
      {smallStars}
      {bigStar(2, 20, 10)}
      {bigStar(1, 10, 25)}
      {bigStar(1, 90, 5)}
      {bigStar(1, 70, 30)}
      {bigStar(1, 40, 50)}
      {bigStar(2, 60, 70)}
      {bigStar(1, 80, 85)}
      {bigStar(2, 10, 90)}
    </div>
  );

};

export default Sky;
