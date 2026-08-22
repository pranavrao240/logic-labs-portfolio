// "use client";
// import React, { useRef, useMemo, useState, Suspense } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { OrbitControls, Html, useTexture } from "@react-three/drei";
// import * as THREE from "three";
// import { cn } from "@/lib/utils";

// export interface GlobeMarker {
//   lat: number;
//   lng: number;
//   src: string;
//   label?: string;
// }

// export interface Globe3DConfig {
//   radius?: number;
//   textureUrl?: string;
//   bumpMapUrl?: string;
//   bumpScale?: number;
//   autoRotateSpeed?: number;
//   enableZoom?: boolean;
//   enablePan?: boolean;
//   ambientIntensity?: number;
//   pointLightIntensity?: number;
//   // kept for compat but unused
//   showAtmosphere?: boolean;
//   atmosphereColor?: string;
//   atmosphereIntensity?: number;
//   atmosphereBlur?: number;
// }

// interface Globe3DProps {
//   markers?: GlobeMarker[];
//   config?: Globe3DConfig;
//   className?: string;
//   onMarkerClick?: (marker: GlobeMarker) => void;
// }

// const DEFAULT_EARTH_TEXTURE =
//   "https://unpkg.com/three-globe@2.31.0/example/img/earth-blue-marble.jpg";
// const DEFAULT_BUMP_TEXTURE =
//   "https://unpkg.com/three-globe@2.31.0/example/img/earth-topology.png";

// function latLngToVector3(lat: number, lng: number, radius: number) {
//   const phi = (90 - lat) * (Math.PI / 180);
//   const theta = (lng + 180) * (Math.PI / 180);
//   return new THREE.Vector3(
//     -(radius * Math.sin(phi) * Math.cos(theta)),
//     radius * Math.cos(phi),
//     radius * Math.sin(phi) * Math.sin(theta),
//   );
// }

// function Marker({
//   marker,
//   radius,
//   onClick,
// }: {
//   marker: GlobeMarker;
//   radius: number;
//   onClick?: (m: GlobeMarker) => void;
// }) {
//   const [visible, setVisible] = useState(false);
//   const groupRef = useRef<THREE.Group>(null);
//   const { camera } = useThree();

//   const surfacePos = useMemo(
//     () => latLngToVector3(marker.lat, marker.lng, radius * 1.002),
//     [marker.lat, marker.lng, radius],
//   );
//   const tipPos = useMemo(
//     () => latLngToVector3(marker.lat, marker.lng, radius * 1.52),
//     [marker.lat, marker.lng, radius],
//   );

//   const { lineCenter, lineQuat, lineHeight } = useMemo(() => {
//     const center = surfacePos.clone().lerp(tipPos, 0.5);
//     const dir = tipPos.clone().sub(surfacePos).normalize();
//     const q = new THREE.Quaternion().setFromUnitVectors(
//       new THREE.Vector3(0, 1, 0),
//       dir,
//     );
//     return {
//       lineCenter: center,
//       lineQuat: q,
//       lineHeight: tipPos.distanceTo(surfacePos),
//     };
//   }, [surfacePos, tipPos]);

//   // Use the surface point in world space to check facing — more accurate than tipPos
//   const _surfaceLocal = useMemo(() => surfacePos.clone(), [surfacePos]);

//   useFrame(() => {
//     if (!groupRef.current) return;
//     // Transform local surface point to world space (includes globe rotation)
//     const worldPos = _surfaceLocal
//       .clone()
//       .applyMatrix4(groupRef.current.matrixWorld);
//     const markerDir = worldPos.normalize();
//     const camDir = camera.position.clone().normalize();
//     // Threshold 0.25 = hide when within ~75° of the limb — tighter = cleaner
//     setVisible(markerDir.dot(camDir) > 0.25);
//   });

//   return (
//     <group ref={groupRef}>
//       {/* 3D line + dot — Three.js visible works here */}
//       <group visible={visible}>
//         <mesh position={lineCenter} quaternion={lineQuat}>
//           <cylinderGeometry args={[0.007, 0.007, lineHeight, 8]} />
//           <meshBasicMaterial color="#ffffff" transparent opacity={0.85} />
//         </mesh>
//         <mesh position={surfacePos}>
//           <sphereGeometry args={[0.02, 10, 10]} />
//           <meshBasicMaterial color="#ffffff" />
//         </mesh>
//       </group>

