import tables, options, vecs

type
  ChessTeam* = enum ctRed, ctBlue
  PieceKind* = enum pkPawn, pkRook, pkBishop, pkKnight, pkKing, pkQueen
  Piece* = ref object
    team*: ChessTeam
    kind*: PieceKind
    validMoves*: seq[Vec2]

var
  pieces*: Table[Vec2, Piece]
  currentTeam*: ChessTeam
  winner*: Option[ChessTeam]
  selectedPos* = (-1, -1)
  hoveredPos* = (-1, -1)

proc updateVecMoves(here: Vec2, vectors: varargs[Vec2]) =
  pieces[here].validMoves = @[]
  for vec in vectors:
    let dest = here + vec
    if dest notin pieces or pieces[dest].team != pieces[here].team:
      pieces[here].validMoves.add dest

proc updateDirMoves(here: Vec2, directions: varargs[Vec2]) =
  pieces[here].validMoves = @[]
  for dir in directions:
    var dest = here + dir
    while dest.x in 0..7 and dest.y in 0..7:
      if dest in pieces:
        if pieces[dest].team != pieces[here].team:
          pieces[here].validMoves.add dest
        break
      else:
        pieces[here].validMoves.add dest
      dest = dest + dir

proc updateValidMoves(here: Vec2) =
  const rookMoves = @[(1, 0), (-1, 0), (0, 1), (0, -1)]
  const bishopMoves = @[(1, 1), (1, -1), (-1, 1), (-1, -1)]
  pieces[here].validMoves = @[]
  if winner.isNone:
    case pieces[here].kind
    of pkPawn:
      let forward = here + (0, if pieces[here].team == ctBlue: 1 else: -1)
      if forward.y in 0..7:
        let left = forward + (1, 0)
        let right = forward + (-1, 0)
        if left in pieces and pieces[left].team != pieces[here].team:
          pieces[here].validMoves.add left
        if right in pieces and pieces[right].team != pieces[here].team:
          pieces[here].validMoves.add right
        if pieces[here].validMoves == @[] and forward notin pieces:
          pieces[here].validMoves.add forward
    of pkKnight:
      updateVecMoves here, (2, 1), (-2, 1), (2, -1), (-2, -1), (1, 2), (1, -2), (-1, 2), (-1, -2)
    of pkBishop:
      updateDirMoves here, bishopMoves
    of pkRook:
      updateDirMoves here, rookMoves
    of pkQueen:
      updateDirMoves here, rookMoves & bishopMoves
    of pkKing:
      updateVecMoves here, rookMoves & bishopMoves

proc resetChess* =
  currentTeam = ctRed
  reset winner
  pieces.clear()
  for y in [0, 1, 6, 7]:
    for x in 0..<8:
      let piece = Piece()
      pieces[(x, y)] = piece
      piece.team = if y in [0, 1]: ctBlue else: ctRed
      piece.kind =
        if y in [1, 6]: pkPawn
        elif x in [0, 7]: pkRook
        elif x in [1, 6]: pkKnight
        elif x in [2, 5]: pkBishop
        elif x == 3: pkKing
        elif x == 4: pkQueen
        else: raiseAssert $(x, y)
  for pos in pieces.keys:
    updateValidMoves pos

proc onClick*(clickedPos: Vec2) =
  if winner.isNone:
    if clickedPos != selectedPos and clickedPos in pieces and pieces[clickedPos].team == currentTeam:
      selectedPos = clickedPos
    elif selectedPos in pieces and clickedPos in pieces[selectedPos].validMoves:
      if clickedPos in pieces and pieces[clickedPos].kind == pkKing:
        winner = some currentTeam
        for piece in pieces.values:
          piece.validMoves = @[]
      pieces[clickedPos] = pieces[selectedPos]
      pieces.del selectedPos
      for pos in pieces.keys:
        updateValidMoves pos
      currentTeam = if currentTeam == ctRed: ctBlue else: ctRed
      selectedPos = (-1, -1)
      discard
    else:
      selectedPos = (-1, -1)

proc onMouseOver*(here: Vec2) =
  if winner.isNone and here in pieces and pieces[here].team == currentTeam:
    hoveredPos = here

proc onMouseOut*(here: Vec2) =
  if winner.isNone and hoveredPos == here:
    hoveredPos = (-1, -1)

proc validDest*(here: Vec2): bool =
  result = false
  if selectedPos in pieces:
    result = here in pieces[selectedPos].validMoves
  elif hoveredPos in pieces:
    result = here in pieces[hoveredPos].validMoves