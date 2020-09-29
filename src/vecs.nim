type
  Vec2* = tuple[x, y: int]

proc `+=`*(result: var Vec2, v: Vec2) =
  result.x += v.x
  result.y += v.y

proc `+`*(a, b: Vec2): Vec2 =
  result.x = a.x + b.x
  result.y = a.y + b.y