//       {/* HTML pill — drei Html ignores group visible, so control via display */}
//       <group position={tipPos}>
//         <Html
//           center
//           zIndexRange={[100, 0]}
//           style={{ pointerEvents: "none", userSelect: "none" }}
//         >
//           <div
//             onClick={() => onClick?.(marker)}
//             style={{
//               display: visible ? "flex" : "none",
//               alignItems: "center",
//               gap: "5px",
//               background: "rgba(8,14,36,0.96)",
//               border: "1px solid rgba(255,255,255,0.18)",
//               borderRadius: "20px",
//               padding: "3px 9px 3px 5px",
//               whiteSpace: "nowrap",
//               boxShadow: "0 4px 20px rgba(0,0,0,0.7)",
//               fontSize: "11px",
//               lineHeight: "1",
//               pointerEvents: "auto",
//               cursor: "pointer",
//             }}
//           >
//             <img
//               src={marker.src}
//               alt={marker.label ?? ""}
//               style={{
//                 width: "18px",
//                 height: "13px",
//                 objectFit: "cover",
//                 borderRadius: "2px",
//                 flexShrink: 0,
//               }}
//               draggable={false}
//             />
//             {marker.label && (
//               <span
//                 style={{
//                   color: "#fff",
//                   fontWeight: 600,
//                   letterSpacing: "0.03em",
//                   fontSize: "11px",
//                 }}
//               >
//                 {marker.label}
//               </span>
//             )}
//           </div>
//         </Html>
//       </group>
//     </group>
//   );
// }

// function GlobeMesh({
//   config,
//   markers,
//   onMarkerClick,
// }: {
//   config: Required<
//     Omit<
//       Globe3DConfig,
//       | "showAtmosphere"
//       | "atmosphereColor"
//       | "atmosphereIntensity"
//       | "atmosphereBlur"
//     >
//   >;
//   markers: GlobeMarker[];
//   onMarkerClick?: (m: GlobeMarker) => void;
// }) {
//   const [earthTex, bumpTex] = useTexture([
//     config.textureUrl,
//     config.bumpMapUrl,
//   ]);
//   useMemo(() => {
//     if (earthTex) earthTex.colorSpace = THREE.SRGBColorSpace;
//   }, [earthTex]);
//   const geo = useMemo(
//     () => new THREE.SphereGeometry(config.radius, 64, 64),
//     [config.radius],
//   );

//   return (
//     <group>
//       <mesh geometry={geo}>
//         <meshStandardMaterial
//           map={earthTex}
//           bumpMap={bumpTex}
//           bumpScale={config.bumpScale * 0.05}
//           roughness={0.75}
//           metalness={0}
//         />
//       </mesh>
//       {markers.map((m, i) => (
//         <Marker
//           key={i}
//           marker={m}
//           radius={config.radius}
//           onClick={onMarkerClick}
//         />
//       ))}
//     </group>
//   );
// }

// function Scene({
//   markers,
//   config,
//   onMarkerClick,
//   onLoaded,
// }: {
//   markers: GlobeMarker[];
//   config: any;
//   onMarkerClick?: (m: GlobeMarker) => void;
//   onLoaded?: () => void;
// }) {
//   const { camera } = useThree();

//   React.useEffect(() => {
//     camera.position.set(0, 0, config.radius * 3.0);
//     camera.lookAt(0, 0, 0);
//     // Scene mounted = textures resolved (we're inside Suspense), signal parent
//     onLoaded?.();
//   }, [camera, config.radius, onLoaded]);

//   return (
//     <>
//       <ambientLight intensity={config.ambientIntensity} />
//       <directionalLight
//         position={[config.radius * 5, config.radius * 2, config.radius * 5]}
//         intensity={config.pointLightIntensity}
//         color="#ffffff"
//       />
//       <directionalLight
//         position={[-config.radius * 3, config.radius, -config.radius * 2]}
//         intensity={config.pointLightIntensity * 0.25}
//         color="#aaccff"
//       />
//       <GlobeMesh
//         config={config}
//         markers={markers}
//         onMarkerClick={onMarkerClick}
//       />
//       <OrbitControls
//         makeDefault
//         enablePan={false}
//         enableZoom={false}
//         minDistance={config.radius * 2.4}
//         maxDistance={config.radius * 5}
//         rotateSpeed={0.45}
//         autoRotate
//         autoRotateSpeed={config.autoRotateSpeed}
//         enableDamping
//         dampingFactor={0.08}
//       />
//     </>
//   );
// }

