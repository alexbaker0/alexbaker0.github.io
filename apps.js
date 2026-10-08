// The app list. To add an app, add one entry here.
// status: "live" (clickable) or "soon" (shown greyed, not clickable).
// url: relative paths like "/boids/" resolve to <username>.github.io/boids/,
// which GitHub Pages serves from a repo called "boids" (paths are case-sensitive).
window.APPS = [
  {
    group: "Personal finance",
    blurb: "Hosted on Railway. Sign in with a code sent to your email.",
    items: [
      {
        name: "Freedom Planner",
        desc: "Plan your financial freedom. Model cash, ISAs, pensions and property over your lifetime, then try what-if scenarios to see how to get there sooner.",
        tags: ["UK", "Planning"],
        url: "https://freedom-planner-production.up.railway.app/",
        status: "live",
        icon: "finance",
      },
    ],
  },
  {
    group: "Simulations & toys",
    blurb: "Things that run in your browser.",
    items: [
      {
        name: "The Juggler",
        desc: "Eric Graham's famous 1986 Amiga ray tracer, running his original scene in your browser. Spin the camera or edit the scene file.",
        tags: ["Ray tracing", "Retro"],
        url: "/juggler/",
        status: "live",
        icon: "juggler",
      },
      {
        name: "Boids",
        desc: "A flock of birds from three simple rules: separation, alignment and cohesion. In 2D and 3D.",
        tags: ["Simulation", "3D"],
        url: "/boids/",
        status: "live",
        icon: "boids",
      },
      {
        name: "Mandelbrot & Julia Explorer",
        desc: "Zoom forever into the Mandelbrot set, and see the matching Julia set for any point.",
        tags: ["Fractals", "Maths"],
        url: "/mandelbrot/",
        status: "live",
        icon: "mandelbrot",
      },
      {
        name: "Double Pendulum",
        desc: "A chaos bench. Two pendulums that start almost the same soon end up nowhere near each other.",
        tags: ["Physics", "Chaos"],
        url: "/double-pendulum/",
        status: "live",
        icon: "pendulum",
      },
      {
        name: "Self-Sorting Cells",
        desc: "Sorting algorithms rebuilt as independent cells, after Michael Levin's experiments in basal intelligence.",
        tags: ["Biology", "Algorithms"],
        url: "/Self-sorting-cells/",
        status: "live",
        icon: "cells",
      },
    ],
  },
  {
    group: "AI that taught itself",
    blurb: "Agents trained from scratch by self-play. Play against them.",
    items: [
      {
        name: "AlexZero Connect Four",
        desc: "An AlphaZero-style agent that learned Connect Four purely by playing against itself. It runs entirely in your browser.",
        tags: ["AlphaZero", "Game"],
        url: "/connect4/",
        status: "live",
        icon: "connect4",
      },
      {
        name: "AlexZero Othello",
        desc: "The same self-play recipe applied to Othello. It won 14 of 20 test games against a classic alpha-beta player. Includes a watch-it-play demo.",
        tags: ["AlphaZero", "Game"],
        url: "/othello/",
        status: "live",
        icon: "othello",
      },
      {
        name: "Thro' the Wall",
        desc: "A remake of the ZX Spectrum classic. Play it yourself, or watch an AI that taught itself to clear the whole wall.",
        tags: ["PPO", "Retro"],
        url: "/thro-the-wall/",
        status: "live",
        icon: "breakout",
      },
      {
        name: "Tic-Tac-Toe Zero",
        desc: "Where it started. A tiny network trained from scratch in NumPy. Unbeatable on Hard, and you can watch how it weighs each square.",
        tags: ["AlphaZero", "Game"],
        url: "/tictactoe/",
        status: "live",
        icon: "tictactoe",
      },
    ],
  },
];
