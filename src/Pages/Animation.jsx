


export const Animation = () => {



  return (
    <div 
    className=" relative"
    style={{ overflow: "hidden" ,   width: "100%" , height: "100vh" , objectFit: "cover" , backgroundColor : "black"}}>
      


        {/* THE NOISE AND THE OTHER RADIAL GRADIENTS */}
      <div className=" flex justify-center items-center">
      <svg style={{ opacity:0.2 , }} viewBox="0 0 450 250" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="2.65"
            numOctaves="1"
            stitchTiles="stitch"
          />
        </filter>

        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>


            {/* GRADIANT BALL 1 */}
        <div className=" gradiantBall1"></div>
            {/* GRADIANT BALL 2 */}
        <div className=" gradiantBall2"></div>
            {/* GRADIANT BALL 3 */}
        <div className=" gradiantBall3"></div>
            {/* GRADIANT BALL 4 */}
        <div className=" gradiantBall4"></div>
            {/* GRADIANT BALL 5 */}
        <div className=" gradiantBall5"></div>
            {/* GRADIANT BALL 6 */}
        <div className=" gradiantBall6"></div>
            {/* GRADIANT BALL 7 */}
        <div className=" gradiantBall7"></div>
        {/* GRADIANT BALL 8 */}
        <div className=" gradiantBall8"></div>

      </div>
    </div>
  );
};
