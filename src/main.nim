import dom, sugar, strutils, karax/vstyles, chess, options, tables, random, snake
include karax/prelude

randomize()
resetChess()
snake.resetState()

proc renderWelcome: VNode =
  result = buildHtml:
    section(class="hero is-large is-primary"):
      tdiv(class="hero-body"):
        tdiv(class="container"):
          h1(class="title"): text"Dawid Kotliński"
          h2(class="subtitle"): text"Jest to strona prezentująca moje projekty programistyczne"

proc renderStatichop: VNode =
  result = buildHtml:
    section(class="hero is-medium is-info"):
      tdiv(class="hero-body"):
        tdiv(class="container"):
          tdiv(class="columns"):
            tdiv(class="column is-half"):
              h1(class="title"): text"Sklep internetowy"
              p(class="content"):
                ul:
                  li text"Lista towarów może być filtrowana i sortowana"
                  li text"Elementy mogą być sortowane po nazwie"
                  li text"Obsługiwana jest rejestracja, logowanie, sesje, historia zakupów itp."
                  li text"Sklep jest wielojęzykowy"
                  li text"Bazą danych jest SQLite 3"
                  li text "Napisane bez użycia \"frameworków\", wszystko napisane od zera"
          br()
          video(autoplay="autoplay", loop="loop"):
            source(src="data/staticshop.webm", `type`="video/webm")

proc renderGenderdetect: VNode =
  result = buildHtml:
    section(class="hero is-medium is-dark"):
      tdiv(class="hero-body"):
        tdiv(class="container"):
          tdiv(class="columns"):
            tdiv(class="column is-half"):
              h1(class="title"): text"Identyfikator płci"
              p(class="content"):
                ul:
                  li text"Determinuje płeć danej osoby na podstawie treści jej artykułu na wikipedii."
                  li text"Przyjmuje jako argumenty zarówno imiona i linki"
                  li text"Analizuje anglo- i polskojęzyczne artykuły"
            tdiv(class="column"):
              img(src="data/genderdetect.png")

proc renderNationDetect: VNode =
  result = buildHtml:
    section(class="hero is-medium is-dark"):
      tdiv(class="hero-body"):
        tdiv(class="container"):
          tdiv(class="columns"):
            tdiv(class="column is-half"):
              h1(class="title"): text"Identyfikator narodowości"
              p(class="content"):
                ul:
                  li text"Determinuje narodowość danej osoby na podstawie treści jej artykułu na wikipedii."
                  li text"Przyjmuje jako argumenty zarówno imiona i linki"
            tdiv(class="column"):
              img(src="data/nationdetect.png")

proc renderNetchess: VNode =
  result = buildHtml:
    section(class="hero is-medium is-warning"):
      tdiv(class="hero-body"):
        tdiv(class="container"):
          tdiv(class="columns"):
            tdiv(class="column is-half"):
              h1(class="title"): text"Szachy online"
              p(class="content"):
                ul:
                  li text"Komunikacja między klientami a serwerem ma miejsce za pomocą WebSocket"
                  li text"Klientem jest przeglądarka"
                  li text"Interfejs jest reaktywny"
                  li text"Dane przesyłane przez klientów są weryfikowane przez serwer"
            tdiv(class="column"):
              img(src="data/netchess.gif")

proc renderSnake: VNode =
  result = buildHtml:
    section(class="hero is-medium is-success"):
      tdiv(class="hero-body"):
        tdiv(class="container"):
          tdiv(class="columns"):
            tdiv(class="column is-half"):
              h1(class="title"): text"Snake"
              h2(class="subtitle"):
                if gameOver:
                  text"Koniec gry"
                elif snakeCanvasFocused:
                  text"Używaj strzałek aby się poruszać"
                else:
                  text"Kliknij na okno po prawej aby zacząć grać"
              button(class="button is-medium is-white", onClick=snake.start):
                text"Zacznij od nowa"
            tdiv(class="column is-half"):
              canvas(class="has-background-white", id="snakeCanvas", width = $snake.canvasSize, height = $snake.canvasSize, tabIndex="1000"):
                proc onKeyDown(ev: Event, n: VNode) = snake.onKeyDown(ev)
                proc onFocus = snake.onFocus()
                proc onFocusOut = snake.onFocusOut()

