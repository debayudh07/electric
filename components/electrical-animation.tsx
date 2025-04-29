"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { PointMaterial, Points } from "@react-three/drei"
import * as THREE from "three"
import { random } from "maath"

function LightningBolt({ position = [0, 0, 0], scale = 1, color = "#60a5fa" }) {
  const points = useRef<THREE.Points>(null!)

  // Create lightning bolt points
  const count = 100
  const positions = new Float32Array(count * 3)

  // Create zigzag pattern for lightning
  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    const t = i / count
    const amplitude = 0.2 * (1 - t) * scale

    positions[i3] = (Math.random() - 0.5) * amplitude + position[0]
    positions[i3 + 1] = t * 2 * scale - scale + position[1]
    positions[i3 + 2] = (Math.random() - 0.5) * amplitude + position[2]
  }

  useFrame(() => {
    if (points.current) {
      // Animate the lightning
      const positions = points.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        const t = i / count
        const amplitude = 0.2 * (1 - t) * scale

        // Add some jitter to make it look like electricity
        positions[i3] = (Math.random() - 0.5) * amplitude + position[0]
        positions[i3 + 2] = (Math.random() - 0.5) * amplitude + position[2]
      }
      points.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={points} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color={color}
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function ElectricalField() {
  const particles = useRef<THREE.Points>(null!)
  const sphere = new Float32Array(random.inSphere(new Float32Array(2000 * 3), { radius: 5 }))

  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2
      particles.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2
    }
  })

  return (
    <Points ref={particles} positions={sphere} stride={3}>
      <PointMaterial
        transparent
        color="#1d4ed8"
        size={0.025}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

export default function ElectricalAnimation() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <color attach="background" args={["#000000"]} />
        <ElectricalField />
        <LightningBolt position={[-2, 0, 0]} scale={2} />
        <LightningBolt position={[2, 0, 0]} scale={1.5} color="#3b82f6" />
        <LightningBolt position={[0, 1, 0]} scale={2.2} color="#2563eb" />
      </Canvas>
    </div>
  )
}
