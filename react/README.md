## Installation

```bash
npm install @ballet/react
```

## Usage

**example.tsx**

```tsx
import { Field, Form, Label, Input, Button } from "@ballet/react";

export const Form: FC = () => (
  <Form>
    <Field>
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" />
    </Field>
    <Field>
      <Label htmlFor="password">Password</Label>
      <Input type="password" id="password" />
    </Field>
    <Button type="submit">Save</Button>
  </Form>
);
```
