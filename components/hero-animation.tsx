"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { PointMaterial, Points } from "@react-three/drei"
import * as THREE from "three"
import { random } from "maath"

function ElectricParticles({ count = 5000 }) {
  const points = useRef<THREE.Points>(null!)
  const sphere = new Float32Array(random.inSphere(new Float32Array(count * 3), { radius: 10 }))

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.x += delta * 0.05
      points.current.rotation.y += delta * 0.075
    }

    // Animate particles
    const positions = points.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < positions.length; i += 3) {
      // Add some electric movement
      positions[i] += Math.sin(state.clock.elapsedTime + i) * 0.01
      positions[i + 1] += Math.cos(state.clock.elapsedTime + i) * 0.01
    }
    points.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <Points ref={points} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#4285f4"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function ElectricLines() {
  const lines = useRef<THREE.LineSegments>(null!)
  const { viewport } = useThree()

  useEffect(() => {
    // Create electric lines
    const lineCount = 50
    const points = []
    const colors = []
    const color = new THREE.Color()

    for (let i = 0; i < lineCount; i++) {
      // Create zigzag lines
      const x = (Math.random() - 0.5) * 20
      const y = (Math.random() - 0.5) * 20
      const z = (Math.random() - 0.5) * 20

      // Start point
      points.push(x, y, z)
      color.set("#1e40af")
      colors.push(color.r, color.g, color.b)

      // End point with zigzag
      points.push(x + (Math.random() - 0.5) * 2, y + (Math.random() - 0.5) * 2, z + (Math.random() - 0.5) * 2)
      color.set("#60a5fa")
      colors.push(color.r, color.g, color.b)
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3))
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3))

    const material = new THREE.LineBasicMaterial({
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.7,
      linewidth: 1,
    })

    lines.current.geometry = geometry
    lines.current.material = material
  }, [viewport])

  useFrame((state) => {
    if (lines.current) {
      lines.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      lines.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3

      // Pulse effect
      const positions = lines.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 6) {
        // Animate only the end points of each line
        positions[i + 3] += Math.sin(state.clock.elapsedTime * 2 + i) * 0.01
        positions[i + 4] += Math.cos(state.clock.elapsedTime * 2 + i) * 0.01
        positions[i + 5] += Math.sin(state.clock.elapsedTime * 2 + i) * 0.01
      }
      lines.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return <lineSegments ref={lines} />
}

export default function HeroAnimation() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 5, 30]} />
        <ambientLight intensity={0.2} />
        <ElectricParticles />
        <ElectricLines />
      </Canvas>
    </div>
  )
}
