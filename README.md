# Reproduction Steps
## Day1

### Install
- npx create-next-app@latest

Selection (suggested default values):
```
√ What is your project named? ... next-playground
√ Would you like to use TypeScript with this project? ... Yes
√ Would you like to use ESLint with this project? ... Yes
√ Would you like to use Tailwind CSS with this project? ... Yes
√ Would you like to use `src/` directory with this project? ... No
? Use App Router (recommended)? » Yes
? Would you like to customize the default import alias? » No 
```

- Run: "npm run dev"

### Look around
- Page.tsx => Replace Home function by "&lt;div&gt;test&lt;/div&gt;"
- Layout.tsx => Replace "title" in metadata-export

### Create a new site 
- Create a folder "/app/demopage"
- Put a "page.tsx" into the folder, return "&lt;div&gt;Second div&lt;/div&gt;"
- Put a "layout.tsx" into the same folder // <-- **the closest layout.tsx will be used for the page.tsx**
- Put an additional headline in "layout.tsx" (you should see both elements)
- Fix the "global.css" path in the "layout.tsx" ("../" <-- for one folder more)

### Multi segment path (colocation)
- Create a folder "/app/demopage/subpage" and put a page.tsx inside

### Folders that are not part of route (route groups)
- Rename the folder "demopage" to "(demopage)". You get a route "/subpage" then without the first folder

### Intercepting a route: (route paramter)
- Create a folder below your subpage that is named "[id]"
- Accept as a parameter of your page-function "args : { params: { id: number } }"
    - Which means: arguments, that have a property "params", which have a property "id" of type "number"
- Access the parameters in the markup like: "{args.params.id}"
- Call the route "../path/<youridfoler>" and you'll get the number in "youridfolder" in the params

### Components
- Create a folder /app/components
- Create a new file "demo-component.tsx" and immitate the content of a page (function ...)
- Go into your page "demopage/subpage/page.tsx"
- Import in your page.tsx the component:

```JSX
import DemoComponent from '../../components/demo-component'
```

Then use the importet component like an HTML-element in your markup:

```JSX
<DemoComponent />
```

### Components: Pass children
- Extend your component in a way that you accept react-nodes as children and use the parameter in your markup:

```JSX
export default function DemoComponent({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>Demo Control: {children}</div>    
  )
}
```

- Then change your page.tsx in a way, that you pass a sub-element to the component:

```JSX
<DemoComponent>
  ABC
</DemoComponent>
```

### Using state + click handler
- Use state to handle changes within a component that requires re-rendering
- Import "useState" from react
- The line [count, setCount] = useState(0) means the following
  - count: Variable which countains the current state (value)
  - setCount: Update method. Use this, if you want to change "count"
  - useState: returns the former ones, sets the default value of count to "0"
- Use "{count}" in your markup.
- The very first line "use client" is required to tell nextjs that the handler will be executed on the client (so when generating this file it has to deliver logic to the client)

```JSX
'use client'

import { useState } from 'react'

export default function SimpleButton() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}
```