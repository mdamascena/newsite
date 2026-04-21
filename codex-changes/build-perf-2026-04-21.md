# Build/Performance changes - 2026-04-21

Purpose: improve compile/build stability and reduce unnecessary work, while keeping rollback simple.

Files changed:
- `components/clt/MainCLT.jsx`
- `components/clt/widgets/WidgetParcela.jsx`
- `components/clt/widgets/WidgetSimulador.jsx`
- `components/conta/AcompanhamentoLayout.jsx`
- `components/geral/footer/Footer.jsx`
- `components/geral/header/Header_branco.jsx`
- `pages/conta/acompanhamento/index.jsx`
- `pages/conta/acompanhamento/home/index.jsx`
- `pages/conta/acompanhamento/contrato/index.jsx`
- `pages/conta/acompanhamento/perfil/index.jsx`
- `components/geral/Sidebar.jsx`
- `components/geral/section/Analise.jsx`
- `components/ui/highlighter.tsx`
- `next.config.js`
- `tailwind.config.js`
- `tsconfig.json`

What changed:
1. Moved the acompanhamento layout usage out of `pages/.../index.jsx` imports and into a component file under `components/conta/`.
2. Replaced `next/navigation` usage in the Pages Router flow with `next/router`.
3. Reduced TypeScript checking scope by removing `**/*.js` and `**/*.jsx` from `tsconfig.json` `include`.
4. Narrowed Tailwind's NextUI scan to the specific NextUI theme component files used by the app (`button`, `modal`, `scroll-shadow`) and aligned local globs to include `ts`/`tsx`.
5. Disabled lint execution during `next build`; lint is still available through `npm run lint`.
6. Replaced `useLayoutEffect` with `useEffect` in `components/ui/highlighter.tsx` to avoid SSR warnings on the CLT route in development.
7. Switched the CLT route's immediate icon imports from `react-icons/*` to `@react-icons/all-files/*` in the CLT page, widgets, header, and footer to reduce module fan-out in development. The `Analise` section kept `react-icons/bs` because the installed `@react-icons/all-files` package does not contain all three Bootstrap icon files used there.

Rollback notes:
1. Restore `pages/conta/acompanhamento/home/index.jsx`, `contrato/index.jsx`, and `perfil/index.jsx` to import `../index.jsx`.
2. Restore `pages/conta/acompanhamento/index.jsx` to the inline layout implementation with `SideBar`.
3. Remove `components/conta/AcompanhamentoLayout.jsx`.
4. Restore `components/geral/Sidebar.jsx` to use `next/navigation` and `usePathname`.
5. Re-add `**/*.js` and `**/*.jsx` to `tsconfig.json` `include`.
6. Restore the broader NextUI path in `tailwind.config.js` if any missing component styles appear.
7. Remove the `eslint.ignoreDuringBuilds` block from `next.config.js` if you want lint to block production builds again.
8. Switch `components/ui/highlighter.tsx` back to `useLayoutEffect` if you need the old paint timing behavior.
9. Restore the previous `react-icons/*` imports if you want to undo the granular icon import optimization.

Notes:
- `components/clt/MainCLT.jsx` and `components/clt/widgets/WidgetParcela.jsx` already had local changes in the working tree before this work. I only adjusted their icon import lines as part of the route-specific optimization.
