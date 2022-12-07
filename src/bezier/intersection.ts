import { Vec2 } from '../types/Vec2'

//2直線abとcdの交点
export const intersection = (ab: [Vec2, Vec2], cd: [Vec2, Vec2]): Vec2 | null => {
  const [a, b] = ab
  const [c, d] = cd
  if (a.x - b.x === 0 || c.x - d.x === 0) { return null }
  const alpha = (a.y - b.y) / (a.x - b.x)
  const beta = (c.y - d.y) / (c.x - d.x)
  if (alpha - beta === 0) { return null }
  const x = ((c.y - beta * c.x) - (a.y - alpha * a.x)) / (alpha - beta)
  const y = alpha * x + a.y - alpha * a.x
  return { x: x, y: y }
}