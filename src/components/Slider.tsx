import React from "react";

function Slider() {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%) h-[100px]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
          <img
            src="/logos/chainlink.svg"
            alt="Chainlink"
            className="h-[100px]"
          />
        </li>
        <li>
          <img src="/logos/aztec.svg" alt="Chainlink" className="h-[100px]" />
        </li>
        <li>
          <img
            src="/logos/avalanche.svg"
            alt="Chainlink"
            className="h-[100px]"
          />
        </li>
        <li>
          <img src="/logos/dynamic.svg" alt="Chainlink" className="h-[100px]" />
        </li>
        <li>
          <img src="/logos/sindri.svg" alt="Chainlink" className="h-[100px]" />
        </li>
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll h-[100px]"
        aria-hidden="true"
      >
        <li>
          <img
            src="/logos/chainlink.svg"
            alt="Chainlink"
            className="h-[100px]"
          />
        </li>
        <li>
          <img src="/logos/aztec.svg" alt="Chainlink" className="h-[100px]" />
        </li>
        <li>
          <img
            src="/logos/avalanche.svg"
            alt="Chainlink"
            className="h-[100px]"
          />
        </li>
        <li>
          <img src="/logos/dynamic.svg" alt="Chainlink" className="h-[100px]" />
        </li>
        <li>
          <img src="/logos/sindri.svg" alt="Chainlink" className="h-[100px]" />
        </li>
      </ul>
    </div>
  );
}

export default Slider;