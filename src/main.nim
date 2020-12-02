import dom, sugar, strutils, ../karax/karax/vstyles, chess, options, tables, random, snake
include ../karax/karax/prelude

randomize()
resetChess()
snake.resetState()

proc renderLisp: VNode =
  result = buildHtml:
    section(class="hero is-medium is-dark"):
      tdiv(class="hero-body"):
        tdiv(class="container"):
          tdiv(class="columns"):
            tdiv(class="column is-half"):
              h1(class="title"): text"Interpreter"
              h2(class="subtitle"): text"Interpterer języka programowania inspirowanego Lispem"
              p(class="content"):
                a(class="button is-dark", href="https://github.com/dawidkotlin/lisp", target="_blank"): text"Github"
                ul:
                  li text"Zawiera interaktywne środowisko programowania"
                  li text"Umożliwia tworzenie własnych procedur i metod"
                  li text"Obejmuje zmienne globalne i lokalne"
                  li text"Procedury mogą być używane jako wartości (np. przypisywane do zmiennych)"
            tdiv(class="column"):
              img(src="data/lisp.png")

proc renderStatichop: VNode =
  result = buildHtml:
    section(class="hero is-medium is-info"):
      tdiv(class="hero-body"):
        tdiv(class="container"):
          tdiv(class="columns"):
            tdiv(class="column is-half"):
              h1(class="title"): text"Sklep"
              h2(class="subtitle"): text"Przykładowy serwer sklepu internetowego"
              p(class="content"):
                a(class="button is-info", href="https://github.com/dawidkotlin/staticshop", target="_blank"): text"Github"
                ul:
                  li text"Lista towarów może być filtrowana i sortowana"
                  li text"Elementy mogą być sortowane po nazwie"
                  li text"Obsługiwana jest rejestracja, logowanie, sesje, historia zakupów itp."
                  li text"Sklep jest wielojęzykowy"
                  li text"Bazą danych jest SQLite 3"
                  li text "Projekt nie używa dużych bibliotek; tworzenie i odczytywanie poleceń SQL, HTTP i elementów HTML jest w ramach projektu"
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
                a(class="button is-dark", href="https://github.com/dawidkotlin/genderdetect", target="_blank"): text"Github"
                ul:
                  li text"Determinuje płeć danej osoby na podstawie treści jej artykułu na wikipedii."
                  li text"Przyjmuje jako argumenty imiona lub linki"
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
                a(class="button is-dark", href="https://github.com/dawidkotlin/nationdetect", target="_blank"): text"Github"
                ul:
                  li text"Determinuje narodowość danej osoby na podstawie treści jej artykułu na wikipedii."
                  li text"Przyjmuje jako argumenty zarówno imiona i linki"
            tdiv(class="column"):
              img(src="data/nationdetect.png")

proc renderNetchess: VNode =
  result = buildHtml:
    section(class="hero is-medium is-info"):
      tdiv(class="hero-body"):
        tdiv(class="container"):
          tdiv(class="columns"):
            tdiv(class="column is-half"):
              h1(class="title"): text"Szachy internetowe"
              h2(class="subtitle"): text"Gra w szachy pomiędzy dwoma graczami przez internet"
              p(class="content"):
                a(class="button is-info", href="https://github.com/dawidkotlin/netchess", target="_blank"): text"Github"
                ul:
                  li text"Komunikacja między klientami a serwerem ma miejsce za pomocą WebSocket"
                  li text"Klientem jest przeglądarka"
                  li text"Interfejs jest reaktywny"
                  li text"Dane przesyłane przez klientów są weryfikowane przez serwer"
            tdiv(class="column"):
              img(src="data/netchess.gif")

# proc renderSnake: VNode =
#   result = buildHtml:
#     section(class="hero is-medium is-success"):
#       tdiv(class="hero-body"):
#         tdiv(class="container"):
#           tdiv(class="columns"):
#             tdiv(class="column is-half"):
#               h1(class="title"): text"Snake"
#               h2(class="subtitle"):
#                 if gameOver:
#                   text"Koniec gry"
#                 elif snakeCanvasFocused:
#                   text"Używaj strzałek aby się poruszać"
#                 else:
#                   text"Kliknij na okno po prawej aby zacząć grać"
#               button(class="button is-medium is-white", onClick=snake.start):
#                 text"Zacznij od nowa"
#             tdiv(class="column is-half"):
#               canvas(class="has-background-white", id="snakeCanvas", width = $snake.canvasSize, height = $snake.canvasSize, tabIndex="1000"):
#                 proc onKeyDown(ev: Event, n: VNode) = snake.onKeyDown(ev)
#                 proc onFocus = snake.onFocus()
#                 proc onFocusOut = snake.onFocusOut()

