import kaboom from "kaboom";

kaboom();

const PLAYER_SPEED = 350;
loadSprite("Doodle", "sprites/Doodle.png");
loadSprite("Fondo", "sprites/fondo.png");

scene("game", () => {
  layers(["bg", "game", "ui"], "game");

  //Jugador
  var player = add([
    rect(50, 50),
    origin("center"),
    layer("game"),
    sprite("Doodle"),
    pos(width() / 2, height() / 2),
    body(),
    area(),
  ]);

  let value = 0;
  let maxPosY = player.pos.y;
  let lastPosY = player.pos.y;
  let highestPlatformY = height();
  //Se crean las primeras plataformas
  for (let i = 0; i < 15; i++) {
    createPlatform();
  }
  //Fondo blanco
  add([
    layer("bg"),
    sprite("Fondo", { width: width() }, { height: height() }),
    fixed(),
  ]);
  //puntaje (Altura alcanzada)
  let score = add([
    text("0"),
    layer("ui"),
    fixed(),
    pos(50, 50),
    {
      value: 0,
    },
  ]);

  function createPlatform() {
    let newPlatform = add([
      rect(120, 24),
      origin("center"),
      layer("game"),
      color(rgb(1, 1, 1)),
      //solid(),
      area(),
      pos(
        rand(60, width() - 60),
        rand(highestPlatformY - 40, highestPlatformY - 150)
      ),
      "platform",
    ]);
    if (newPlatform.pos.y < highestPlatformY) {
      highestPlatformY = newPlatform.pos.y;
    }
  }
  //para debug, con un click del mouse se da un salto
  mouseClick(() => {
    player.jump(800);
  });
  //Si toca una plataforma, salta automaticamente
  player.action(() => {
    if (player.isGrounded()) {
      player.jump(800);
    }
  });
  //movimientos derecha izquierda
  keyDown("left", () => {
    player.move(-PLAYER_SPEED, 0);
  });

  keyDown("right", () => {
    player.move(PLAYER_SPEED, 0);
  });
  //
  player.action(() => {
    //Actualizar score
    if (player.pos.y < value) {
      value = Math.floor(player.pos.y);
      score.value = value * -1;
      score.text = value * -1;
    }

    lastPosY = player.pos.y;
    maxPosY = Math.min(lastPosY, maxPosY);
    camPos({ x: width() / 2, y: player.pos.y });

    // Manejo de boundaries
    if (player.pos.x > width() + player.width / 2) {
      player.pos.x = -player.width / 2;
    }
    if (player.pos.x < -player.width / 2) {
      player.pos.x = width() + player.width / 2;
    }

    // manejo de perder

    debug.log(
      `Max: ${Math.floor(maxPosY)} Cur: ${Math.floor(
        lastPosY
      )}, h : ${height()}`
    );

    if (Math.abs(maxPosY - lastPosY) > height() * 2) go("game over");
  });
  //Las plataformas son solidas solo si estan debajo del jugador
  onUpdate("platform", (b) => {
    if (player.isFalling()) b.solid = b.pos.y > player.pos.y;
  });
  //Las plataformas que se alejan mucho del jugador desaparecen
  action("platform", (platform) => {
    if (platform.pos.y > player.pos.y + height()) {
      destroy(platform);
      createPlatform();
    }
  });
});

scene("game over", () => {
  add([text("game over")]);
});

go("game");
