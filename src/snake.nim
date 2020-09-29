import vecs, random, sets, jscanvas, colors, dom

let
  gridSize = 10
  walls: HashSet[Vec2] = toHashSet [
    (1, 1), (2, 1), (1, 2), # NW corner
    (8, 1), (8, 2), (7, 1), # NE corner
    (1, 7), (1, 8), (2, 8), # SW corner
    (8, 8), (8, 7), (7, 8)] # SE corner

var
  snake*: seq[Vec2]
  fruitPos*: Vec2
  gameOver*: bool
  prevVec*: Vec2
  snakeCanvasFocused*: bool # not set in this file!
  timeout: Timeout

proc resetFruit =
  while true:
    let pos = (rand(gridSize-1), rand(gridSize-1))
    if pos != fruitPos and pos notin snake and pos notin walls:
      fruitPos = pos
      break

proc resetState* =
  snake = @[(5, 5), (6, 5), (7, 5)]
  prevVec = (1, 0)
  resetFruit()
  gameOver = false

proc moveSnake*(vec: Vec2) =
  if not gameOver:
    let vec =
      if vec == (-prevVec.x, -prevVec.y): prevVec
      else: vec
    let newHead = snake[^1] + vec
    if newHead in walls or newHead.x notin 0..<gridSize or newHead.y notin 0..<gridSize or newHead in snake:
      gameOver = true
      timeout.clearTimeout()
      timeout = nil
    elif newHead == fruitPos:
      resetFruit()
      snake.add newHead
      prevVec = vec
    else:
      snake.delete 0
      snake.add newHead
      prevVec = vec

let
  canvasSize* = 480
  cellSize = canvasSize div gridSize

proc drawCell(ctx: CanvasContext, color: Color, pos: Vec2) =
  let pos = (x: pos.x*cellSize, y: pos.y*cellSize)
  ctx.fillStyle = $color
  ctx.fillRect pos.x, pos.y, cellSize, cellSize

proc redrawCanvas =
  let ctx = document.getElementById("snakeCanvas").CanvasElement.getContext2D()
  ctx.fillStyle = $colWhite
  ctx.fillRect 0, 0, canvasSize, canvasSize
  ctx.drawCell colGreenYellow, fruitPos
  for wallPos in walls:
    ctx.drawCell colRed, wallPos
  for snakePos in snake:
    if snakePos == snake[^1]:
      ctx.drawCell colPurple, snakePos
    else:
      ctx.drawCell colYellow, snakePos

const
  timeoutMs = 750

proc timeoutCb =
  moveSnake prevVec
  timeout = setTimeout(timeoutCb, timeoutMs)
  redrawCanvas()

proc onFocus* =
  snakeCanvasFocused = true
  if timeout == nil:
    timeout = setTimeout(timeoutCb, timeoutMs) 

proc onFocusOut* =
  snakeCanvasFocused = false
  if timeout != nil:
    timeout.clearTimeout()
  timeout = nil

proc start* =
  resetState()
  redrawCanvas()
  if timeout != nil:
    timeout.clearTimeout()
  timeout = setTimeout(timeoutCb, timeoutMs)

proc onKeyDown*(ev: Event) =
  let key = ev.KeyboardEvent.key
  if key == "r":
    start()
  else:
    if key == "Left" or key == "ArrowLeft" or key == "a": 
      moveSnake (-1, 0)
    elif key == "Right" or key == "ArrowRight" or key == "d":
      moveSnake (1, 0)
    elif key == "Down" or key == "ArrowDown" or key == "s":
      moveSnake (0, 1)
    elif key == "Up" or key == "ArrowUp" or key == "w":
      moveSnake (0, -1)
    else:
      return
    ev.preventDefault()
    redrawCanvas()
    if timeout != nil:
      timeout.clearTimeout()
    timeout = setTimeout(timeoutCb, timeoutMs)