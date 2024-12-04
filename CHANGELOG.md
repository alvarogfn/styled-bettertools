# styled-bettertools

## 0.5.0

### Minor Changes

- [#48](https://github.com/alvarogfn/styled-bettertools/pull/48) [`a46f637`](https://github.com/alvarogfn/styled-bettertools/commit/a46f637cdb4d1de100d098650b0cc1883e13cf4a) Thanks [@alvarogfn](https://github.com/alvarogfn)! - add nested paths autocomplete with dot notation:

  ```ts
  // given the following type:
  type Props = {
    theme: {
      colors: {
        primary: string;
        secondary: string;
      };
    };
    active: true;
  };
  // autocomplete will give you the following options:
  // theme.colors.primary
  // theme.colors.secondary
  ```

## 0.4.1

### Patch Changes

- [#38](https://github.com/alvarogfn/styled-bettertools/pull/38) [`2cd2246`](https://github.com/alvarogfn/styled-bettertools/commit/2cd22460a5d51bf70412849faee111d1042b2387) Thanks [@dependabot](https://github.com/apps/dependabot)! - chore(deps-dev): bump @eslint/js from 9.12.0 to 9.14.0

## 0.4.0

### Minor Changes

- [#24](https://github.com/alvarogfn/styled-bettertools/pull/24) [`c1cdc3d`](https://github.com/alvarogfn/styled-bettertools/commit/c1cdc3daa235094be82cae7dbacc1cbb768fd28a) Thanks [@alvarogfn](https://github.com/alvarogfn)! - Add deep-prop, deep-theme, deep-palette (thanks [@jtmthf](https://github.com/jtmthf))

## 0.3.0

### Minor Changes

- [#13](https://github.com/alvarogfn/styled-bettertools/pull/13) [`2553d5b`](https://github.com/alvarogfn/styled-bettertools/commit/2553d5bd465af05c21c9cd8c667274ff1db6ab94) Thanks [@alvarogfn](https://github.com/alvarogfn)! - Remove dot-prop as a dependency

## 0.2.2

### Patch Changes

- [#11](https://github.com/alvarogfn/styled-bettertools/pull/11) [`c2c9653`](https://github.com/alvarogfn/styled-bettertools/commit/c2c965340b9a8616f2336e60925da1c3885ed4a3) Thanks [@alvarogfn](https://github.com/alvarogfn)! - add commonjs distributables

## 0.2.1

### Patch Changes

- [#9](https://github.com/alvarogfn/styled-bettertools/pull/9) [`4a2bb0a`](https://github.com/alvarogfn/styled-bettertools/commit/4a2bb0ae271b3ded7e25899ecf3e20a1c30bb73f) Thanks [@alvarogfn](https://github.com/alvarogfn)! - Improve Documentation and fix some types

## 0.2.0

### Minor Changes

- [#7](https://github.com/alvarogfn/styled-bettertools/pull/7) [`41f4a91`](https://github.com/alvarogfn/styled-bettertools/commit/41f4a9108b3bf9a95b0e34b23b5100181e00b371) Thanks [@alvarogfn](https://github.com/alvarogfn)! - add possibility to pass a object to withProp and make composition with objects

### Patch Changes

- [#7](https://github.com/alvarogfn/styled-bettertools/pull/7) [`41f4a91`](https://github.com/alvarogfn/styled-bettertools/commit/41f4a9108b3bf9a95b0e34b23b5100181e00b371) Thanks [@alvarogfn](https://github.com/alvarogfn)! - Rewrites the types of utility functions to improve compatibility with different CSS-IN-JS libraries. Also removes csstype as a dependency.

## 0.1.2

### Patch Changes

- [#3](https://github.com/alvarogfn/styled-bettertools/pull/3) [`5cb775f`](https://github.com/alvarogfn/styled-bettertools/commit/5cb775f102ba8c2d80140f8114c9c9c68433aef0) Thanks [@alvarogfn](https://github.com/alvarogfn)! - Remove styled-components and emotion as dependencies

## 0.1.1

### Patch Changes

- [`af55cd7`](https://github.com/alvarogfn/styled-bettertools/commit/af55cd70715ff4b3017bf03ff004123cbafc65e2) Thanks [@alvarogfn](https://github.com/alvarogfn)! - fix: add typescript-transform-paths to fix file imports in dist

## 0.1.0

### Minor Changes

- [`5aa3991`](https://github.com/alvarogfn/styled-bettertools/commit/5aa39913c4fefb6c45451a4ddb2b4dcc4b38ec49)
  Thanks [@alvarogfn](https://github.com/alvarogfn)!

  - Rewrite all tools in typescript
  - Replace jest by vitest as unit testing framework
  - Add changesets as a way to manage releases
  - Add more eslint rules to maintain project quality

- [`ec69d90`](https://github.com/alvarogfn/styled-bettertools/commit/ec69d9009b8064d5229f1d9d61f33729485d176f) Thanks [@alvarogfn](https://github.com/alvarogfn)! - Create a fork of styled-tools and restart the changelog and releases.
