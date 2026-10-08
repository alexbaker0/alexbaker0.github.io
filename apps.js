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
        desc: "Plan your finances to support the life you want",
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
    group: "Graphics",
    blurb: "3D graphics and rendering",
    items: [
      {
        name: "The Juggler",
        desc: "Eric Graham's famous 1986 Amiga ray tracer, running his original scene",
        tags: ["Ray tracing", "Retro"],
        url: "/juggler/",
        status: "live",
        icon: "juggler",
      },
      {
        name: "MRI Viewer",
        desc: "Explore MRI scans in 3D: slice through them in three planes or rotate a volume rendering.",
        tags: ["Medical imaging", "3D"],
        url: "/mri-viewer/",
        status: "live",
        icon: "mri",
      },
    ],
  },
  {
    group: "Self taught AI models",
    blurb: "Agents trained from scratch.",
    items: [
      {
        name: "AlexZero Connect Four",
        desc: "Model learned by playing itself",
        tags: ["AlphaZero", "Game"],
        url: "/connect4/",
        status: "live",
        icon: "connect4",
      },
      {
        name: "AlexZero Othello",
        desc: "Self trained model",
        tags: ["AlphaZero", "Game"],
        url: "/othello/",
        status: "live",
        icon: "othello",
      },
      {
        name: "Thro' the Wall",
        desc: "The ZX Spectrum classic",
        tags: ["PPO", "Retro"],
        url: "/thro-the-wall/",
        status: "live",
        icon: "breakout",
      },
      {
        name: "Tic-Tac-Toe Zero",
        desc: "You know this one",
        tags: ["AlphaZero", "Game"],
        url: "/tictactoe/",
        status: "live",
        icon: "tictactoe",
      },
    ],
  },
];