proc renderLocalChess: VNode =
  result = buildHtml:
    section(class="hero is-medium is-light"):
      tdiv(class="hero-body"):
        tdiv(class="container"):
          tdiv(class="columns"):
            tdiv(class="column is-half"):
              h1(class="title"): text"Szachy"
              h2(class="subtitle"):
                if winner.isSome:
                  text"Wygrał "
                  case winner.get
                  of ctBlue:
                    span(class="has-text-info"): text"niebieski"
                  of ctRed:
                    span(class="has-text-danger"): text"czerwony"
                  text" gracz!"
                else:
                  text"Teraz kolej "
                  if currentTeam == ctBlue:
                    span(class="has-text-info"): text"niebieskiego"
                  else:
                    span(class="has-text-danger"): text"czerwonego"
                  text" gracza"
              button(class = if winner == some(ctRed): "button is-danger is-medium" elif winner == some(ctBlue): "button is-info is-medium" else: "button is-dark is-medium"):
                text"Zacznij od nowa"
                proc onClick = resetChess()
            tdiv(class="column"):
              tdiv:
                for y in 0 ..< 8:
                  tdiv(class="is-flex"):
                    for x in 0 ..< 8:
                      let here = (x, y)
                      let bgColor =
                        if selectedPos in pieces and (here == selectedPos or validDest(here)):
                          if pieces[selectedPos].team == ctBlue: "is-info"
                          else: "is-danger"
                        elif hoveredPos in pieces and (here == hoveredPos or validDest(here)):
                          if pieces[hoveredPos].team == ctBlue: "is-info"
                          else: "is-danger"
                        elif x mod 2 == y mod 2:
                          "is-dark"
                        else:
                          "is-white"
                      a(class = "button is-medium " & bgColor):
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

# proc renderSnake: VNode =
#   result = buildHtml:
#     section(class="hero is-medium is-light"):
#       tdiv(class="hero-body"):
#         tdiv(class="container"):
#           tdiv(class="columns"):
#             tdiv(class="column is-half"):
#               h1(class="title"): text"Snake"
#               h2(class="subtitle"): text"Klasyczna gra"
#               tdiv:
#                 if snake.timeout == nil:
#                   button(class="button is-medium is-success"):
#                     text"Start"
#                     proc onClick = snake.start()
#                 else:
#                   button(class="button is-medium is-danger"):
#                     text"Pauza"
#                     proc onClick = snake.pause()
#               br()
#               tdiv:
#                 button(class="button is-medium is-dark"):
#                   text"Zacznij od nowa"
#                   proc onClick = snake.resetState()
#             tdiv(class="column is-half"):
#               renderSnakeBoard()

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
    section(class="hero is-medium is-light"):
      tdiv(class="hero-body"):
        tdiv(class="container"):
          tdiv(class="columns"):
            tdiv(class="column is-half"):
              h1(class="title"): text"Zadania"
              h2(class="subtitle"): text"Interaktywna lista zadań"
            tdiv(class="column is-half"):
              tdiv(class="box"):
                input(class="input", id="todoInput", placeholder="Dodaj nowe zadanie..."):
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
                      # for idx in countdown(todoItems.high, todoItems.low):
                        # let item = todoItems[idx]
                      proc renderTodoItem(item: TodoItem): VNode =
                        buildHtml li(id=item.id):
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
                                discard setTimeout(cb, 500)
                      for item in todoItems:
                        renderTodoItem item

setRenderer proc: VNode =
  result = buildHtml:
    tdiv:
      # nav(class="navbar is-dark", role="navigation", aria-label="main-navigation"):
      #   tdiv(class="navbar-brand")
      #   a(role="button", class="navbar-burger burger", aria-label="menu", aria-expanded="false"):
      #     span(aria-hidden="true")
      #     span(aria-hidden="true")
      #     span(aria-hidden="true")
      #   tdiv(class="navbar-menu"):
      #     tdiv(class="navbar-end"):
      #       a(class="navbar-item", href="mailto: dawidkotlin@gmail.com"): text"dawidkotlin@gmail.com"
      ## Welcome
      section(class="hero is-large is-primary"):
        tdiv(class="hero-body"):
          tdiv(class="container"):
            h1(class="title"):
              text"Dawid Kotliński"
            h2(class="subtitle"):
              text"Jest to strona prezentująca moje projekty programistyczne."
            tdiv(class="content"):
              a(class="button is-primary", href="mailto: dawidkotlin@gmail.com"): text"Email: dawidkotlin@gmail.com"
      renderStatichop()
      renderNetchess()
      renderLisp()
      renderNationDetect()
      renderGenderDetect()
      renderLocalChess()
      # renderSnake()
      renderTodoList()