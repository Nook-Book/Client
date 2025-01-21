import { Text } from "react-native";
import { markdownStyle } from "./MarkdownStyle";

export const colorMap: { [key: string]: string } = {
  D: "#838383",
  R: "#DF1515",
  O: "#DF5E15",
  Y: "#DFB315",
  G: "#43AE1D",
  B: "#2081EC",
  P: "#7F35BA",
};

export const backgroundColorMap: { [key: string]: string } = {
  D: "rgba(131, 131, 131, 0.15)",
  R: "rgba(223, 21, 21, 0.15)",
  O: "rgba(223, 94, 21, 0.15)",
  Y: "rgba(223, 179, 21, 0.15)",
  G: "rgba(67, 174, 29, 0.15)",
  B: "rgba(32, 129, 236, 0.15)",
  P: "rgba(127, 53, 186, 0.15)",
};

export const RenderRules = {
  heading1: (node: any, children: any) => (
    <Text key={`heading1-${node.key}`} style={markdownStyle.heading1}>
      {children}
    </Text>
  ),
  heading2: (node: any, children: any) => (
    <Text key={`heading2-${node.key}`} style={markdownStyle.heading2}>
      {children}
    </Text>
  ),
  heading3: (node: any, children: any) => (
    <Text key={`heading3-${node.key}`} style={markdownStyle.heading3}>
      {children}
    </Text>
  ),
  text: (node: any) => {
    const { content } = node;
    const regex = /(T[A-Z]\[)(.*?)\]|(B[A-Z]\[)(.*?)\]/g;

    let match;
    const parts: JSX.Element[] = [];
    let lastIndex = 0;
    let uniqueId = 0;

    while ((match = regex.exec(content)) !== null) {
      const [
        _,
        textColorMatch,
        textColorContent,
        bgColorMatch,
        bgColorContent,
      ] = match;

      const matchStart = match.index;
      const matchEnd = regex.lastIndex;
      const randomKey = Math.random().toString(36).slice(2, 8);

      if (matchStart > lastIndex) {
        parts.push(
          <Text key={`text-${uniqueId}-${randomKey}`}>
            {content.substring(lastIndex, matchStart)}
          </Text>
        );
        uniqueId++;
      }

      if (textColorMatch) {
        const colorKey = textColorMatch[1];
        parts.push(
          <Text
            key={`textColor-${colorKey}-${uniqueId}-${randomKey}`}
            style={{ color: colorMap[colorKey] }}
          >
            {textColorContent}
          </Text>
        );
        uniqueId++;
      } else if (bgColorMatch) {
        const backgroundKey = bgColorMatch[1];
        parts.push(
          <Text
            key={`bgColor-${backgroundKey}-${uniqueId}-${randomKey}`}
            style={{ backgroundColor: backgroundColorMap[backgroundKey] }}
          >
            {bgColorContent}
          </Text>
        );
        uniqueId++;
      }

      lastIndex = matchEnd;
    }

    if (lastIndex < content.length) {
      parts.push(
        <Text
          key={`text-${uniqueId}-${Math.random().toString(36).slice(2, 8)}`}
        >
          {content.substring(lastIndex)}
        </Text>
      );
      uniqueId++;
    }

    return (
      <Text key={`text-container-${Math.random().toString(36).slice(2, 8)}`}>
        {parts}
      </Text>
    );
  },
};
