import { Story, StoryContext } from "@storybook/react";
import {
  BrowserRouter, MemoryRouter, Route, Routes,
} from "react-router-dom";

export const RouterDecorator = (StoryComponent: Story, context: StoryContext) => {
  const { parameters: { router } } = context;

  if (!router) {
    return (
      <BrowserRouter>
        <StoryComponent />
      </BrowserRouter>
    );
  }

  const { path, route } = router;

  return (
    <MemoryRouter initialEntries={[encodeURI(route)]}>
      <Routes>
        <Route path={path} element={<StoryComponent />} />
      </Routes>
    </MemoryRouter>
  );
};
