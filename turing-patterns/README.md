# Turing Pattern Lab

A small, self-contained browser simulation of **Turing patterns** using
the Gray–Scott reaction–diffusion model.

Live: https://alexbaker0.github.io/turing-patterns/

The app runs entirely in your browser. It has no external dependencies,
needs no internet connection and needs no installation.

## Run it

Open the live link above, or download `index.html` and open it in a modern
browser (Chrome, Edge, Firefox or Safari). The one file holds the markup,
styling and JavaScript.

## What it simulates

Two chemicals, **U** and **V**, diffuse across a 2D surface and react with
each other. The Gray–Scott equations are:

$$
\frac{\partial U}{\partial t} = D_U \nabla^2 U - UV^2 + F(1 - U)
$$

$$
\frac{\partial V}{\partial t} = D_V \nabla^2 V + UV^2 - (F + k)V
$$

- $U$ and $V$ are the local concentrations of the two chemicals.
- $D_U$ and $D_V$ are their diffusion rates.
- $F$ is the feed rate, which replenishes U.
- $k$ is the kill rate, which removes V.
- $UV^2$ is the reaction term: it uses up U and makes V.

Different feed and kill rates give spots, stripes, worms, coral-like
mazes and more. Simple local rules give intricate large-scale forms.

## Presets

| Preset  | F     | k     | What you see                                   |
| ------- | ----- | ----- | ---------------------------------------------- |
| Spots   | 0.025 | 0.060 | Spots that split and multiply to fill the field |
| Stripes | 0.030 | 0.057 | Bands that fold into a maze                     |
| Worms   | 0.058 | 0.065 | Separate worm-like strands                      |
| Coral   | 0.055 | 0.062 | Branching coral-like growth                     |

## Controls

| Control                         | What it does                                                   |
| ------------------------------- | -------------------------------------------------------------- |
| **Spots / Stripes / Worms / Coral** | Loads a preset's parameters and starting conditions.       |
| **Feed rate F**                 | How fast U is replenished.                                     |
| **Kill rate k**                 | How fast V is removed.                                         |
| **Simulation speed**            | Simulation steps per screen update.                            |
| **Pause / Play**                | Pauses or resumes the simulation.                              |
| **Restart**                     | Resets the current preset and its starting conditions.         |
| **Add seeds**                   | Drops 20 random disturbances into the field.                   |
| **Click or drag on the pattern** | Adds V under the pointer.                                     |

The diagnostics show the step count and summary figures for V and the
reaction term. They help you see how the simulated system changes; they
are not measurements of a real chemical experiment.

If your system asks for reduced motion, the app opens paused. Press
**Play** to start it.

## Numerical approach

The grid is 240 × 150 cells with periodic boundaries: each edge wraps
round to the opposite edge. The Laplacian uses the five-point stencil with
cell spacing 1:

$$
\nabla^2 A \approx A_{\text{left}} + A_{\text{right}} + A_{\text{up}} + A_{\text{down}} - 4A_{\text{centre}}
$$

Concentrations are advanced with explicit (forward Euler) time steps.

| Setting            | Value     |
| ------------------ | --------- |
| Grid               | 240 × 150 |
| Time step `dt`     | 1.0       |
| U diffusion `D_U`  | 0.16      |
| V diffusion `D_V`  | 0.08      |

The explicit scheme is stable for diffusion while $4\,D_U\,dt < 1$. Here
that value is 0.64.

## Tips

- Start with a preset, then make small changes to **F** and **k**.
- Change one parameter at a time to see what each one does.
- Let it run: some patterns take a while to settle.
- Pause on an interesting shape, then add seeds or click to see how it
  responds.

## Limitations

This is an educational, qualitative simulation. It uses a coarse grid,
no physical units and parameters chosen for visual exploration. It does
not model a calibrated chemical process, and not every parameter
combination gives a stable pattern.
