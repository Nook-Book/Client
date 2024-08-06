import { Text } from "react-native";
import { markdownStyle } from "./MarkdownStyle";

export const RenderRules = {
  heading1: (node: any, children: any) => (
    <Text key={node.key} style={markdownStyle.heading1}>
      {children}
    </Text>
  ),
  heading2: (node: any, children: any) => (
    <Text key={node.key} style={markdownStyle.heading2}>
      {children}
    </Text>
  ),
  heading3: (node: any, children: any) => (
    <Text key={node.key} style={markdownStyle.heading3}>
      {children}
    </Text>
  ),
  text: (node: any) => {
    const { content } = node;
    const regex =
      /(T#[0-9A-Fa-f]{6})\[(.*?)\]|(Brgba\(\d{1,3},\s*\d{1,3},\s*\d{1,3},\s*\d(\.\d+)?\))\[(.*?)\]/g;

    const parts = content.split(regex);

    return (
      <Text>
        {parts.map((part: string, index: number) => {
          if (index % 6 === 0) {
            return <Text key={index}>{part}</Text>;
          } else if (index % 6 === 1 && part) {
            const color = part;
            const text = parts[index + 1];
            return (
              <Text key={index} style={{ color: color.slice(1) }}>
                {text}
              </Text>
            );
          } else if (index % 6 === 4 && part) {
            const backgroundColor = parts[3];
            const text = parts[index + 1];
            return (
              <Text
                key={index}
                style={{
                  backgroundColor: backgroundColor.slice(1),
                }}
              >
                {text}
              </Text>
            );
          } else {
            return null;
          }
        })}
      </Text>
    );
  },
};
