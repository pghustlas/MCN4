import React from "react";
import svgPaths from "./svg-8k193ojncn";

// Desktop Components (Original Figma Export)
function Group() {
  return (
    <div className="absolute bottom-[51.82%] left-0 right-0 top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 461 47">
        <g id="Group">
          <path d={svgPaths.pb81d700} fill="var(--fill-0, #B8292D)" id="Vector" />
          <path d={svgPaths.p28718100} fill="var(--fill-0, #B8292D)" id="Vector_2" />
          <path d={svgPaths.p17e9d000} fill="var(--fill-0, #B8292D)" id="Vector_3" />
          <path d={svgPaths.p333d9800} fill="var(--fill-0, #B8292D)" id="Vector_4" />
          <path d={svgPaths.p1c5a8240} fill="var(--fill-0, #B8292D)" id="Vector_5" />
          <path d={svgPaths.p1261dc00} fill="var(--fill-0, #B8292D)" id="Vector_6" />
          <path d={svgPaths.p11c1ae00} fill="var(--fill-0, #B8292D)" id="Vector_7" />
          <path d={svgPaths.p279b1100} fill="var(--fill-0, #B8292D)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-0 left-[32.07%] right-[32.08%] top-[54.31%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 165 44">
        <g id="Group">
          <path d={svgPaths.p155c3a00} fill="var(--fill-0, #B8292D)" id="Vector" />
          <path d={svgPaths.p1ed7e0c0} fill="var(--fill-0, #B8292D)" id="Vector_2" />
          <path d={svgPaths.p3e85bd00} fill="var(--fill-0, #B8292D)" id="Vector_3" />
          <path d={svgPaths.p310eba80} fill="var(--fill-0, #B8292D)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

export default function LocoLogo() {
  return (
    <div className="relative w-full h-full" data-name="_레이어_1">
      {/* Desktop View - Matches Original Figma Exact Layout */}
      <div className="hidden md:block absolute inset-0">
        <Group />
        <Group1 />
      </div>
      
      {/* Mobile View - Stacked Layout */}
      <div className="md:hidden w-full h-full flex flex-col items-center justify-center gap-3">
         {/* LOCO */}
         <svg className="w-[90%] h-auto" viewBox="0 0 226 47" fill="none">
            <path d={svgPaths.pb81d700} fill="var(--fill-0, #B8292D)" />
            <path d={svgPaths.p28718100} fill="var(--fill-0, #B8292D)" />
            <path d={svgPaths.p17e9d000} fill="var(--fill-0, #B8292D)" />
            <path d={svgPaths.p333d9800} fill="var(--fill-0, #B8292D)" />
         </svg>

         {/* LABS */}
         <svg className="w-[94%] h-auto" viewBox="0 0 235 47" fill="none">
            <g transform="translate(-226 0)">
              <path d={svgPaths.p1c5a8240} fill="var(--fill-0, #B8292D)" />
              <path d={svgPaths.p1261dc00} fill="var(--fill-0, #B8292D)" />
              <path d={svgPaths.p11c1ae00} fill="var(--fill-0, #B8292D)" />
              <path d={svgPaths.p279b1100} fill="var(--fill-0, #B8292D)" />
            </g>
         </svg>

         {/* ENT. */}
         <svg className="w-[66%] h-auto" viewBox="0 0 165 44" fill="none">
            <path d={svgPaths.p155c3a00} fill="var(--fill-0, #B8292D)" />
            <path d={svgPaths.p1ed7e0c0} fill="var(--fill-0, #B8292D)" />
            <path d={svgPaths.p3e85bd00} fill="var(--fill-0, #B8292D)" />
            <path d={svgPaths.p310eba80} fill="var(--fill-0, #B8292D)" />
         </svg>
      </div>
    </div>
  );
}
