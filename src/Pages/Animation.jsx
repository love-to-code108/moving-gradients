


export const Animation = () => {



  return (
    <div 
    className=" relative flex "
    style={{ overflow: "hidden" ,   width: "100%" , height: "100vh" , objectFit: "cover" , backgroundColor : "black" , zIndex: 10}}>
      


        {/* THE NOISE AND THE OTHER RADIAL GRADIENTS */}
      <div style={{ zIndex: 100}} className=" flex justify-center items-center">
      <svg className=" w-[100%] h-[200%]"   style={{ opacity:0.2 , zIndex:120}} viewBox="0 0 450 250" >
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






      {/* THE CENTER TEXT */}
      <div style={{ zIndex:120}} className=" absolute text-white">
          <h1>Hello World</h1>
      </div>
    </div>
  );
};
