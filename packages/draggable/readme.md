# @dflex/draggable

> Draggable is a native component written in pure JS works for Web and Mobile

```bash
npm install @dflex/draggable
```

<p align="center">
    <img src="https://raw.githubusercontent.com/jalal246/dflex/master/packages/draggable/img/draggable.gif" alt="show how dragabble works" />
</p>

DFlex draggable is the simplest solution to create JavaScript draggable
elements. No need for special tutorial and thinking about implementation
complexity or even migration to different technologies for different frameworks.
It can be used with any JavaScript frameworks React, Vue, Angular.

## API

```js
import { store, Draggable } from "@dflex/draggable";
```

### Registry

Register draggable element in draggable store:

```ts
store.register({ id: string, element: Node });
```

### Draggable instance

Create draggable instance `onmousedown`:

```ts
const draggable = new Draggable(id: string, {x: event.clientX, y: event.clientY});
```

Move element `onmousemove`

```ts
draggable.dragAt(event.clientX, event.clientY);
```

End Dragging `onmouseup`

```ts
draggable.endDragging();
```

#### Examples

- [Full React example](https://github.com/jalal246/dflex/tree/master/packages/draggable/playgrounds/dflex-react-draggable)

- [Full Vue example](https://github.com/jalal246/dflex/tree/master/packages/draggable/playgrounds/dflex-vue-draggable)

Contributes feel free to apply PR for another frameworks.

## Test

```sh
yarn test draggable
```

## License

This package is licensed under the [GPL-3.0 License](https://github.com/jalal246/dflex/tree/master/packages/draggable/LICENSE)