proc renderLocalChess: VNode =
  result = buildHtml:
    section(class="hero is-medium is-dark"):
      tdiv(class="hero-body"):
        tdiv(class="container"):
          tdiv(class="columns"):
            tdiv(class="column is-half"):
              h1(class="title"): text"Szachy"
              h2(class="subtitle"):
                if winner.isSome:
                  text"Wygrał "
                  if currentTeam == ctBlue:
                    span(class="has-text-info"): text"niebieski"
                  else:
                    span(class="has-text-danger"): text"czerwony"
                  text" gracz!"
                else:
                  text"Teraz kolej "
                  if currentTeam == ctBlue:
                    span(class="has-text-info"): text"niebieskiego"
                  else:
                    span(class="has-text-danger"): text"czerwonego"
                  text" gracza"
              button(class="button is-light is-medium"):
                text"Zacznij od nowa"
                proc onClick = resetChess()
            tdiv(class="column"):
              tdiv:
                for y in 0 ..< 8:
                  tdiv(class="is-flex"):
                    for x in 0 ..< 8:
                      let here = (x, y)
                      let buttonColor = 
                        if selectedPos in pieces and (here == selectedPos or validDest(here)):
                          if pieces[selectedPos].team == ctBlue: "is-info" else: "is-danger"
                        elif hoveredPos in pieces and (here == hoveredPos or validDest(here)):
                          if pieces[hoveredPos].team == ctBlue: "is-info" else: "is-danger"
                        elif x mod 2 == y mod 2: "is-dark"
                        else: "is-light"
                      a(class = "button is-medium " & buttonColor):
                        if here in pieces:
                          let textColor =
                            if here == selectedPos: "has-text-warning"
                            elif here == hoveredPos: "has-text-dark"
                            # elif validDest(here): "has-text-warning"
                            elif pieces[here].team == ctBlue: "has-text-info"
                            else: "has-text-danger"
                          span(class = "icon " & textColor, style={pointerEvents: "none"}):
                            case pieces[here].kind
                            of pkPawn: italic(class="fas fa-chess-pawn")
                            of pkRook: italic(class="fas fa-chess-rook")
                            of pkKnight: italic(class="fas fa-chess-knight")
                            of pkBishop: italic(class="fas fa-chess-bishop")
                            of pkKing: italic(class="fas fa-chess-king")
                            of pkQueen: italic(class="fas fa-chess-queen")
                        else:
                          span(class="icon")
                        capture here:
                          proc onMouseOver = onMouseOver here
                          proc onMouseOut = onMouseOut here
                          proc onClick = onClick here

type
  TodoItem = ref object
    str, id: cstring
    done: bool

var
  todoItems = @[
    TodoItem(str: "Obudzić się", id: $rand(int)),
    TodoItem(str: "Zrobić zakupy", id: $rand(int)),
    TodoItem(str: "Zapłacić rachunki", id: $rand(int))]

proc renderTodoList: VNode =
  result = buildHtml:
    section(class="hero is-large is-light"):
      tdiv(class="hero-body"):
        tdiv(class="container"):
          tdiv(class="columns"):
            tdiv(class="column is-half"):
              h1(class="title"): text"Zadania"
              h2(class="subtitle"): text"Interaktywna lista zadań"
            tdiv(class="column is-half"):
              tdiv(class="box"):
                input(class="input", id="todoInput", placeholder="Dodaj nowe zadanie"):
                  proc onKeyDown(event: Event, node: VNode) =
                    let value = ($node.value).strip().replace("  ", " ")
                    if event.KeyboardEvent.key == "Enter" and value != "":
                      # if value notin itemsActive and value notin itemsDone:
                      todoItems.add TodoItem(str: value, done: false, id: $rand(int))
                      node.value = ""
                br()
                br()
                aside(class="menu"):
                  if todoItems == @[]:
                    h1(class="title has-text-dark"): text"Empty"
                    h2(class="subtitle has-text-dark"): text"There are no items on your todo list"
                  else:
                    ul(class="menu-list"):
                      for idx in countdown(todoItems.high, todoItems.low):
                        let item = todoItems[idx]
                        capture item:
                          li(id = item.id):
                            a:
                              if item.done:
                                strikethrough text item.str
                              else:
                                text item.str
                                proc onClick =
                                  item.done = true
                                  proc cb =
                                    todoItems.delete todoItems.find(item)
                                    redraw()
                                  discard setTimeout(cb, 750)

setRenderer proc: VNode =
  result = buildHtml tdiv:
    renderWelcome()
    renderStatichop()
    renderNationDetect()
    renderGenderDetect()
    renderNetchess()
    renderLocalChess()
    renderTodoList()
    # renderSnake()