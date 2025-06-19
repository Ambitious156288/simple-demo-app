import { Box } from "@mantine/core";
import type { HighlightArea } from "../../types/commentType";

type Props = {
  area: HighlightArea;
};

export const ImageHighlight = ({ area }: Props) => (
  <Box
    // @TODO: Replace inline styles with Mantine's styling system (e.g. useStyles).
    // This is a temporary solution — first time using the library.
    style={{
      position: "absolute",
      top: area.y,
      left: area.x,
      width: area.width,
      height: area.height,
      border: "2px solid red",
      pointerEvents: "none",
      borderRadius: 4,
    }}
  />
);