// const defaultConfig = {
//   radius: 2,
//   textureUrl: DEFAULT_EARTH_TEXTURE,
//   bumpMapUrl: DEFAULT_BUMP_TEXTURE,
//   bumpScale: 1,
//   autoRotateSpeed: 3.5, // default fast; override from LegacySection
//   ambientIntensity: 0.7,
//   pointLightIntensity: 1.4,
// };
// export function Globe3D({
//   markers = [],
//   config = {},
//   className,
//   onMarkerClick,
// }: Globe3DProps) {
//   const merged = useMemo(() => ({ ...defaultConfig, ...config }), [config]);
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <div className={cn("relative w-full h-full", className)}>
//       {/* SVG skeleton — shown until Three.js scene loads, pure DOM, never touches Canvas */}
//       {!loaded && (
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             zIndex: 1,
//             pointerEvents: "none",
//           }}
//         >
//           <svg
//             viewBox="0 0 200 200"
//             width="260"
//             height="260"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <defs>
//               <radialGradient id="globeGrad" cx="35%" cy="35%">
//                 <stop offset="0%" stopColor="#1e4a7a" />
//                 <stop offset="100%" stopColor="#0d1f3c" />
//               </radialGradient>
//               <radialGradient id="shimmer" cx="35%" cy="35%">
//                 <stop offset="0%" stopColor="#38bdf8" />
//                 <stop offset="100%" stopColor="transparent" />
//               </radialGradient>
//               <clipPath id="globeClip">
//                 <circle cx="100" cy="100" r="90" />
//               </clipPath>
//             </defs>

//             {/* Base sphere */}
//             <circle cx="100" cy="100" r="90" fill="url(#globeGrad)" />

//             {/* Grid lines clipped to sphere */}
//             <g
//               clipPath="url(#globeClip)"
//               fill="none"
//               stroke="#38bdf8"
//               strokeWidth="0.6"
//               opacity="0.3"
//             >
//               {/* Latitude lines */}
//               {[-60, -30, 0, 30, 60].map((lat, i) => {
//                 const y = 100 - (lat / 90) * 90;
//                 const hw = Math.sqrt(
//                   Math.max(0, 90 * 90 - (y - 100) * (y - 100)),
//                 );
//                 return (
//                   <ellipse
//                     key={`lat-${i}`}
//                     cx="100"
//                     cy={y}
//                     rx={hw}
//                     ry={hw * 0.22}
//                   />
//                 );
//               })}
//               {/* Longitude lines */}
//               {[0, 30, 60, 90, 120, 150].map((lng, i) => {
//                 const rx = Math.abs(Math.sin((lng * Math.PI) / 180)) * 90 || 2;
//                 return (
//                   <ellipse key={`lng-${i}`} cx="100" cy="100" rx={rx} ry="90" />
//                 );
//               })}
//             </g>

//             {/* Shimmer pulse */}
//             <circle
//               cx="100"
//               cy="100"
//               r="90"
//               fill="url(#shimmer)"
//               opacity="0.12"
//             >
//               <animate
//                 attributeName="opacity"
//                 values="0.08;0.2;0.08"
//                 dur="2.2s"
//                 repeatCount="indefinite"
//               />
//             </circle>

//             {/* Specular highlight */}
//             <ellipse
//               cx="72"
//               cy="68"
//               rx="24"
//               ry="15"
//               fill="white"
//               opacity="0.07"
//               transform="rotate(-35 72 68)"
//             />

//             {/* Outer ring */}
//             <circle
//               cx="100"
//               cy="100"
//               r="90"
//               fill="none"
//               stroke="#38bdf8"
//               strokeWidth="1"
//               opacity="0.4"
//             />
//           </svg>
//         </div>
//       )}

