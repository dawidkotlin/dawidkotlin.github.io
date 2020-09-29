import vecs, random, sets, jscanvas, colors, dom

let
  gridSize = 20
  walls: HashSet[Vec2] = toHashSet [
    (1, 1), (2, 1), (1, 2), # NW corner
    (8, 1), (8, 2), (7, 1), # NE corner
    (1, 7), (1, 8), (2, 8), # SW corner
    (8, 8), (8, 7), (7, 8)] # SE corner

var
  snake*: seq[Vec2]
  fruitPos*: Vec2
  gameOver*: bool

proc resetFruit =
  while true:
    let pos = (rand(gridSize-1), rand(gridSize-1))
    if pos != fruitPos and pos notin snake and pos notin walls:
      fruitPos = pos
      break

proc resetState* =
  snake = @[(5, 5), (6, 5), (7, 5)]
  resetFruit()
  gameOver = false

proc move*(vec: Vec2) =
  let headPos = snake[^1] + vec
  if headPos in walls or headPos.x notin 0..<gridSize or headPos.y notin 0..<gridSize or headPos in snake:
    gameOver = true
  elif headPos == fruitPos:
    resetFruit()
    snake.add headPos
  else:
    for pos in snake.mitems:
      pos += vec

let
  canvasSize* = 480
  cellSize = canvasSize div gridSize

proc drawCell(ctx: CanvasContext, color: Color, pos: Vec2) =
  let pos = (x: pos.x*cellSize, y: pos.y*cellSize)
  ctx.fillStyle = $color
  ctx.fillRect pos.x, pos.y, cellSize, cellSize

proc redraw =
  let ctx = document.getElementById("snakeCanvas").CanvasElement.getContext2D()
  ctx.fillStyle = $colGray
  ctx.fillRect 0, 0, canvasSize, canvasSize
  ctx.drawCell colGreenYellow, fruitPos
  for wallPos in walls:
    ctx.drawCell colRed, wallPos
  for snakePos in snake:
    if snakePos == snake[^1]:
      ctx.drawCell colPurple, snakePos
    else:
      ctx.drawCell colYellow, snakePos

proc start* =
  resetState()
  redraw()

proc onKeyDown*(ev: Event) =
  echo ":D"
  let key = ev.KeyboardEvent.key
  if key == "Left" or key == "ArrowLeft" or key == "a": 
    move (-1, 0)
    ev.preventDefault()
  elif key == "Right" or key == "ArrowRight" or key == "d":
    move (1, 0)
    ev.preventDefault()
  elif key == "Down" or key == "ArrowDown" or key == "s":
    move (0, 1)
    ev.preventDefault()
  elif key == "Up" or key == "ArrowUp" or key == "w":
    move (0, -1)
    ev.preventDefault()