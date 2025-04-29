"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { PointMaterial, Points } from "@react-three/drei"
import * as THREE from "three"
import { random } from "maath"

function CircuitLines() {
  const lines = useRef<THREE.LineSegments>(null!)

  useFrame((state) => {
    if (lines.current) {
      lines.current.rotation.y = state.clock.elapsedTime * 0.05
      lines.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  // Create circuit board pattern
  const lineCount = 100
  const points = []
  const colors = []
  const color1 = new THREE.Color("#1e40af")
  const color2 = new THREE.Color("#3b82f6")

  for (let i = 0; i < lineCount; i++) {
    const x = (Math.random() - 0.5) * 20
    const y = (Math.random() - 0.5) * 10
    const z = (Math.random() - 0.5) * 10

    // Create horizontal and vertical lines for circuit board effect
    const isHorizontal = Math.random() > 0.5
    const length = Math.random() * 2 + 0.5

    // Start point
    points.push(x, y, z)
    colors.push(color1.r, color1.g, color1.b)

    // End point
    if (isHorizontal) {
      points.push(x + length, y, z)
    } else {
      points.push(x, y + length, z)
    }
    colors.push(color2.r, color2.g, color2.b)
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3))
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3))

  const material = new THREE.LineBasicMaterial({
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    transparent: true,
    opacity: 0.7,
  })

  return <lineSegments ref={lines} geometry={geometry} material={material} />
}

function DataParticles() {
  const particles = useRef<THREE.Points>(null!)
  const sphere = random.inSphere(new Float32Array(1000 * 3), { radius: 7 }) as Float32Array

  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.x += 0.001
      particles.current.rotation.y += 0.002

      // Pulse effect
      const positions = particles.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += Math.sin(state.clock.elapsedTime + i) * 0.001
        positions[i + 1] += Math.cos(state.clock.elapsedTime + i) * 0.001
      }
      particles.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={particles} positions={sphere} stride={3}>
      <PointMaterial
        transparent
        color="#60a5fa"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

export default function ContactAnimation() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <color attach="background" args={["#000000"]} />
        <CircuitLines />
        <DataParticles />
      </Canvas>
    </div>
  )
}