//       <Canvas
//         gl={{
//           antialias: true,
//           alpha: true,
//           powerPreference: "high-performance",
//         }}
//         dpr={[1, 1.5]}
//         camera={{ fov: 45, near: 0.1, far: 1000 }}
//         style={{ background: "transparent", position: "relative", zIndex: 2 }}
//       >
//         <Suspense fallback={null}>
//           <Scene
//             markers={markers}
//             config={merged}
//             onMarkerClick={onMarkerClick}
//             onLoaded={() => setLoaded(true)}
//           />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }
"use client";
import React, { useRef, useMemo, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { cn } from "@/lib/utils";

export interface GlobeMarker {
  lat: number;
  lng: number;
  src: string;
  label?: string;
}

export interface Globe3DConfig {
  radius?: number;
  textureUrl?: string;
  bumpMapUrl?: string;
  bumpScale?: number;
  autoRotateSpeed?: number;
  enableZoom?: boolean;
  enablePan?: boolean;
  ambientIntensity?: number;
  pointLightIntensity?: number;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereIntensity?: number;
  atmosphereBlur?: number;
}

interface Globe3DProps {
  markers?: GlobeMarker[];
  config?: Globe3DConfig;
  className?: string;
  onMarkerClick?: (marker: GlobeMarker) => void;
}

const DEFAULT_EARTH_TEXTURE =
  "https://unpkg.com/three-globe@2.31.0/example/img/earth-blue-marble.jpg";
const DEFAULT_BUMP_TEXTURE =
  "https://unpkg.com/three-globe@2.31.0/example/img/earth-topology.png";

function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function Marker({
  marker,
  radius,
  onClick,
  portalRef,
}: {
  marker: GlobeMarker;
  radius: number;
  onClick?: (m: GlobeMarker) => void;
  portalRef?: React.RefObject<HTMLElement>;
}) {
  const [visible, setVisible] = useState(false);
  const groupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();

  const surfacePos = useMemo(
    () => latLngToVector3(marker.lat, marker.lng, radius * 1.002),
    [marker.lat, marker.lng, radius],
  );

  // Reduced from 1.52 → 1.35 so pills stay well within the canvas bounds
  const tipPos = useMemo(
    () => latLngToVector3(marker.lat, marker.lng, radius * 1.35),
    [marker.lat, marker.lng, radius],
  );

  const { lineCenter, lineQuat, lineHeight } = useMemo(() => {
    const center = surfacePos.clone().lerp(tipPos, 0.5);
    const dir = tipPos.clone().sub(surfacePos).normalize();
    const q = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir,
    );
    return {
      lineCenter: center,
      lineQuat: q,
      lineHeight: tipPos.distanceTo(surfacePos),
    };
  }, [surfacePos, tipPos]);

  const _surfaceLocal = useMemo(() => surfacePos.clone(), [surfacePos]);

  useFrame(() => {
    if (!groupRef.current) return;
    const worldPos = _surfaceLocal
      .clone()
      .applyMatrix4(groupRef.current.matrixWorld);
    const markerDir = worldPos.normalize();
    const camDir = camera.position.clone().normalize();
    setVisible(markerDir.dot(camDir) > 0.25);
  });

  return (
    <group ref={groupRef}>
      <group visible={visible}>
        <mesh position={lineCenter} quaternion={lineQuat}>
          <cylinderGeometry args={[0.007, 0.007, lineHeight, 8]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.7} />
        </mesh>
        <mesh position={surfacePos}>
          <sphereGeometry args={[0.02, 10, 10]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>

      <group position={tipPos}>
        <Html
          center
          zIndexRange={[100, 0]}
          portal={portalRef} // ← renders into body, escapes ALL overflow
          style={{ pointerEvents: "none", userSelect: "none" }}
        >
          <div
            onClick={() => onClick?.(marker)}
            style={{
              display: visible ? "flex" : "none",
              alignItems: "center",
              gap: "5px",
              background: "rgba(8,14,36,0.92)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "20px",
              padding: "3px 9px 3px 5px",
              whiteSpace: "nowrap",
              fontSize: "11px",
              lineHeight: "1",
              pointerEvents: "auto",
              cursor: "pointer",
            }}
          >
            <img
              src={marker.src}
              alt={marker.label ?? ""}
              style={{
                width: "18px",
                height: "13px",
                objectFit: "cover",
                borderRadius: "2px",
                flexShrink: 0,
              }}
              draggable={false}
            />
            {marker.label && (
              <span
                style={{
                  color: "#fff",
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                  fontSize: "11px",
                }}
              >
                {marker.label}
              </span>
            )}
          </div>
        </Html>
      </group>
    </group>
  );
}

function GlobeMesh({
  config,
  markers,
  onMarkerClick,
}: {
  config: any;
  markers: GlobeMarker[];
  onMarkerClick?: (m: GlobeMarker) => void;
}) {
  const [earthTex, bumpTex] = useTexture([
    config.textureUrl,
    config.bumpMapUrl,
  ]);
  useMemo(() => {
    if (earthTex) earthTex.colorSpace = THREE.SRGBColorSpace;
  }, [earthTex]);
  const geo = useMemo(
    () => new THREE.SphereGeometry(config.radius, 64, 64),
    [config.radius],
  );

  return (
    <group>
      <mesh geometry={geo}>
        <meshStandardMaterial
          map={earthTex}
          bumpMap={bumpTex}
          bumpScale={config.bumpScale * 0.05}
          roughness={0.75}
          metalness={0}
        />
      </mesh>
      {markers.map((m, i) => (
        <Marker
          key={i}
          marker={m}
          radius={config.radius}
          onClick={onMarkerClick}
        />
      ))}
    </group>
  );
}

function Scene({
  markers,
  config,
  onMarkerClick,
  onLoaded,
}: {
  markers: GlobeMarker[];
  config: any;
  onMarkerClick?: (m: GlobeMarker) => void;
  onLoaded?: () => void;
}) {
  const { camera } = useThree();

  React.useEffect(() => {
    camera.position.set(0, 0, config.radius * 3.0);
    camera.lookAt(0, 0, 0);
    onLoaded?.();
  }, [camera, config.radius, onLoaded]);

  return (
    <>
      <ambientLight intensity={config.ambientIntensity} />
      <directionalLight
        position={[config.radius * 5, config.radius * 2, config.radius * 5]}
        intensity={config.pointLightIntensity}
        color="#ffffff"
      />
      <directionalLight
        position={[-config.radius * 3, config.radius, -config.radius * 2]}
        intensity={config.pointLightIntensity * 0.25}
        color="#aaccff"
      />
      <GlobeMesh
        config={config}
        markers={markers}
        onMarkerClick={onMarkerClick}
      />
      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={false}
        minDistance={config.radius * 2.4}
        maxDistance={config.radius * 5}
        rotateSpeed={0.45}
        autoRotate
        autoRotateSpeed={config.autoRotateSpeed}
        enableDamping
        dampingFactor={0.08}
      />
    </>
  );
}

const defaultConfig = {
  radius: 2,
  textureUrl: DEFAULT_EARTH_TEXTURE,
  bumpMapUrl: DEFAULT_BUMP_TEXTURE,
  bumpScale: 1,
  autoRotateSpeed: 3.5,
  ambientIntensity: 0.7,
  pointLightIntensity: 1.4,
};

// SVG skeleton shown before Three.js loads — pure DOM, never inside Canvas
function GlobeSkeleton() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <svg
        viewBox="0 0 200 200"
        width="260"
        height="260"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="globeGrad" cx="35%" cy="35%">
            <stop offset="0%" stopColor="#1e4a7a" />
            <stop offset="100%" stopColor="#0d1f3c" />
          </radialGradient>
          <radialGradient id="globeShimmer" cx="35%" cy="35%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <clipPath id="gc">
            <circle cx="100" cy="100" r="90" />
          </clipPath>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#globeGrad)" />
        <g
          clipPath="url(#gc)"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="0.6"
          opacity="0.28"
        >
          {[-60, -30, 0, 30, 60].map((lat, i) => {
            const y = 100 - (lat / 90) * 90;
            const hw = Math.sqrt(Math.max(0, 8100 - (y - 100) ** 2));
            return <ellipse key={i} cx="100" cy={y} rx={hw} ry={hw * 0.22} />;
          })}
          {[0, 30, 60, 90, 120, 150].map((lng, i) => {
            const rx = Math.abs(Math.sin((lng * Math.PI) / 180)) * 90 || 2;
            return <ellipse key={i} cx="100" cy="100" rx={rx} ry="90" />;
          })}
        </g>
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="url(#globeShimmer)"
          opacity="0.1"
        >
          <animate
            attributeName="opacity"
            values="0.06;0.18;0.06"
            dur="2.2s"
            repeatCount="indefinite"
          />
        </circle>
        <ellipse
          cx="72"
          cy="68"
          rx="24"
          ry="15"
          fill="white"
          opacity="0.06"
          transform="rotate(-35 72 68)"
        />
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="0.8"
          opacity="0.35"
        />
      </svg>
    </div>
  );
}

export function Globe3D({
  markers = [],
  config = {},
  className,
  onMarkerClick,
}: Globe3DProps) {
  const merged = useMemo(() => ({ ...defaultConfig, ...config }), [config]);
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn("relative w-full h-full", className)}
      style={{ overflow: "visible" }}
    >
      {!loaded && <GlobeSkeleton />}

      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
        camera={{ fov: 45, near: 0.1, far: 1000 }}
        style={{ background: "transparent", overflow: "visible" }}
      >
        <Suspense fallback={null}>
          <Scene
            markers={markers}
            config={merged}
            onMarkerClick={onMarkerClick}
            onLoaded={() => setLoaded(true)}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
