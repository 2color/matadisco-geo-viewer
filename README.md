# Matadisco geo viewer

This is a fork of the [generic Matadisco viewer] that renders records containing
geographic coordinates on a map. [Matadisco] records are metadata published on
[ATProto]. This viewer displays those that include a
`geometry.coordinates` field — a GeoJSON-style polygon array, e.g.:

```json
"coordinates": [
  [
    [29.0881961272749, 30.7162611960672],
    [29.0673739813091, 29.7260643413105],
    [30.2013482340558, 29.7034877936209],
    [30.2335518130996, 30.6927743663341],
    [29.0881961272749, 30.7162611960672]
  ]
]
```

The web viewer gets Matadisco records from the past few minutes from
[Bluesky's Jetstream] and then keeps updating in real-time, plotting each
record's footprint on the map.

Currently the only publisher is the [sentinel-to-atproto] Cloudflare worker. So
you'll see a lot of satellite image footprints being displayed.

## Demo

See it in action at https://2color.github.io/matadisco-geo-viewer/.

## Running locally

### Web viewer

Install dependencies:

```
    npm install
```

Start the development server with hot module replacement:

```
    npm run dev
```

You can now access the viewer at http://localhost:3000/

The dev server provides instant updates when you modify CSS or JavaScript files.

### CLI viewer

The CLI viewer just displays the metadata records as they arrive.

```
    npm install
    npm start
```

## Building for production

To build an optimized production bundle:

```
    npm run build
```

The output will be in the `dist/` directory, ready to deploy to any static hosting service.

To preview the production build locally:

```
    npm run preview
```

## Development

### Tech Stack

- **Vanilla JavaScript** (ES modules) - No framework dependencies
- **[Vite]** - Fast dev server with hot module replacement
- **[Tailwind CSS]** - Utility-first CSS framework
- **[ATProto Jetstream]** - Real-time event streaming from Bluesky

### Code Formatting

Format code with Biome:

```
    npm run fmt
```

## License

This project is licensed under either of

- Apache License, Version 2.0, ([LICENSE-APACHE] or https://www.apache.org/licenses/LICENSE-2.0)
- MIT license ([LICENSE-MIT] or https://opensource.org/licenses/MIT)

at your option.

[Matadisco]: https://github.com/vmx/matadisco/
[generic Matadisco viewer]: https://github.com/vmx/matadisco-viewer/
[ATProto]: https://atproto.com/
[ATProto Jetstream]: https://docs.bsky.app/blog/jetstream
[Bluesky's Jetstream]: https://docs.bsky.app/blog/jetstream
[sentinel-to-atproto]: https://github.com/vmx/sentinel-to-atproto/
[Vite]: https://vitejs.dev/
[Tailwind CSS]: https://tailwindcss.com/
[LICENSE-APACHE]: ./LICENSE-APACHE
[LICENSE-MIT]: ./LICENSE-MIT
