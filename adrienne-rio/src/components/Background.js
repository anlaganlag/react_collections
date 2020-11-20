import React, { useState, useEffect } from "react";
import P5Wrapper from "react-p5-wrapper";
import Matter from "matter-js";

function sketch(p) {
  let balls = [];
  let fall;
  let engine;
  let world;
  let mouseBoundary;
  let ballCount = 0.06 * window.innerWidth;

  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;

  function Ball(x, y, world) {
    this.options = {
      inertia: Infinity,
      restitution: 0.3,
      friction: 0,
      frictionAir: 0,
      frictionStatic: 0,
    };
    this.w = 20;
    this.spaceAdded = false;
    this.body = Bodies.circle(x, y, this.w / 2, this.options);
    this.fill = p.random(-1, 1) < 0 ? "#00adb5" : "#fc5185";
    this.boundary = 20;
    World.add(world, this.body);
    Matter.Body.setVelocity(this.body, {
      x: p.random(-2, 2),
      y: p.random(-2, 2),
    });
    this.body.frictionAir = 0;
    this.body.friction = 0;

    this.show = function () {
      p.noStroke();
      p.fill(this.fill);
      p.ellipse(this.body.position.x, this.body.position.y, this.w, this.w);
    };

    this.checkBoundary = function () {
      if (this.body.position.x > p.width + this.boundary) {
        Matter.Body.setPosition(this.body, { x: 0, y: this.body.position.y });
      }
      if (this.body.position.x < -this.boundary) {
        Matter.Body.setPosition(this.body, {
          x: p.width,
          y: this.body.position.y,
        });
      }
      if (this.body.position.y > p.height + this.boundary) {
        Matter.Body.setPosition(this.body, { x: this.body.position.x, y: 0 });
      }
      if (this.body.position.y < -this.boundary) {
        Matter.Body.setPosition(this.body, {
          x: this.body.position.x,
          y: p.height,
        });
      }
    };
  }

  p.setup = function () {
    p.createCanvas(p.windowWidth, document.body.scrollHeight);
    engine = Engine.create();
    world = engine.world;
    engine.world.gravity.y = 0;

    // limit the amount of balls based on the screen width
    for (var i = 0; i < ballCount; i++) {
      let ball = new Ball(p.random(p.width), p.random(p.height), world);
      balls.push(ball);
    }

    mouseBoundary = Bodies.circle(p.mouseX, p.mouseY, 50, {
      restitution: 0.4,
      friction: 0,
      frictionAir: 0,
    });

    World.add(world, mouseBoundary);
    Matter.Resolver._restingThresh = 0.001;
    Engine.run(engine);
  };

  p.draw = function () {
    p.background("#f0f5f9");

    // p.rect(0, p.height - 20, p.width, 20);
    Matter.Body.setPosition(mouseBoundary, { x: p.mouseX, y: p.mouseY });

    for (var i = 0; i < balls.length; i++) {
      if (fall) {
        balls[i].body.restitution = 0.3;
      } else {
        balls[i].body.restitution = 1;
      }
      balls[i].show();
      balls[i].checkBoundary();
    }
  };

  let interval;
  p.mousePressed = function () {
    if (p.mouseIsPressed)
      interval = setInterval(
        () => balls.push(new Ball(p.mouseX, p.mouseY, world)),
        80
      );
  };

  p.mouseClicked = function () {
    balls.push(new Ball(p.mouseX, p.mouseY, world));
  };

  p.mouseReleased = function () {
    clearInterval(interval);
  };
}

export default function Background(props) {
  return (
    <div style={{ position: "absolute", zIndex: -1 }}>
      <P5Wrapper sketch={sketch} />
    </div>
  );
}
